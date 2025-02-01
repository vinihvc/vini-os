import { ToggleGroupItem } from '@/components/primitives/toggle-group'

import { Button } from '@/components/primitives/button'
import { TabsContent } from '@/components/primitives/tabs'
import { ToggleGroup } from '@/components/primitives/toggle-group'
import {
  SiFirefox,
  SiFirefoxHex,
  SiRaycast,
  SiRaycastHex,
} from '@icons-pack/react-simple-icons'

export const ExplorerDownloads = () => {
  return (
    <TabsContent value="downloads">
      <ToggleGroup type="single" className="grid grid-cols-5 gap-2">
        <ToggleGroupItem value="projects" asChild>
          <Button
            className="h-20 w-full flex-col [&>svg]:h-6 [&>svg]:w-6"
            variant="ghost"
            size="icon"
          >
            <SiFirefox
              style={{
                fill: SiFirefoxHex,
              }}
            />
            firefox.dmg
          </Button>
        </ToggleGroupItem>

        <ToggleGroupItem value="notes" asChild>
          <Button
            className="h-20 w-full flex-col [&>svg]:h-6 [&>svg]:w-6"
            variant="ghost"
            size="icon"
          >
            <SiRaycast
              style={{
                fill: SiRaycastHex,
              }}
            />
            raycast.dmg
          </Button>
        </ToggleGroupItem>
      </ToggleGroup>
    </TabsContent>
  )
}
