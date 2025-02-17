import { WindowManagerItem } from './window-manager.item'

export const WindowManager = async () => {
  const modules = (await import('@/modules')).default

  return modules.map((app) => <WindowManagerItem key={app.key} app={app} />)
}
