import type { ModuleType } from '@/types/module'
import { Calculator as CalculatorIcon } from 'lucide-react'
import * as Calculator from './calculator'

const app: ModuleType<'calculator'> = {
  key: 'calculator',
  label: 'Calculator',
  version: '1.0.0',
  width: 250,
  height: 366,
  icon: <CalculatorIcon />,
  app: <Calculator.App />,
}

export default app
