import type { ModuleKey } from '@/modules'
import { store } from '@/store/global'
import { useAtom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'

type DockItem = {
  type: ModuleKey
  dock?: {
    order: number
  }
  drawer?: {
    order: number
  }
}

export const dockAtom = atomWithStorage<DockItem[]>('dock', [
  {
    type: 'calculator',
    dock: {
      order: 1,
    },
  },
  {
    type: 'calendar',
    dock: {
      order: 2,
    },
  },
])

export const useDock = () => {
  const [dock] = useAtom(dockAtom)

  return dock
}

export const addDockItem = (item: DockItem) => {
  const dock = store.get(dockAtom)

  const isAlreadyInDock = dock.some((i) => i.type === item.type)

  if (isAlreadyInDock) return

  store.set(dockAtom, (prev) => [
    ...prev,
    {
      type: item.type,
      dock: {
        order: (prev.length ?? 0) + 1,
      },
      drawer: {
        order: (prev.length ?? 0) + 1,
      },
    },
  ])
}

export const removeDockItem = (item: ModuleKey) => {
  store.set(dockAtom, (prev) => prev.filter((i) => i.type !== item))
}

export const updateDockItem = (item: DockItem) => {
  store.set(dockAtom, (prev) =>
    prev.map((i) => (i.type === item.type ? item : i)),
  )
}

export const moveDockItem = (item: ModuleKey, order: number) => {
  store.set(dockAtom, (prev) =>
    prev.map((i) => (i.type === item ? { ...i, dock: { order } } : i)),
  )
}
