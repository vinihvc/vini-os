'use client'
import { DropdownItem } from '@/components/primitives/dropdown'
import { Tabs } from '@/components/primitives/tabs'
import type React from 'react'
import { Window } from '../../primitives/window/window'
import { ExplorerContent } from './explorer.content'
import { ExplorerSidebar } from './explorer.sidebar'
import { ExplorerDesktop } from './tabs/desktop'
import { ExplorerDocuments } from './tabs/documents'
import { ExplorerDownloads } from './tabs/downloads'

const WINDOW_NAME = 'explorer'

interface ExplorerWindowProps extends React.ComponentProps<'div'> {
  zIndex: number
}

export const ExplorerWindow = (props: ExplorerWindowProps) => {
  const { zIndex, children, ...rest } = props

  return (
    <Window
      className="h-[600px] w-[800px]"
      title="Explorer"
      value={WINDOW_NAME}
      zIndex={zIndex}
      dropdown={<DropdownItem>New Folder</DropdownItem>}
      {...rest}
    >
      <Tabs
        className="flex flex-1"
        orientation="vertical"
        defaultValue="documents"
      >
        <ExplorerSidebar />

        <ExplorerContent>
          <ExplorerDocuments />

          <ExplorerDesktop />

          <ExplorerDownloads />
        </ExplorerContent>
      </Tabs>
    </Window>
  )
}
