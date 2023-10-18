import { Types, createInjectName, expandColorsMap } from './shared'
import { transformJsToSass } from '@/sass/utils'

function generateDefault(typeName: string) {
  return `border-${typeName}`
}

function generateFocus(typeName: string) {
  return `outline-${typeName}`
}

const colorsMap = expandColorsMap(Types, (cur) => {
  return {
    default: generateDefault(cur),
    focus: generateFocus(cur)
  }
})

const injectName = createInjectName('input')
const sassColors = transformJsToSass(colorsMap)
// const sassDefaults = transformJsToSass(defaults)
export const inject = {
  [injectName.colors]: () => {
    return sassColors
  }
}
