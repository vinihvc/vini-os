'use client'

import { Button } from '@/components/primitives/button'
import { Divide, Dot, Equal, Minus, Plus, X } from 'lucide-react'
import { useState } from 'react'

export const App = () => {
  const [display, setDisplay] = useState('0')
  const [firstNumber, setFirstNumber] = useState<number | null>(null)
  const [operation, setOperation] = useState<string | null>(null)
  const [newNumber, setNewNumber] = useState(true)

  const handleNumber = (num: string) => {
    if (newNumber) {
      setDisplay(num)
      setNewNumber(false)
    } else {
      setDisplay(display === '0' ? num : display + num)
    }
  }

  const handleOperation = (op: string) => {
    setOperation(op)
    setFirstNumber(Number.parseFloat(display))
    setNewNumber(true)
  }

  const handleEquals = () => {
    if (operation && firstNumber !== null) {
      const secondNumber = Number.parseFloat(display)
      let result = 0
      switch (operation) {
        case '+':
          result = firstNumber + secondNumber
          break
        case '-':
          result = firstNumber - secondNumber
          break
        case '×':
          result = firstNumber * secondNumber
          break
        case '÷':
          result = firstNumber / secondNumber
          break
      }
      setDisplay(result.toString())
      setFirstNumber(null)
      setOperation(null)
      setNewNumber(true)
    }
  }

  const handleClear = () => {
    setDisplay('0')
    setFirstNumber(null)
    setOperation(null)
    setNewNumber(true)
  }

  return (
    <div className="px-2 pt-8">
      <div className="mb-2 min-h-[60px] overflow-hidden p-2 text-right font-medium text-4xl">
        {display}
      </div>

      <div className="grid grid-cols-4 gap-1">
        <Button
          className="h-12 w-full rounded-full bg-primary/20 text-foreground text-lg"
          size="icon"
          onClick={handleClear}
        >
          AC
        </Button>

        <Button
          className="h-12 w-full rounded-full bg-primary/20 text-foreground text-lg"
          size="icon"
          onClick={() =>
            setDisplay((prev) => (Number.parseFloat(prev) * -1).toString())
          }
        >
          +/-
        </Button>

        <Button
          className="h-12 w-full rounded-full bg-primary/20 text-foreground text-lg"
          size="icon"
          onClick={() =>
            setDisplay((prev) => (Number.parseFloat(prev) / 100).toString())
          }
        >
          %
        </Button>
        <Button
          className="h-12 w-full rounded-full"
          size="icon"
          onClick={() => handleOperation('÷')}
        >
          <Divide />
        </Button>

        {[7, 8, 9].map((num) => (
          <Button
            key={num}
            className="h-12 w-full rounded-full bg-primary/10 text-foreground text-lg"
            size="icon"
            onClick={() => handleNumber(num.toString())}
          >
            {num}
          </Button>
        ))}

        <Button
          className="h-12 w-full rounded-full text-lg"
          size="icon"
          onClick={() => handleOperation('×')}
        >
          <X />
        </Button>

        {[4, 5, 6].map((num) => (
          <Button
            key={num}
            className="h-12 w-full rounded-full bg-primary/10 text-foreground text-lg"
            size="icon"
            onClick={() => handleNumber(num.toString())}
          >
            {num}
          </Button>
        ))}

        <Button
          className="h-12 w-full rounded-full text-lg"
          size="icon"
          onClick={() => handleOperation('-')}
        >
          <Minus />
        </Button>

        {[1, 2, 3].map((num) => (
          <Button
            key={num}
            className="h-12 w-full rounded-full bg-primary/10 text-foreground text-lg"
            size="icon"
            onClick={() => handleNumber(num.toString())}
          >
            {num}
          </Button>
        ))}

        <Button
          className="h-12 w-full rounded-full text-lg"
          size="icon"
          onClick={() => handleOperation('+')}
        >
          <Plus />
        </Button>

        <Button
          className="col-span-2 h-12 w-full rounded-full bg-primary/10 text-foreground text-lg"
          size="icon"
          onClick={() => handleNumber('0')}
        >
          0
        </Button>

        <Button
          className="h-12 w-full rounded-full bg-primary/10 text-foreground text-lg"
          size="icon"
          onClick={() => handleNumber('.')}
        >
          <Dot />
        </Button>

        <Button
          className="h-12 w-full rounded-full text-lg"
          size="icon"
          onClick={handleEquals}
        >
          <Equal />
        </Button>
      </div>
    </div>
  )
}

// const WINDOW_NAME = 'calculator'

// interface CalculatorWindowProps extends React.ComponentProps<'div'> {
//   zIndex: number
// }

// export const CalculatorWindow = (props: CalculatorWindowProps) => {
//   const { zIndex, ...rest } = props

//   return (
//     <Window
//       title="Calculator"
//       className="h-[366px] min-w-[250px] max-w-[250px]"
//       value={WINDOW_NAME}
//       zIndex={zIndex}
//       {...rest}
//     >
//       <Calculator />
//     </Window>
//   )
// }
