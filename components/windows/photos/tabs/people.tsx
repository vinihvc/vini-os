import { Button } from '@/components/primitives/button'
import { ScrollArea } from '@/components/primitives/scroll-area'
import { TabsContent } from '@/components/primitives/tabs'
import { Heart, Image } from 'lucide-react'

export const PhotosPeople = () => {
  const photos = Array(12)
    .fill(null)
    .map((_, i) => ({
      id: i,
      url: `https://picsum.photos/500?random=${i}`,
    }))

  return (
    <TabsContent value="people">
      <div className="flex-1">
        <ScrollArea className="h-full">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {photos.map((photo) => (
              <div
                key={photo.id}
                className="group/image relative aspect-square overflow-hidden rounded-md bg-muted"
              >
                <img
                  src={photo.url}
                  alt={`Random of ${photo.id}`}
                  className="object-cover transition-all hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity group-hover/image:opacity-100">
                  <div className="absolute bottom-2 left-2 flex gap-2">
                    <Button size="icon" variant="ghost" className="h-8 w-8">
                      <Heart />
                    </Button>

                    <Button size="icon" variant="ghost" className="h-8 w-8">
                      <Image />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>
    </TabsContent>
  )
}
