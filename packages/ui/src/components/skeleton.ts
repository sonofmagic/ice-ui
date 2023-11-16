import { OptionFn, transformCss2Js } from './shared'

export const options: OptionFn = (opts) => {
  const { selector } = opts
  return {
    selector,
    defaults: {
      base: transformCss2Js(`${selector} {
        animation: skeleton-blink var(--skeleton-duration) ease-in-out
        infinite;
      }
      @keyframes skeleton-blink {
        50% {
          opacity: 0.6;
        }
      }`),
      styled: transformCss2Js(`${selector} {
        @apply bg-base-200;
      }`),
      utils: transformCss2Js(`
      ${selector}-title {
        @apply w-2/5 h-4;
      }
      ${selector}-paragraph {
        @apply w-full h-4;
      }
      ${selector}-avatar {
        @apply h-8 w-8 rounded-full; 
      }
      `)
    }
  }
}
