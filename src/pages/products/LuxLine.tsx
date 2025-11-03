import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import luxLineImg from '@/assets/lux_line.jpg';

const LuxLine = () => {
  const { t } = useLanguage();

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-4">
          <h1 className="text-5xl font-bold">Veranda Lux Line</h1>
          <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold">
            {t('NIEUW', 'NEW')}
          </span>
        </div>
        <p className="text-xl text-muted-foreground mb-12">
          {t('Hoogste kwaliteit, luxe uitstraling', 'Highest quality, luxury appearance')}
        </p>

        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div className="space-y-6">
            <div className="h-[400px] bg-muted rounded-lg shadow-elegant overflow-hidden">
              <img 
                src={luxLineImg} 
                alt="Veranda Lux Line"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="h-32 bg-muted rounded-lg"></div>
              <div className="h-32 bg-muted rounded-lg"></div>
              <div className="h-32 bg-muted rounded-lg"></div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6">{t('Over dit product', 'About this product')}</h2>
            <div className="space-y-4 text-lg text-muted-foreground mb-8">
              <p>
                {t(
                  'De Veranda Lux Line vertegenwoordigt het summum van kwaliteit en luxe. Met de meest geavanceerde materialen en afwerkingen creëert deze veranda een unieke buitenruimte.',
                  'The Veranda Lux Line represents the pinnacle of quality and luxury. With the most advanced materials and finishes, this veranda creates a unique outdoor space.'
                )}
              </p>
              <p>
                {t(
                  'Voor de klant die geen compromissen maakt en het beste van het beste wil.',
                  'For the customer who makes no compromises and wants the best of the best.'
                )}
              </p>
            </div>

            <div className="bg-secondary p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold mb-4">{t('Kenmerken', 'Features')}</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="mr-3 text-accent">✓</span>
                  <span>{t('Top-kwaliteit aluminium constructie', 'Top-quality aluminum construction')}</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-accent">✓</span>
                  <span>{t('Geïsoleerd glazen dak', 'Insulated glass roof')}</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-accent">✓</span>
                  <span>{t('Smart home integratie mogelijk', 'Smart home integration possible')}</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-accent">✓</span>
                  <span>{t('Luxe afwerking tot in detail', 'Luxury finish down to the detail')}</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-accent">✓</span>
                  <span>{t('Volledig aanpasbaar design', 'Fully customizable design')}</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-accent">✓</span>
                  <span>{t('Premium garantie', 'Premium warranty')}</span>
                </li>
              </ul>
            </div>

            <Button size="lg" className="w-full" asChild>
              <Link to="/contact">{t('Offerte aanvragen', 'Request quote')}</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LuxLine;
