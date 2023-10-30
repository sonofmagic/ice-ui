import { Types, expandColorsMap } from '../../src/components/shared'
function generateDefault(typeName: string) {
  return `border-${typeName}`
}

function generateFocus(typeName: string) {
  return `outline-${typeName}`
}

function generateFileSelectorButton(typeName: string) {
  return `border-${typeName} bg-${typeName} text-${typeName}-content`
}

const colorsMap = expandColorsMap(Types, (cur) => {
  return {
    default: generateDefault(cur),
    focus: generateFocus(cur),
    fileSelectorButton: generateFileSelectorButton(cur)
  }
})

export const options = {
  colors: colorsMap
  // defaults
}