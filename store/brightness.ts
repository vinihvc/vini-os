import { useAtom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'
import { store } from './global'

export const brightnessAtom = atomWithStorage<number>('brightness', 100)

export const useBrightness = () => {
  const [brightness] = useAtom(brightnessAtom)

  return brightness
}

export const setBrightness = (brightness: number) => {
  if (brightness < 20) return

  store.set(brightnessAtom, brightness)
}
