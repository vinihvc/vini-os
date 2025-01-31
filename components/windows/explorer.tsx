'use client'
import { ArrowBigDownDash, Dock, File, Folder } from 'lucide-react'
import { Button } from '../primitives/button'
import { ToggleGroup, ToggleGroupItem } from '../primitives/toggle-group'
import { Window } from '../primitives/window'

const WINDOW_NAME = 'explorer'

interface ExplorerWindowProps extends React.ComponentProps<'div'> {
  zIndex: number
}

export const ExplorerWindow = (props: ExplorerWindowProps) => {
  const { zIndex, ...rest } = props

  return (
    <Window
      className="h-[600px] w-[800px]"
      title="Explorer"
      value={WINDOW_NAME}
      zIndex={zIndex}
      {...rest}
    >
      <div className="flex flex-1">
        <ToggleGroup
          type="single"
          className="flex w-48 shrink-0 flex-col gap-1 border-border border-r p-2"
        >
          <ToggleGroupItem value="documents" asChild>
            <Button
              className="w-full justify-start font-medium data-[state=on]:bg-foreground/10"
              variant="ghost"
            >
              <File />
              Documents
            </Button>
          </ToggleGroupItem>

          <ToggleGroupItem value="desktop" asChild>
            <Button
              className="w-full justify-start font-medium data-[state=on]:bg-foreground/10"
              variant="ghost"
            >
              <Dock />
              Desktop
            </Button>
          </ToggleGroupItem>

          <ToggleGroupItem value="downloads" asChild>
            <Button
              className="w-full justify-start font-medium data-[state=on]:bg-foreground/10"
              variant="ghost"
            >
              <ArrowBigDownDash />
              Downloads
            </Button>
          </ToggleGroupItem>
        </ToggleGroup>

        <div className="w-full bg-background/90 p-4">
          <ToggleGroup type="multiple" className="grid grid-cols-5 gap-4">
            <ToggleGroupItem value="projects" asChild>
              <Button
                className="h-20 w-20 flex-col [&>svg]:h-6 [&>svg]:w-6"
                variant="ghost"
                size="icon"
              >
                <Folder />
                Projects
              </Button>
            </ToggleGroupItem>

            <ToggleGroupItem value="notes" asChild>
              <Button
                className="h-20 w-20 flex-col [&>svg]:h-6 [&>svg]:w-6"
                variant="ghost"
                size="icon"
              >
                <File />
                notes.txt
              </Button>
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
      </div>
    </Window>
  )
}
