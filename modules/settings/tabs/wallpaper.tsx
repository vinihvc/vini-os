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
      <ToggleGroup
        className="flex flex-col gap-4"
        type="single"
        onValueChange={(e) =>
          setWallpaper({
            type: 'solid',
            value: e,
          })
        }
      >
        <div className="grid gap-2">
          <div className="flex items-center justify-between">
            <div className="font-medium text-sm">Solid</div>
          </div>

          <div className="grid grid-cols-4 gap-2">
            <ToggleGroupItem
              value="bg-blue-700"
              className="h-20 w-full rounded-xl border border-muted-foreground bg-blue-700"
            />

            <ToggleGroupItem
              value="bg-indigo-700"
              className="h-20 w-full rounded-xl border border-muted-foreground bg-indigo-700"
            />

            <ToggleGroupItem
              value="bg-teal-700"
              className="h-20 w-full rounded-xl border border-muted-foreground bg-teal-700"
            />

            <ToggleGroupItem
              value="bg-rose-700"
              className="h-20 w-full rounded-xl border border-muted-foreground bg-rose-700"
            />
          </div>
        </div>

        <div className="grid gap-2">
          <div className="flex items-center justify-between">
            <div className="font-medium text-sm">Upload</div>
          </div>

          <div className="grid grid-cols-4 gap-2">
            <AnimatePresence mode="popLayout" initial={false}>
              {imagePlaceholder && (
                <motion.div
                  key="upload-wallpaper"
                  layoutId="upload-wallpaper"
                  className="h-20 w-full rounded-xl border border-muted-foreground p-0.5"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                >
                  <img
                    src={imagePlaceholder}
                    alt="Preview wallpaper"
                    className="h-full w-full rounded-lg object-cover"
                  />
                </motion.div>
              )}

              <Upload
                placeholder={imagePlaceholder}
                onUpload={(e) => setWallpaper({ type: 'image', value: e })}
                asChild
              >
                <motion.div
                  key="uploaded-wallpaper"
                  layoutId="uploaded-wallpaper"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                />
              </Upload>
            </AnimatePresence>
          </div>
        </div>
      </ToggleGroup>
    </TabsContent>
  )
}
