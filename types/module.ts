export type ModuleType<T extends string = string> = {
  key: T
  label: string
  version: string
  width: number
  height: number
  icon: React.ReactNode
  app: React.ReactNode
  dropdown?: React.ReactNode
}
