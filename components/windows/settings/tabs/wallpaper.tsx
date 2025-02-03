'use client'

import { TabsContent } from '@/components/primitives/tabs'
import { ToggleGroupItem } from '@/components/primitives/toggle-group'
import { Upload } from '@/components/primitives/upload'
import { setWallpaper, useWallpaper } from '@/store/wallpaper'
import { ToggleGroup } from '@radix-ui/react-toggle-group'
import { AnimatePresence, motion } from 'motion/react'

export const WallpaperSettings = () => {
  const wallpaper = useWallpaper()

  const imagePlaceholder = wallpaper.type === 'image' ? wallpaper.value : null

  return (
    <TabsContent value="wallpaper" asChild>
      <ToggleGroup className="flex flex-col gap-4" type="single">
        <div className="grid gap-2">
          <div className="flex items-center justify-between">
            <div className="font-medium text-sm">Solid</div>
          </div>

          <div className="grid grid-cols-4 gap-2">
            <ToggleGroupItem
              value="blue"
              className="h-20 w-full cursor-pointer rounded-xl border bg-blue-700"
              onClick={() =>
                setWallpaper({ type: 'solid', value: 'bg-blue-700' })
              }
            />

            <ToggleGroupItem
              value="indigo"
              className="h-20 w-full cursor-pointer rounded-xl border bg-indigo-700"
              onClick={() =>
                setWallpaper({ type: 'solid', value: 'bg-indigo-700' })
              }
            />

            <ToggleGroupItem
              value="teal"
              className="h-20 w-full cursor-pointer rounded-xl border bg-teal-700"
              onClick={() =>
                setWallpaper({ type: 'solid', value: 'bg-teal-700' })
              }
            />

            <ToggleGroupItem
              value="rose"
              className="h-20 w-full cursor-pointer rounded-xl border bg-rose-700"
              onClick={() =>
                setWallpaper({ type: 'solid', value: 'bg-rose-700' })
              }
            />
          </div>
        </div>

        <div className="grid gap-2">
          <div className="flex items-center justify-between">
            <div className="font-medium text-sm">Upload</div>
          </div>

          <div className="grid grid-cols-4 gap-2">
            <AnimatePresence mode="wait" initial={false}>
              {imagePlaceholder && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  transition={{ duration: 0.2 }}
                  exit={{ opacity: 0, scale: 0.95, x: -8 }}
                  className="h-20 w-full rounded-xl border p-0.5"
                >
                  <img
                    src={imagePlaceholder}
                    alt="Preview"
                    className="h-full w-full rounded-lg object-cover"
                  />
                </motion.div>
              )}
            </AnimatePresence>

            <Upload
              placeholder={imagePlaceholder}
              onUpload={(e) => setWallpaper({ type: 'image', value: e })}
            />
          </div>
        </div>
      </ToggleGroup>
    </TabsContent>
  )
}
