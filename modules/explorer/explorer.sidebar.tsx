import { Button } from '@/components/primitives/button'
import { TabsList, TabsTrigger } from '@/components/primitives/tabs'
import { WindowSidebar } from '@/components/primitives/window/window.sidebar'
import { ArrowBigDownDash, Dock, File } from 'lucide-react'

export const ExplorerSidebar = () => {
  return (
    <WindowSidebar asChild>
      <TabsList>
        <TabsTrigger value="documents" asChild>
          <Button className="w-full justify-start" variant="ghost" size="sm">
            <File />
            Documents
          </Button>
        </TabsTrigger>

        <TabsTrigger value="desktop" asChild>
          <Button className="w-full justify-start" variant="ghost" size="sm">
            <Dock />
            Desktop
          </Button>
        </TabsTrigger>

        <TabsTrigger value="downloads" asChild>
          <Button className="w-full justify-start" variant="ghost" size="sm">
            <ArrowBigDownDash />
            Downloads
          </Button>
        </TabsTrigger>
      </TabsList>
    </WindowSidebar>
  )
}
