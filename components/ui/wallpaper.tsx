'use client'

import { useWallpaper } from '@/store/wallpaper'
import Image from 'next/image'
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from '../primitives/context-menu'

export const Wallpaper = () => {
  const [wallpaper] = useWallpaper()

  return (
    <ContextMenu>
      <ContextMenuTrigger>
        <div
          className="fixed inset-0"
          style={{ backgroundColor: wallpaper.value }}
        >
          {wallpaper.type === 'image' && (
            <Image src={wallpaper.value} alt="Wallpaper" quality={100} fill />
          )}

          {wallpaper.type === 'solid' && (
            <div
              className="fixed inset-0"
              style={{ backgroundColor: wallpaper.value }}
            />
          )}
        </div>
      </ContextMenuTrigger>

      <ContextMenuContent>
        <ContextMenuItem>Change wallpaper</ContextMenuItem>
        <ContextMenuItem>Create Folder</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  )
}
