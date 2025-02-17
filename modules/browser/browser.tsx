'use client'

import { Button } from '@/components/primitives/button'
import { Input } from '@/components/primitives/input'
import { cn } from '@/lib/cn'
import { ChevronLeft, ChevronRight, RefreshCcw, User } from 'lucide-react'
import React from 'react'

export const App = (props: React.ComponentProps<'div'>) => {
  const { className, ...rest } = props

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
    <div className={cn('flex flex-1 flex-col', className)} {...rest}>
      <div className="flex items-center gap-2 border-b bg-accent p-2 pr-20">
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

        <form className="z-10 mx-14 flex-1" onSubmit={handleSubmit}>
          <Input type="url" />
        </form>

        <Button variant="ghost" size="icon">
          <User />
        </Button>
      </div>

      <div className="flex flex-1 flex-col">
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
  )
}
