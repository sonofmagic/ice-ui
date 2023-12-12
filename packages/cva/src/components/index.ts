// import type { VariantProps } from 'class-variance-authority'
import button from './button'
import loading from './loading'
import mask from './mask'
import { UserDefinedOptions } from '@/types'
import { getOptions } from '@/options'

export type { VariantProps } from 'class-variance-authority'

export function createCva(opts: UserDefinedOptions = {}) {
  const options = getOptions(opts)
  return {
    button: button(options),
    loading: loading(options),
    mask: mask(options)
  }
}
