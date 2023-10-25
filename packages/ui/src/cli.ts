// codegen
// prepare
import fs from 'node:fs/promises'
import path from 'node:path'
import createCli from 'cac'
import { loadConfig } from 'c12'
import type { CodegenOptions } from './types'
import { buildAll } from './generate'
import { getCliCodegenOptions } from './options'
// import { getCodegenOptions } from '@/options'
const cli = createCli()

export async function load(cwd?: string) {
  const { config } = await loadConfig<CodegenOptions>({
    name: 'icestack',
    cwd
    // defaultConfig: getCodegenOptions()
  })
  return config
}

cli.command('init', 'init config').action(async () => {
  await fs.writeFile(path.resolve(process.cwd(), './icestack.config.ts'), `import { defineConfig } from '@icestack/ui'\n\nexport default defineConfig({})`)
})

cli.command('codegen', 'code generate').action(async () => {
  let config = await load()
  if (config) {
    config = getCliCodegenOptions(config)
    await buildAll(config)
  }
})

cli.help()
cli.version('0.0.0')
cli.parse()
