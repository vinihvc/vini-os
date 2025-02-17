import { Tabs } from '@/components/primitives/tabs'
import { PhotosContent } from './photos.content'
import { PhotosSidebar } from './photos.sidebar'
import { PhotosFavorites } from './tabs/favorites'
import { PhotosPeople } from './tabs/people'
import { PhotosRecents } from './tabs/recents'

export const App = () => {
  return (
    <Tabs className="flex flex-1" defaultValue="recents" orientation="vertical">
      <PhotosSidebar />

      <PhotosContent>
        <PhotosRecents />
        <PhotosFavorites />
        <PhotosPeople />
      </PhotosContent>
    </Tabs>
  )
}
