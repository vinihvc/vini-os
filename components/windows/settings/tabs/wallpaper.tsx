import { ToggleGroupItem } from '@/components/primitives/toggle-group'
import { useWallpaper } from '@/store/wallpaper'
import { ToggleGroup } from '@radix-ui/react-toggle-group'

export const WallpaperTab = () => {
  const [, setWallpaper] = useWallpaper()

  return (
    <ToggleGroup className="grid gap-2" type="single">
      <div className="flex items-center justify-between">
        <div className="font-semibold text-sm">Solid</div>

        {/* <button type="button" className="text-muted-foreground text-xs">
          Show all (11)
        </button> */}
      </div>

      <div className="grid grid-cols-4 gap-2">
        <ToggleGroupItem
          value="blue"
          className="h-20 w-full cursor-pointer rounded-lg bg-blue-700 data-[state=on]:ring-2 data-[state=on]:ring-foreground data-[state=on]:ring-offset-1 data-[state=on]:ring-offset-background"
          onClick={() => setWallpaper({ type: 'solid', value: '#1347E6' })}
        />

        <ToggleGroupItem
          value="indigo"
          className="h-20 w-full cursor-pointer rounded-lg bg-indigo-700 data-[state=on]:ring-2 data-[state=on]:ring-foreground data-[state=on]:ring-offset-1 data-[state=on]:ring-offset-background"
          onClick={() => setWallpaper({ type: 'solid', value: '#432DD7' })}
        />

        <ToggleGroupItem
          value="teal"
          className="h-20 w-full cursor-pointer rounded-lg bg-teal-700 data-[state=on]:ring-2 data-[state=on]:ring-foreground data-[state=on]:ring-offset-1 data-[state=on]:ring-offset-background"
          onClick={() => setWallpaper({ type: 'solid', value: '#01786F' })}
        />

        <ToggleGroupItem
          value="rose"
          className="h-20 w-full cursor-pointer rounded-lg bg-rose-700 data-[state=on]:ring-2 data-[state=on]:ring-foreground data-[state=on]:ring-offset-1 data-[state=on]:ring-offset-background"
          onClick={() => setWallpaper({ type: 'solid', value: '#C70036' })}
        />
      </div>
    </ToggleGroup>
  )
}
