import Taro from '@tarojs/taro'
import { create } from 'zustand'

export const systemInfo = Taro.getSystemInfoSync()
export interface IThemeState {
  mode: 'light' | 'dark'
  setMode: (mode: IThemeState['mode']) => void
  toggle: () => void
}

const themeKey = '__THEME__'

const initMode: IThemeState['mode'] = Taro.getStorageSync(themeKey) || 'light'

// console.log(initMode, typeof initMode, initMode === '')

export const useThemeStore = create<IThemeState>((set) => {
  function setMode(mode: IThemeState['mode']) {
    set({
      mode,
    })
    Taro.setStorageSync(themeKey, mode)
  }

  return {
    mode: initMode,
    setMode,
    toggle: () => {
      set((state) => {
        const mode = state.mode === 'light' ? 'dark' : 'light'
        Taro.setStorageSync(themeKey, mode)
        return {
          mode,
        }
      })
    },
  }
})

export const useIndexTabbar = create<{
  index: number
  setIndex: (index: number) => void
}>((set) => {
      function setIndex(index: number) {
        set({
          index,
        })
      }

      return {
        index: 0,
        setIndex,

      }
    })
