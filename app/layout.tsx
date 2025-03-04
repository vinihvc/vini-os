import type { Metadata } from 'next'
import '@/styles/global.css'
import { fontSans } from '@/lib/font'

import { ReactScan } from '@/components/debug/react-scan'
import { Brightness } from '@/components/layout/brightness'
import { Dock } from '@/components/layout/dock'
import { Wallpaper } from '@/components/layout/wallpaper'
import { WindowManager } from '@/components/ui/window-manager'
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

          <Brightness />

          <ReactScan />
        </Providers>
      </body>
    </html>
  )
}

export default RootLayout
