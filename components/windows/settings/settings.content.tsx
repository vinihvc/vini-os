import { Button } from '@/components/primitives/button'
import { WindowContent } from '@/components/primitives/window/window.content'
import { ArrowRight } from 'lucide-react'
import { ArrowLeft } from 'lucide-react'

interface SettingsContentProps extends React.ComponentProps<'div'> {}

export const SettingsContent = (props: SettingsContentProps) => {
  const { ...rest } = props

  return (
    <WindowContent
      actions={
        <>
          <Button
            className="h-6 w-6 [&>svg]:h-3 [&>svg]:w-3"
            variant="ghost"
            size="icon"
          >
            <ArrowLeft />
          </Button>

          <Button
            className="h-6 w-6 [&>svg]:h-3 [&>svg]:w-3"
            variant="ghost"
            size="icon"
          >
            <ArrowRight />
          </Button>
        </>
      }
      {...rest}
    />
  )
}
