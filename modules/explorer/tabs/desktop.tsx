import { ToggleGroupItem } from '@/components/primitives/toggle-group'

import { Button } from '@/components/primitives/button'
import { TabsContent } from '@/components/primitives/tabs'
import { ToggleGroup } from '@/components/primitives/toggle-group'
import { File, Image } from 'lucide-react'

export const ExplorerDesktop = () => {
  return (
    <TabsContent value="desktop">
      <ToggleGroup type="single" className="grid grid-cols-5 gap-2">
        <ToggleGroupItem value="projects" active="solid" asChild>
          <Button
            className="h-20 w-full flex-col [&>svg]:h-6 [&>svg]:w-6"
            variant="ghost"
            size="icon"
          >
            <Image />
            profile.jpg
          </Button>
        </ToggleGroupItem>

        <ToggleGroupItem value="notes" active="solid" asChild>
          <Button
            className="h-20 w-full flex-col [&>svg]:h-6 [&>svg]:w-6"
            variant="ghost"
            size="icon"
          >
            <File />
            registry.txt
          </Button>
        </ToggleGroupItem>
      </ToggleGroup>
    </TabsContent>
  )
}
