import type { CodegenOptions, TailwindcssPluginOptions } from './types'

// export const Types = ['primary', 'info', 'success', 'warning', 'error', 'neutral']

export const shareVars = {
  'rounded-box': '1rem',
  'rounded-btn': '0.5rem',
  'rounded-badge': '1.9rem',
  'animation-btn': '0.25s',
  'animation-input': '0.2s',
  'btn-text-case': 'uppercase',
  'btn-focus-scale': '0.95',
  'border-btn': '1px',
  'tab-border': '1px',
  'tab-radius': '0.5rem'
}

// const defaultColorVars = {
//   // primary
//   // blue-6
//   primary: '#1677ff',
//   // blue-5
//   'primary-hover': '#4096ff',
//   // blue-7
//   'primary-focus': '#0958d9',
//   // white
//   'primary-content': '#ffffff',
//   // success

//   // green-6
//   success: '#52c41a',
//   'success-hover': '#73d13d',
//   'success-focus': '#389e0d',
//   'success-content': '#ffffff',
//   // warning
//   // gold-6
//   warning: '#faad14',
//   // gold-5
//   'warning-hover': '#ffc53d',
//   'warning-focus': '#d48806',
//   'warning-content': '#ffffff',
//   // error
//   // red-6
//   error: '#f5222d',
//   // red-5
//   'error-hover': '#ff4d4f',
//   'error-focus': '#cf1322',
//   'error-content': '#ffffff',
//   // info
//   // blue-6
//   info: '#1677ff',
//   // blue-5
//   'info-hover': '#4096ff',
//   'info-focus': '#0958d9',
//   'info-content': '#ffffff',
//   // neutral
//   neutral: '#bfbfbf',
//   'neutral-hover': '#d9d9d9',
//   'neutral-focus': '#8c8c8c',
//   'neutral-content': '#ffffff',
//   // base
//   'base-100': '#ffffff',
//   'base-200': 'rgb(242, 242, 242)',
//   'base-300': 'rgb(229, 230, 230)',
//   'base-content': 'rgb(31, 41, 55)'
// }

// const defaultDarkColorVars: Record<keyof typeof defaultColorVars, string> = {
//   // primary
//   // blue-6
//   primary: '#1668dc',
//   // blue-5
//   'primary-hover': '#1554ad',
//   'primary-focus': '#3c89e8',
//   'primary-content': '#000000',
//   // success

//   // green-6
//   success: '#49aa19',
//   // green-5
//   'success-hover': '#3c8618',
//   'success-focus': '#6abe39',
//   'success-content': '#000000',
//   // warning
//   // gold-6
//   warning: '#d89614',
//   // gold-5
//   'warning-hover': '#aa7714',
//   'warning-focus': '#e8b339',
//   'warning-content': '#000000',
//   // error
//   // red-6
//   error: '#d32029',
//   // red-5
//   'error-hover': '#a61d24',
//   'error-focus': '#e84749',
//   'error-content': '#000000',
//   // info
//   // blue-6
//   info: '#1668dc',
//   // blue-5
//   'info-hover': '#1554ad',
//   'info-focus': '#3c89e8',
//   'info-content': '#000000',
//   // neutral
//   neutral: '#bfbfbf',
//   'neutral-hover': '#d9d9d9',
//   'neutral-focus': '#8c8c8c',
//   'neutral-content': '#ffffff',
//   // neutral: 'rgb(42, 50, 60)',
//   // 'neutral-focus': 'rgb(36, 43, 51)',
//   // 'neutral-content': 'rgb(166, 173, 186)',
//   // base
//   'base-100': 'rgb(29, 35, 42)',
//   'base-200': 'rgb(25, 30, 36)',
//   'base-300': 'rgb(21, 25, 30)',
//   'base-content': 'rgb(166, 173, 186)'
// }

export function getCodegenDefaults(): Partial<CodegenOptions> {
  return {
    log: true,
    rtl: false,
    styled: true,
    global: {
      atMedia: {
        hover: false
      },
      selector: {
        universal: '*',
        globalKeyword: 'global'
      },
      pseudo: {
        where: true
      }
    },
    base: {
      selector: {
        light: ':root',
        dark: '[data-theme="dark"]'
      },
      types: {
        primary: {
          light: {
            primary: '#1677ff',
            // blue-5
            'primary-hover': '#4096ff',
            // blue-7
            'primary-focus': '#0958d9',
            // white
            'primary-content': '#ffffff'
          },
          dark: {
            // blue-6
            primary: '#1668dc',
            // blue-5
            'primary-hover': '#1554ad',
            'primary-focus': '#3c89e8',
            'primary-content': '#000000'
          }
        },
        success: {
          light: {
            success: '#52c41a',
            'success-hover': '#73d13d',
            'success-focus': '#389e0d',
            'success-content': '#ffffff'
          },
          dark: {
            // green-6
            success: '#49aa19',
            // green-5
            'success-hover': '#3c8618',
            'success-focus': '#6abe39',
            'success-content': '#000000'
          }
        },
        warning: {
          light: {
            // gold-6
            warning: '#faad14',
            // gold-5
            'warning-hover': '#ffc53d',
            'warning-focus': '#d48806',
            'warning-content': '#ffffff'
          },
          dark: {
            warning: '#d89614',
            // gold-5
            'warning-hover': '#aa7714',
            'warning-focus': '#e8b339',
            'warning-content': '#000000'
          }
        },
        error: {
          light: {
            // red-6
            error: '#f5222d',
            // red-5
            'error-hover': '#ff4d4f',
            'error-focus': '#cf1322',
            'error-content': '#ffffff'
          },
          dark: {
            error: '#d32029',
            // red-5
            'error-hover': '#a61d24',
            'error-focus': '#e84749',
            'error-content': '#000000'
          }
        },
        info: {
          light: {
            info: '#1677ff',
            // blue-5
            'info-hover': '#4096ff',
            'info-focus': '#0958d9',
            'info-content': '#ffffff'
          },
          dark: {
            info: '#1668dc',
            // blue-5
            'info-hover': '#1554ad',
            'info-focus': '#3c89e8',
            'info-content': '#000000'
          }
        },
        neutral: {
          light: {
            neutral: '#bfbfbf',
            'neutral-hover': '#d9d9d9',
            'neutral-focus': '#8c8c8c',
            'neutral-content': '#ffffff'
          },
          dark: {
            neutral: '#bfbfbf',
            'neutral-hover': '#d9d9d9',
            'neutral-focus': '#8c8c8c',
            'neutral-content': '#ffffff'
          }
        }
      },
      extraVars: {
        light: {
          'base-100': '#ffffff',
          'base-200': 'rgb(242, 242, 242)',
          'base-300': 'rgb(229, 230, 230)',
          'base-content': 'rgb(31, 41, 55)',
          ...shareVars
        },
        dark: {
          'base-100': 'rgb(29, 35, 42)',
          'base-200': 'rgb(25, 30, 36)',
          'base-300': 'rgb(21, 25, 30)',
          'base-content': 'rgb(166, 173, 186)',
          ...shareVars
        }
      }
    }
  }
}

export function getTailwindcssPluginDefaults(): Partial<TailwindcssPluginOptions> {
  return {
    log: true,
    rtl: false,
    styled: true,
    global: {
      atMedia: {
        hover: false
      },
      selector: {
        universal: '*',
        globalKeyword: 'global'
      },
      pseudo: {
        where: true
      }
    },
    base: {
      selector: {
        entries: []
      }
    }
  }
}