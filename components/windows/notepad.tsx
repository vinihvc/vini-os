import { Notepad } from '@/modules/notepad'
import { Window } from '../primitives/window'
import { WindowContent } from '../primitives/window/window.content'

const WINDOW_NAME = 'notepad'

interface NotepadWindowProps extends React.ComponentProps<'div'> {
  zIndex: number
}

export const NotepadWindow = (props: NotepadWindowProps) => {
  const { zIndex, ...rest } = props

  return (
    <Window
      title="Notepad"
      className="h-[400px] w-[600px]"
      value={WINDOW_NAME}
      zIndex={zIndex}
      {...rest}
    >
      <WindowContent actions={<div className="text-xs">file.txt</div>}>
        <Notepad />
      </WindowContent>
    </Window>
  )
}
