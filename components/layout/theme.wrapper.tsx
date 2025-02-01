'use client'

import '@/styles/theme.css'

import { useThemeColor } from '@/store/theme'

export const ThemeWrapper = (props: React.PropsWithChildren) => {
  const theme = useThemeColor()

  return <main className={`theme-${theme.color}`} {...props} />
}
