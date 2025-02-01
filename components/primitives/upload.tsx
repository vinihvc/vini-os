import { cn } from '@/lib/cn'
import React from 'react'

interface UploadProps extends React.ComponentProps<'div'> {
  /**
   * Callback function that is called when a file is uploaded
   */
  onUpload: (file: string) => void
}

export const Upload = (props: UploadProps) => {
  const { onUpload, ...rest } = props

  const [previewUrl, setPreviewUrl] = React.useState<string | null>(null)
  const [isDragging, setIsDragging] = React.useState(false)
  const fileInputRef = React.useRef<HTMLInputElement>(null)

  const handleFile = (file: File) => {
    if (file.type.startsWith('image/')) {
      const reader = new FileReader()
      reader.onload = () => {
        const result = reader.result as string
        setPreviewUrl(result)
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

  return (
    <div {...rest}>
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
          'flex h-20 w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg border border-muted-foreground border-dashed p-0.5 transition-colors',
          'data-[dragging=true]:border-blue-500 data-[dragging=true]:bg-blue-50/10',
        )}
      >
        {previewUrl ? (
          <img
            src={previewUrl}
            alt="Preview"
            className="h-full w-full rounded-md object-cover"
          />
        ) : (
          <div className="text-center text-muted-foreground text-sm">
            <p className="mt-1 whitespace-nowrap text-xs">JPG or PNG</p>
          </div>
        )}
      </div>
    </div>
  )
}
