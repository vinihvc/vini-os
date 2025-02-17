'use client'
import { useWallpaper } from '@/store/wallpaper'
import Image from 'next/image'

import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from '@/components/primitives/context-menu'
import { cn } from '@/lib/cn'
import { setSettingsTab } from '@/modules/settings/settings.store'
import { openWindow } from '@/store/window'

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
          className={cn('fixed inset-0 select-none', {
            [wallpaper.value]: wallpaper.type === 'solid',
          })}
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
