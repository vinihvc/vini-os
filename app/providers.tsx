'use client'

import { store } from '@/store/global'
import { Provider as JotaiProvider } from 'jotai'
import { ThemeProvider } from 'next-themes'

export const Providers = ({ children }: React.PropsWithChildren) => {
  return (
    <ThemeProvider attribute="class" enableSystem>
      <JotaiProvider store={store}>{children}</JotaiProvider>
    </ThemeProvider>
  )
}
