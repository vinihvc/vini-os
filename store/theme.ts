import { useAtom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'
import { store } from './global'

export type ThemeColor =
  | 'zinc'
  | 'red'
  | 'rose'
  | 'orange'
  | 'green'
  | 'blue'
  | 'yellow'
  | 'violet'

type ThemeColorState = {
  color: ThemeColor
}

const themeColorAtom = atomWithStorage<ThemeColorState>('theme', {
  color: 'blue',
})

export const useThemeColor = () => {
  const [theme] = useAtom(themeColorAtom)

  return theme
}

export const setThemeColor = (theme: ThemeColorState) => {
  store.set(themeColorAtom, theme)
}
