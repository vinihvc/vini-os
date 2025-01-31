'use client'

import { ChevronLeft, ChevronRight, RefreshCcw, User } from 'lucide-react'
import React from 'react'
import { Button } from '../primitives/button'
import { Input } from '../primitives/input'
import { Window } from '../primitives/window'

const WINDOW_NAME = 'browser'

interface BrowserWindowProps extends React.ComponentProps<'div'> {
  zIndex: number
}

export const BrowserWindow = (props: BrowserWindowProps) => {
  const { zIndex, ...rest } = props

  const $iframe = React.useRef<HTMLIFrameElement>(null)

  const [url, setUrl] = React.useState('')
  const [history, setHistory] = React.useState<string[]>([url])
  const [historyIndex, setHistoryIndex] = React.useState(0)

  const navigate = (newUrl: string) => {
    setUrl(newUrl)
    setHistory((prev) => [...prev.slice(0, historyIndex + 1), newUrl])
    setHistoryIndex((prev) => prev + 1)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formData = new FormData(e.target as HTMLFormElement)
    const url = formData.get('url') as string

    navigate(url)
  }

  const goBack = () => {
    if (historyIndex > 0) {
      setHistoryIndex((prev) => prev - 1)
      setUrl(history[historyIndex - 1])
    }
  }

  const goForward = () => {
    if (historyIndex < history.length - 1) {
      setHistoryIndex((prev) => prev + 1)
      setUrl(history[historyIndex + 1])
    }
  }

  const reload = () => {
    if ($iframe.current) {
      $iframe.current.src = url
    }
  }

  return (
    <Window
      title="Browser"
      className="h-[800px] w-[1200px] overflow-hidden"
      value={WINDOW_NAME}
      zIndex={zIndex}
      {...rest}
    >
      <div className="flex flex-1 flex-col">
        <div className="flex items-center gap-2 border-border border-b p-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={goBack}
            disabled={historyIndex === 0}
          >
            <ChevronLeft />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={goForward}
            disabled={historyIndex === history.length - 1}
          >
            <ChevronRight />
          </Button>

          <Button variant="ghost" size="icon" onClick={reload}>
            <RefreshCcw />
          </Button>

          <form className="mx-14 flex-1" onSubmit={handleSubmit}>
            <Input type="url" />
          </form>

          <Button variant="ghost" size="icon">
            <User />
          </Button>
        </div>

        <div className="flex flex-1 flex-col bg-background">
          {url && (
            <iframe
              title="Browser"
              ref={$iframe}
              src={url}
              className="flex-1 border-none"
              sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
            />
          )}
        </div>
      </div>
    </Window>
  )
}
