import { ToggleGroupItem } from '@/components/primitives/toggle-group'

import { Button } from '@/components/primitives/button'
import { TabsContent } from '@/components/primitives/tabs'
import { ToggleGroup } from '@/components/primitives/toggle-group'
import { File, Folder } from 'lucide-react'

export const ExplorerDocuments = () => {
  return (
    <TabsContent value="documents">
      <ToggleGroup type="single" className="grid grid-cols-5 gap-2">
        <ToggleGroupItem value="projects" active="solid" asChild>
          <Button
            className="h-20 w-full flex-col [&>svg]:h-6 [&>svg]:w-6"
            variant="ghost"
            size="icon"
          >
            <Folder />
            Projects
          </Button>
        </ToggleGroupItem>

        <ToggleGroupItem value="notes" active="solid" asChild>
          <Button
            className="h-20 w-full flex-col [&>svg]:h-6 [&>svg]:w-6"
            variant="ghost"
            size="icon"
          >
            <File />
            notes.txt
          </Button>
        </ToggleGroupItem>
      </ToggleGroup>
    </TabsContent>
  )
}
