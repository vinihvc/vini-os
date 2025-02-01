'use client'

import { Tabs } from '@/components/primitives/tabs'
import type React from 'react'
import { Window } from '../../primitives/window/window'
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

const WINDOW_NAME = 'settings'

interface SettingsWindowProps extends React.ComponentProps<'div'> {
  zIndex: number
}

export const SettingsWindow = (props: SettingsWindowProps) => {
  const { zIndex, ...rest } = props

  const { tab } = useSettingsStore()

  return (
    <Window
      title="Settings"
      className="h-[400px] w-[600px]"
      value={WINDOW_NAME}
      zIndex={zIndex}
      {...rest}
    >
      <Tabs
        className="flex flex-1"
        orientation="vertical"
        value={tab}
        onValueChange={(value) => setSettingsTab(value as SettingsTab)}
      >
        <SettingsSidebar />

        <SettingsContent>
          <GeneralSettings />

          <WallpaperSettings />

          <ProfileSettings />

          <AppearanceSettings />
        </SettingsContent>
      </Tabs>
    </Window>
  )
}
