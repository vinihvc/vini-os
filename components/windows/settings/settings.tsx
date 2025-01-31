'use client'

import {
  ToggleGroup,
  ToggleGroupItem,
} from '@/components/primitives/toggle-group'
import { Image, Paintbrush, Settings, User } from 'lucide-react'
import React from 'react'
import { Window } from '../../primitives/window'
import { AppearanceTab } from './tabs/appearence'
import { GeneralTab } from './tabs/general'
import { ProfileTab } from './tabs/profile'
import { WallpaperTab } from './tabs/wallpaper'

type ActiveTab = 'general' | 'wallpaper' | 'profile' | 'appearance'

const WINDOW_NAME = 'settings'

interface SettingsWindowProps extends React.ComponentProps<'div'> {
  zIndex: number
}

export const SettingsWindow = (props: SettingsWindowProps) => {
  const { zIndex, ...rest } = props

  const [activeTab, setActiveTab] = React.useState<ActiveTab>('wallpaper')

  return (
    <Window
      title="Settings"
      className="h-[400px] w-[600px]"
      value={WINDOW_NAME}
      zIndex={zIndex}
      {...rest}
    >
      <div className="flex flex-1">
        <div className="grid w-40 shrink-0 gap-0.5 p-2">
          <ToggleGroup
            type="single"
            value={activeTab}
            onValueChange={(value) => setActiveTab(value as ActiveTab)}
            className="w-full"
          >
            <ToggleGroupItem
              value="wallpaper"
              className="flex h-8 w-full items-center justify-start rounded-md px-2 font-medium data-[state=on]:bg-accent data-[state=on]:text-accent-foreground"
              onClick={() => setActiveTab('wallpaper')}
              disabled={activeTab === 'wallpaper'}
            >
              <Image />
              Wallpaper
            </ToggleGroupItem>

            <ToggleGroupItem
              value="profile"
              className="flex h-8 w-full items-center justify-start rounded-md px-2 font-medium data-[state=on]:bg-accent data-[state=on]:text-accent-foreground"
              onClick={() => setActiveTab('profile')}
              disabled={activeTab === 'profile'}
            >
              <User />
              Profile
            </ToggleGroupItem>

            <ToggleGroupItem
              value="appearance"
              className="flex h-8 w-full items-center justify-start rounded-md px-2 font-medium data-[state=on]:bg-accent data-[state=on]:text-accent-foreground"
              onClick={() => setActiveTab('appearance')}
              disabled={activeTab === 'appearance'}
            >
              <Paintbrush />
              Appearance
            </ToggleGroupItem>

            <ToggleGroupItem
              value="general"
              className="flex h-8 w-full items-center justify-start rounded-md px-2 font-medium data-[state=on]:bg-accent data-[state=on]:text-accent-foreground"
              onClick={() => setActiveTab('general')}
              disabled={activeTab === 'general'}
            >
              <Settings />
              General
            </ToggleGroupItem>
          </ToggleGroup>
        </div>

        <div className="flex w-full flex-1 flex-col bg-background/95 p-2">
          {activeTab === 'general' && <GeneralTab />}
          {activeTab === 'wallpaper' && <WallpaperTab />}
          {activeTab === 'profile' && <ProfileTab />}
          {activeTab === 'appearance' && <AppearanceTab />}
        </div>
      </div>
    </Window>
  )
}
