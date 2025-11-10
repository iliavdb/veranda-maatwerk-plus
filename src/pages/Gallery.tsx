import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import gallery1 from '@/assets/gallery/gallery_1.png';
import gallery2 from '@/assets/gallery/gallery_2.png';
import gallery3 from '@/assets/gallery/gallery_3.png';
import gallery4 from '@/assets/gallery/gallery_4.png';
import gallery5 from '@/assets/gallery/gallery_5.png';
import gallery6 from '@/assets/gallery/gallery_6.png';
import gallery7 from '@/assets/gallery/gallery_7.png';
import gallery8 from '@/assets/gallery/gallery_8.png';
import gallery9 from '@/assets/gallery/gallery_9.png';
import gallery10 from '@/assets/gallery/gallery_10.png';

const Gallery = () => {
  const { t } = useLanguage();
  const [filter, setFilter] = useState<'all' | 'veranda'>('all');

  const galleryItems = [
    { id: 1, type: 'veranda', image: gallery1 },
    { id: 2, type: 'veranda', image: gallery2 },
    { id: 3, type: 'veranda', image: gallery3 },
    { id: 4, type: 'veranda', image: gallery4 },
    { id: 5, type: 'veranda', image: gallery5 },
    { id: 6, type: 'veranda', image: gallery6 },
    { id: 7, type: 'veranda', image: gallery7 },
    { id: 8, type: 'veranda', image: gallery8 },
    { id: 9, type: 'veranda', image: gallery9 },
    { id: 10, type: 'veranda', image: gallery10 },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">{t('GALERIJ', 'GALLERY')}</h1>
        
        <div className="flex gap-4 mb-12">
          <Button
            variant={filter === 'all' ? 'default' : 'outline'}
            onClick={() => setFilter('all')}
            size="lg"
          >
            {t('Alle', 'All')}
          </Button>
          <Button
            variant={filter === 'veranda' ? 'default' : 'outline'}
            onClick={() => setFilter('veranda')}
            size="lg"
          >
            Veranda's
          </Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="aspect-square rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-smooth cursor-pointer group"
            >
              <img
                src={item.image}
                alt={`Power Veranda ${t('project', 'project')} ${item.id}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
