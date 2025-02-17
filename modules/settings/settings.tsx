'use client'

import { Tabs } from '@/components/primitives/tabs'
import type React from 'react'
import { SettingsContent } from './settings.content'
import { SettingsSidebar } from './settings.sidebar'
import {
  type SettingsTab,
  setSettingsTab,
  useSettingsStore,
} from './settings.store'
import { AppearanceSettings } from './tabs/appearence'
import { GeneralSettings } from './tabs/general'
import { ProfileSettings } from './tabs/profile'
import { WallpaperSettings } from './tabs/wallpaper'

export const App = (props: React.ComponentProps<typeof Tabs>) => {
  const { ...rest } = props

  const { tab } = useSettingsStore()

  return (
    <Tabs
      className="flex flex-1"
      orientation="vertical"
      value={tab}
      onValueChange={(value) => setSettingsTab(value as SettingsTab)}
      {...rest}
    >
      <SettingsSidebar />

      <SettingsContent>
        <GeneralSettings />

        <WallpaperSettings />

        <ProfileSettings />

        <AppearanceSettings />
      </SettingsContent>
    </Tabs>
  )
}
