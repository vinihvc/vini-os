import { Button } from '@/components/primitives/button'
import { TabsList, TabsTrigger } from '@/components/primitives/tabs'
import { WindowSidebar } from '@/components/primitives/window/window.sidebar'
import { Clock, Heart, Users } from 'lucide-react'

export const PhotosSidebar = () => {
  return (
    <WindowSidebar asChild>
      <TabsList>
        <TabsTrigger value="recents" asChild>
          <Button className="w-full justify-start" variant="ghost" size="sm">
            <Clock />
            Recents
          </Button>
        </TabsTrigger>

        <TabsTrigger value="favorites" asChild>
          <Button className="w-full justify-start" variant="ghost" size="sm">
            <Heart />
            Favorites
          </Button>
        </TabsTrigger>

        <TabsTrigger value="people" asChild>
          <Button className="w-full justify-start" variant="ghost" size="sm">
            <Users />
            People
          </Button>
        </TabsTrigger>
      </TabsList>
    </WindowSidebar>
  )
}
