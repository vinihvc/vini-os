import { cn } from '@/lib/cn'
import { Upload } from 'lucide-react'
import React from 'react'

export const VideoPlayer = () => {
  const videoRef = React.useRef<HTMLVideoElement>(null)
  const videoUrlRef = React.useRef<string | null>(null)

  const [video, setVideo] = React.useState<File | null>(null)

  const setVideoObjectURL = (file?: File) => {
    if (file?.type.startsWith('video/')) {
      setVideo(file)
      const url = URL.createObjectURL(file)
      videoUrlRef.current = url
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    const file = e.dataTransfer.files[0]

    setVideoObjectURL(file)
  }

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]

    setVideoObjectURL(file)
  }

  return (
    <div className="flex flex-1">
      {!video ? (
        <div
          className={cn(
            'm-2 w-full',
            'flex items-center justify-center',
            'text-muted-foreground text-sm',
            'rounded-lg transition-colors',
            'cursor-pointer',
            'border border-muted-foreground border-dashed',
          )}
          onDragOver={(e) => e.preventDefault()}
          onDrop={handleDrop}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              document.getElementById('video-upload')?.click()
            }
          }}
          onClick={() => document.getElementById('video-upload')?.click()}
        >
          <div>
            <Upload className="mx-auto mb-4 h-4 w-4" />

            <p>Drag and drop a video file here, or click to select</p>

            <input
              id="video-upload"
              type="file"
              accept="video/*"
              className="hidden"
              onChange={handleFileUpload}
            />
          </div>
        </div>
      ) : (
        // biome-ignore lint/a11y/useMediaCaption: <explanation>
        <video
          ref={videoRef}
          src={videoUrlRef.current ?? undefined}
          className="h-full w-full"
          controls
          playsInline
        />
      )}
    </div>
  )
}
