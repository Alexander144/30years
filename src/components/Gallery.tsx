
import React, { useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';

const images = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1471967183320-ee018f6e114a',
    alt: 'Birthday celebration with friends',
    width: 1200,
    height: 800
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce',
    alt: 'Party with friends',
    width: 1200,
    height: 1600
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1513151233558-d860c5398176',
    alt: 'Dinner party setup',
    width: 1200,
    height: 800
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1541532713592-79a0317b6b77',
    alt: 'Friends celebrating at restaurant',
    width: 1200,
    height: 800
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf',
    alt: 'Group of friends having fun',
    width: 1200,
    height: 1200
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1504196606672-aef5c9cefc92',
    alt: 'Party decorations',
    width: 1200,
    height: 800
  }
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<(typeof images)[0] | null>(null);
  
  return (
    <section id="gallery" className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <span className="chip mb-2">Galleri</span>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-4">Minner gjennom årene</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Et lite utvalg av bilder fra tidligere feiringer og gode minner.
          </p>
        </div>
        
        <div className="photo-masonry">
          {images.map((image, index) => (
            <div 
              key={image.id}
              className="photo-item animate-scale-in opacity-0"
              style={{ 
                animationDelay: `${0.1 * index}s`, 
                animationFillMode: 'forwards',
                aspectRatio: image.width / image.height,
                gridRow: `span ${image.height > image.width ? 2 : 1}`
              }}
              onClick={() => setSelectedImage(image)}
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-full object-cover cursor-pointer"
                loading="lazy"
              />
            </div>
          ))}
        </div>
        
        <Dialog open={!!selectedImage} onOpenChange={(open) => !open && setSelectedImage(null)}>
          <DialogContent className="max-w-4xl w-[90vw] p-0 overflow-hidden bg-transparent border-none shadow-none">
            {selectedImage && (
              <img 
                src={selectedImage.src} 
                alt={selectedImage.alt} 
                className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
              />
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Gallery;
