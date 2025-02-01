import { TabsContent } from '@/components/primitives/tabs'

export const GeneralSettings = () => {
  return (
    <TabsContent value="general">
      <div className="flex flex-1 flex-col items-center justify-center">
        <span className="font-medium">Vini OS</span>
        <span className="text-muted-foreground text-xs">version 1.0</span>
      </div>
    </TabsContent>
  )
}
