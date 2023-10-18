import { Types, createInjectName, expandColorsMap } from './shared'
import { transformJsToSass } from '@/sass/utils'
function generateDefault(typeName: string) {
  return `border-${typeName} [@media(hover:hover)]:hover:border-${typeName}`
}

function generateFocus(typeName: string) {
  return `outline-${typeName}`
}

function generateChecked(typeName: string) {
  return `border-${typeName} bg-${typeName} text-${typeName}-content`
}

const colorsMap = expandColorsMap(Types, (cur) => {
  return {
    default: generateDefault(cur),
    focus: generateFocus(cur),
    checked: generateChecked(cur)
  }
})
const injectName = createInjectName('checkbox')
const sassColors = transformJsToSass(colorsMap)
// const sassDefaults = transformJsToSass(defaults)
export const inject = {
  [injectName.colors]: () => {
    return sassColors
  }
}

// export const options = {
//   colors: colorsMap,
//   defaults
// }
