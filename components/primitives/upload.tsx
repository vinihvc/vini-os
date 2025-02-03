import { cn } from '@/lib/cn'
import { Slot } from '@radix-ui/react-slot'
import { CloudUpload, type File } from 'lucide-react'
import React from 'react'

interface UploadProps extends React.ComponentProps<'div'> {
  /**
   * The placeholder text to display when no file is uploaded
   */
  placeholder?: string | null
  /**
   * Whether to render the component as a child
   *
   * @default false
   */
  asChild?: boolean
  /**
   * Callback function that is called when a file is uploaded
   */
  onUpload: (file: string) => void
}

export const Upload = (props: UploadProps) => {
  const { placeholder, asChild, onUpload, ...rest } = props

  const fileInputRef = React.useRef<HTMLInputElement>(null)

  const [isDragging, setIsDragging] = React.useState(false)

  const handleFile = (file: File) => {
    if (file.type.startsWith('image/')) {
      const reader = new FileReader()

      reader.onload = () => {
        const result = reader.result as string
        onUpload(result)
      }

      reader.readAsDataURL(file)
    }
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
    const file = e.dataTransfer.files[0]
    if (file) handleFile(file)
  }

  const handleClick = () => {
    fileInputRef.current?.click()
  }

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]

    if (file) handleFile(file)
  }

  const Component = asChild ? Slot : 'div'

  return (
    <Component {...rest}>
      <div>
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileInput}
          accept="image/png, image/jpeg"
          className="hidden"
        />

        <div
          // biome-ignore lint/a11y/useSemanticElements: <explanation>
          role="button"
          data-dragging={isDragging}
          tabIndex={0}
          aria-label="Upload wallpaper"
          onClick={handleClick}
          onKeyUp={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              handleClick()
            }
          }}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          className={cn(
            'h-20 w-full',
            'flex items-center justify-center',
            'p-0.5',
            'rounded-lg ',
            'border border-muted-foreground border-dashed',
            'overflow-hidden',
            'transition-all',
            'cursor-pointer',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background',
            'data-[dragging=true]:border-foreground data-[dragging=true]:bg-foreground/10',
          )}
        >
          <div className="text-center text-muted-foreground text-sm">
            <CloudUpload className="h-4 w-4" />
          </div>
        </div>
      </div>
    </Component>
  )
}
