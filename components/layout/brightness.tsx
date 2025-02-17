'use client'

import { useBrightness } from '@/store/brightness'

export const Brightness = () => {
  const brightness = useBrightness()

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[9999]"
      style={{ backgroundColor: `rgba(0, 0, 0, ${1 - brightness / 100})` }}
    />
  )
}
