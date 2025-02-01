import { Button } from '@/components/primitives/button'
import { TabsList } from '@/components/primitives/tabs'
import { TabsTrigger } from '@/components/primitives/tabs'
import { WindowSidebar } from '@/components/primitives/window/window.sidebar'
import { Image, Paintbrush, Settings, User } from 'lucide-react'

export const SettingsSidebar = () => {
  return (
    <WindowSidebar asChild>
      <TabsList>
        <TabsTrigger value="profile" asChild>
          <Button className="w-full justify-start" variant="ghost" size="sm">
            <User />
            Profile
          </Button>
        </TabsTrigger>

        <TabsTrigger value="wallpaper" asChild>
          <Button className="w-full justify-start" variant="ghost" size="sm">
            <Image />
            Wallpaper
          </Button>
        </TabsTrigger>

        <TabsTrigger value="appearance" asChild>
          <Button className="w-full justify-start" variant="ghost" size="sm">
            <Paintbrush />
            Appearance
          </Button>
        </TabsTrigger>

        <TabsTrigger value="general" asChild>
          <Button className="w-full justify-start" variant="ghost" size="sm">
            <Settings />
            General
          </Button>
        </TabsTrigger>
      </TabsList>
    </WindowSidebar>
  )
}
