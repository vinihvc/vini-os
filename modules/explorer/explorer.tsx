'use client'

import { Tabs } from '@/components/primitives/tabs'
import type React from 'react'
import { ExplorerContent } from './explorer.content'
import { ExplorerSidebar } from './explorer.sidebar'
import { ExplorerDesktop } from './tabs/desktop'
import { ExplorerDocuments } from './tabs/documents'
import { ExplorerDownloads } from './tabs/downloads'

export const App = (props: React.ComponentProps<typeof Tabs>) => {
  const { ...rest } = props

  return (
    <Tabs
      className="flex flex-1"
      orientation="vertical"
      defaultValue="documents"
      {...rest}
    >
      <ExplorerSidebar />

      <ExplorerContent>
        <ExplorerDocuments />

        <ExplorerDesktop />

        <ExplorerDownloads />
      </ExplorerContent>
    </Tabs>
  )
}
