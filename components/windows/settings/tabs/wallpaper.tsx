import { TabsContent } from '@/components/primitives/tabs'
import { ToggleGroupItem } from '@/components/primitives/toggle-group'
import { Upload } from '@/components/primitives/upload'
import { setWallpaper } from '@/store/wallpaper'
import { ToggleGroup } from '@radix-ui/react-toggle-group'

export const WallpaperSettings = () => {
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
            <Upload
              onUpload={(result) =>
                setWallpaper({ type: 'image', value: result })
              }
            />
          </div>
        </div>
      </ToggleGroup>
    </TabsContent>
  )
}
