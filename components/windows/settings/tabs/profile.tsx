import { User } from 'lucide-react'

export const ProfileTab = () => {
  return (
    <div className="p-2">
      <div className="flex items-center gap-3">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-muted">
          <User className="h-6 w-6 text-muted-foreground" />
        </div>

        <div>
          <h2 className="font-semibold">Vinicius Vicentini</h2>
          <p className="text-muted-foreground text-sm">@vinihvc</p>
        </div>
      </div>
    </div>
  )
}
