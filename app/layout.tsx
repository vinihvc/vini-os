import type { Metadata } from 'next'
import '@/styles/global.css'
import { Dock } from '@/components/layout/dock/dock'
import { Wallpaper } from '@/components/layout/wallpaper'
import { WindowManager } from '@/components/ui/window-manager'
import { fontSans } from '@/lib/font'

import { Providers } from './providers'

export const metadata: Metadata = {
  title: {
    default: 'Vini OS',
    template: '%s | Vini OS',
  },
  description: 'Vini OS',
}

const RootLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={fontSans.variable}>
        <Providers>
          {children}

          <Wallpaper />

          <WindowManager />

          <Dock />
        </Providers>
      </body>
    </html>
  )
}

export default RootLayout
