'use client'

import { cn } from '@/lib/cn'
import { useWallpaper } from '@/store/wallpaper'
import Image from 'next/image'

import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from '@/components/primitives/context-menu'
import { openWindow } from '@/components/ui/window-manager/window.store'
import { setSettingsTab } from '@/modules/settings/settings.store'

export const Wallpaper = () => {
  const wallpaper = useWallpaper()

  const handleChangeWallpaper = () => {
    openWindow('settings')
    setSettingsTab('wallpaper')
  }

  return (
    <ContextMenu>
      <ContextMenuTrigger>
        <div
          className="fixed inset-0"
          style={{ backgroundColor: wallpaper.value }}
        >
          {wallpaper.type === 'image' && (
            <Image
              src={wallpaper.value}
              alt="Wallpaper"
              className="pointer-events-none object-cover"
              quality={100}
              fill
            />
          )}

          {wallpaper.type === 'solid' && (
            <div className={cn('fixed inset-0', wallpaper.value)} />
          )}
        </div>
      </ContextMenuTrigger>

      <ContextMenuContent>
        <ContextMenuItem onSelect={handleChangeWallpaper}>
          Change wallpaper
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  )
}
