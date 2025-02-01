import { Tabs } from '@/components/primitives/tabs'
import { Window } from '../../primitives/window'
import { PhotosContent } from './photos.content'
import { PhotosSidebar } from './photos.sidebar'
import { PhotosFavorites } from './tabs/favorites'
import { PhotosPeople } from './tabs/people'
import { PhotosRecents } from './tabs/recents'

const WINDOW_NAME = 'photos'

interface PhotosWindowProps extends React.ComponentProps<'div'> {
  zIndex: number
}

export const PhotosWindow = (props: PhotosWindowProps) => {
  const { zIndex, ...rest } = props

  return (
    <Window
      title="Photos"
      className="h-[600px] w-[800px]"
      value={WINDOW_NAME}
      zIndex={zIndex}
      {...rest}
    >
      <Tabs className="flex flex-1" defaultValue="recents">
        <PhotosSidebar />

        <PhotosContent>
          <PhotosRecents />
          <PhotosFavorites />
          <PhotosPeople />
        </PhotosContent>
      </Tabs>
    </Window>
  )
}
