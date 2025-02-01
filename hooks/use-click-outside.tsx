import React from 'react'

type Handler = (event: MouseEvent | TouchEvent) => void

export const useClickOutside = <T extends HTMLElement = HTMLElement>(
  ref: React.RefObject<T | null>,
  handler: Handler,
  mouseEvent: 'mousedown' | 'mouseup' = 'mousedown',
) => {
  React.useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      if (!ref?.current) {
        return
      }

      if (ref.current.contains((event?.target as Node) || null)) {
        return
      }

      handler(event)
    }

    document.addEventListener(mouseEvent, listener)
    document.addEventListener('touchstart', listener)

    return () => {
      document.removeEventListener(mouseEvent, listener)
      document.removeEventListener('touchstart', listener)
    }
  }, [ref, handler, mouseEvent])
}
