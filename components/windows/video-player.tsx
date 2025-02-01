import { VideoPlayer } from '@/modules/video-player'
import { Window } from '../primitives/window'
import { WindowContent } from '../primitives/window/window.content'

const WINDOW_NAME = 'player'

interface VideoPlayerWindowProps extends React.ComponentProps<'div'> {
  zIndex: number
}

export const VideoPlayerWindow = (props: VideoPlayerWindowProps) => {
  const { zIndex, ...rest } = props

  return (
    <Window
      title="Video Player"
      className="h-[400px] w-[600px]"
      value={WINDOW_NAME}
      zIndex={zIndex}
      {...rest}
    >
      <WindowContent actions={<div className="text-xs">file.mp4</div>}>
        <VideoPlayer />
      </WindowContent>
    </Window>
  )
}
