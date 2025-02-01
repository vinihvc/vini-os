import { Textarea } from '@/components/primitives/textarea'
import { cn } from '@/lib/cn'
import { useState } from 'react'

interface NotepadProps extends React.ComponentProps<'div'> {}

export const Notepad = (props: NotepadProps) => {
  const { className, ...rest } = props

  const [content, setContent] = useState('')

  return (
    <div className={cn('flex flex-1 flex-col', className)} {...rest}>
      <Textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="flex-1 resize-none rounded-none border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
        placeholder="Type something..."
      />

      {/* Status Bar */}
      <div className="flex h-6 items-center border-t bg-accent px-1">
        <span className="text-muted-foreground text-xs">
          {content.length} characters
        </span>
      </div>
    </div>
  )
}

export default Notepad
