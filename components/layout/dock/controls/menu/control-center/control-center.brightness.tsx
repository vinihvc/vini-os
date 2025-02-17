import { Slider } from '@/components/primitives/slider'
import { setBrightness } from '@/store/brightness'
import { useBrightness } from '@/store/brightness'
import { Sun } from 'lucide-react'

export const ControlCenterBrightness = () => {
  const brightness = useBrightness()

  return (
    <div className="flex items-center gap-2 rounded-2xl bg-foreground/5 px-4 py-2">
      <Sun className="h-4 w-4" />

      <Slider
        defaultValue={[brightness]}
        min={20}
        max={100}
        step={1}
        onValueChange={(value) => setBrightness(value[0])}
      />
    </div>
  )
}
