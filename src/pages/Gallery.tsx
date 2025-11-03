import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const Gallery = () => {
  const { t } = useLanguage();
  const [filter, setFilter] = useState<'all' | 'veranda'>('all');

  // Placeholder gallery items - user will add their own photos
  const galleryItems = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    type: 'veranda',
  }));

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-5xl font-bold mb-8 text-center">{t('Galerij', 'Gallery')}</h1>
      
      <div className="flex justify-center gap-4 mb-12">
        <Button
          variant={filter === 'all' ? 'default' : 'outline'}
          onClick={() => setFilter('all')}
        >
          {t('Alle', 'All')}
        </Button>
        <Button
          variant={filter === 'veranda' ? 'default' : 'outline'}
          onClick={() => setFilter('veranda')}
        >
          Veranda
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {galleryItems.map((item) => (
          <div
            key={item.id}
            className="aspect-square bg-muted rounded-lg overflow-hidden shadow-elegant hover:shadow-elegant-xl transition-smooth cursor-pointer"
          >
            {/* Placeholder for images - user will replace these */}
            <div className="w-full h-full flex items-center justify-center text-muted-foreground">
              <span className="text-sm">{t('Foto', 'Photo')} {item.id}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
