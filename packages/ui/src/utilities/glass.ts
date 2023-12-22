import { transformCss2Js } from '@/shared'

export default () => {
  return transformCss2Js(`.glass {
    border: none;
    backdrop-filter: blur(var(--glass-blur, 40px));
    background-color: transparent;
    background-image: linear-gradient(135deg, rgb(255 255 255 / var(--glass-opacity, 30%)) 0%, rgb(0 0 0 / 0%) 100%),
      linear-gradient(
        var(--glass-reflex-degree, 100deg),
        rgb(255 255 255 / var(--glass-reflex-opacity, 10%)) 25%,
        rgb(0 0 0 / 0%) 25%
      );
    box-shadow:
      0 0 0 1px rgb(255 255 255 / var(--glass-border-opacity, 10%)) inset,
      0 0 0 2px rgb(0 0 0 / 5%);
    text-shadow: 0 1px rgb(0 0 0 / var(--glass-text-shadow-opacity, 5%));
  }`)
}
