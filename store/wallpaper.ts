import { useAtom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'

type WallpaperState = {
  type: 'solid' | 'image'
  value: string
}

const wallpaperAtom = atomWithStorage<WallpaperState>('wallpaper', {
  type: 'solid',
  value: '#432DD7',
})

export const useWallpaper = () => {
  return useAtom(wallpaperAtom)
}
