import { useAtom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'
import { store } from './global'

type WallpaperState = {
  type: 'solid' | 'image'
  value: string
}

const wallpaperAtom = atomWithStorage<WallpaperState>('wallpaper', {
  type: 'solid',
  value: '#432DD7',
})

export const useWallpaper = () => {
  const [wallpaper] = useAtom(wallpaperAtom)

  return wallpaper
}

export const setWallpaper = (wallpaper: WallpaperState) => {
  store.set(wallpaperAtom, wallpaper)
}
