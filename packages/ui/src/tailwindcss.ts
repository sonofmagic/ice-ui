import path from 'node:path'
import fs from 'node:fs'
import plugin from 'tailwindcss/plugin'
import merge from 'merge'
import type { CssInJs } from 'postcss-js'
import type { PluginCreator } from 'tailwindcss/types/config'
// import objHash from 'object-hash'
import type * as _base from '../assets/js/base/index.js'
import type * as _components from '../assets/js/components/index.js'
import type * as _utilities from '../assets/js/utilities/index.js'
import type { DeepPartial, TailwindcssPluginOptions } from './types'
import { getJsProcess } from '@/postcss'
import { logger } from '@/log'

function requireLib(id: string, basedir?: string) {
  return require(basedir ? path.resolve(basedir, id) : path.join('../assets', id))
}

// function isRunByVscodePlugin() {
//   return process.env.VSCODE_PID !== undefined
// }

const noop: PluginCreator = () => {}

export const icestackPlugin = plugin.withOptions(
  function (opts: DeepPartial<TailwindcssPluginOptions>) {
    try {
      if (opts && opts.loaddir) {
        const { loaddir } = opts
        const loadDirPath = loaddir

        if (!fs.existsSync(loadDirPath)) {
          logger.warn(`Can not find loadDirPath:${loadDirPath}, make sure this dir is existed`)
          return noop
        }
        const base = requireLib('js/base/index.js', loadDirPath) as typeof _base
        const components = requireLib('js/components/index.js', loadDirPath) as typeof _components
        const utilities = requireLib('js/utilities/index.js', loadDirPath) as typeof _utilities
        if (base && components && utilities) {
          const componentsEntries = Object.entries(components)
          const utilitiesEntries = Object.entries(utilities)
          const { baseProcess, componentsProcess, utilitiesProcess } = getJsProcess()

          const baseObj = baseProcess(base)

          return function ({ addBase, addComponents, addUtilities }) {
            addBase(baseObj)

            for (const [, item] of componentsEntries) {
              // 优先级 utils > index > base
              const cssItems: (CssInJs | undefined)[] = [item.base, item.styled, item.utils]

              let cssObj = merge.recursive(true, ...cssItems)

              cssObj = componentsProcess(cssObj)

              addComponents(cssObj)
            }

            for (const [, item] of utilitiesEntries) {
              const cssItems: (CssInJs | undefined)[] = [item]

              let cssObj = merge.recursive(true, ...cssItems)

              cssObj = utilitiesProcess(cssObj)

              addUtilities(cssObj)
            }
          }
        }
      }

      return noop
    } catch (error) {
      console.error(error)
      return noop
    }
  },
  function () {
    return {}
  }
)
