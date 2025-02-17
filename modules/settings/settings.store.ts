import { store } from '@/store/global'
import { atom, useAtom } from 'jotai'

export type SettingsTab = 'wallpaper' | 'profile' | 'appearance' | 'general'

interface SettingsStore {
  tab: SettingsTab
}

const settingsStore = atom<SettingsStore>({
  tab: 'profile',
})

export const useSettingsStore = () => {
  const [settings] = useAtom(settingsStore)

  return settings
}

export const setSettingsTab = (tab: SettingsTab) => {
  store.set(settingsStore, { tab })
}
