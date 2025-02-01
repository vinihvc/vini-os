import { Calculator } from '@/modules/calculator'
import { Window } from '../primitives/window'

const WINDOW_NAME = 'calculator'

interface CalculatorWindowProps extends React.ComponentProps<'div'> {
  zIndex: number
}

export const CalculatorWindow = (props: CalculatorWindowProps) => {
  const { zIndex, ...rest } = props

  return (
    <Window
      title="Calculator"
      className="h-[366px] min-w-[250px] max-w-[250px]"
      value={WINDOW_NAME}
      zIndex={zIndex}
      {...rest}
    >
      <Calculator />
    </Window>
  )
}
