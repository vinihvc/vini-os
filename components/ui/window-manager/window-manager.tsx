'use client'

import { BrowserWindow } from '@/components/windows/browser'
import { CalculatorWindow } from '@/components/windows/calculator'
import { CalendarWindow } from '@/components/windows/calendar/calendar'
import { ExplorerWindow } from '@/components/windows/explorer/explorer'
import { NotepadWindow } from '@/components/windows/notepad'
import { PhotosWindow } from '@/components/windows/photos/photos'
import { VideoPlayerWindow } from '@/components/windows/video-player'
import { SettingsWindow } from '../../windows/settings'
import { useWindowHistory } from './window.history'
import type { WindowManagerState } from './window.store'

export const WindowManager = () => {
  const windowHistory = useWindowHistory()

  const determineZIndex = (window: keyof WindowManagerState) => {
    const index = windowHistory.history.indexOf(window)

    return 20 + (index === -1 ? 0 : windowHistory.history.length - index)
  }

  return (
    <>
      <SettingsWindow zIndex={determineZIndex('settings')} />

      <ExplorerWindow zIndex={determineZIndex('explorer')} />

      <BrowserWindow zIndex={determineZIndex('browser')} />

      <CalendarWindow zIndex={determineZIndex('calendar')} />

      <NotepadWindow zIndex={determineZIndex('notepad')} />

      <CalculatorWindow zIndex={determineZIndex('calculator')} />

      <VideoPlayerWindow zIndex={determineZIndex('player')} />

      <PhotosWindow zIndex={determineZIndex('photos')} />
    </>
  )
}
