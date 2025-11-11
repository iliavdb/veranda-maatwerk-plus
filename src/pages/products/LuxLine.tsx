import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import ProductSidebar from '@/components/ProductSidebar';
import luxLineImg from '@/assets/lux_line.jpg';

const LuxLine = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 md:py-12 lg:py-16">
        <div className="flex flex-col md:flex-row gap-6 md:gap-8">
          <div className="w-full md:w-64 flex-shrink-0">
            <ProductSidebar />
          </div>

          <div className="flex-1">
            <div className="bg-background">
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">LUXLINE</h1>
                <span className="bg-accent text-accent-foreground px-2 md:px-3 py-1 rounded text-xs md:text-sm font-semibold">
                  {t('NIEUW', 'NEW')}
                </span>
              </div>
              <div className="h-1 w-20 bg-accent mb-6 md:mb-8"></div>

              <div className="space-y-4 md:space-y-6 text-muted-foreground mb-6 md:mb-8">
                <p className="text-base md:text-lg leading-relaxed">
                  {t(
                    'De Veranda Lux Line vertegenwoordigt het summum van kwaliteit en luxe. Met de meest geavanceerde materialen en afwerkingen creëert deze veranda een unieke buitenruimte.',
                    'The Veranda Lux Line represents the pinnacle of quality and luxury. With the most advanced materials and finishes, this veranda creates a unique outdoor space.'
                  )}
                </p>
                <p className="text-base md:text-lg leading-relaxed">
                  {t(
                    'Voor de klant die geen compromissen maakt en het beste van het beste wil.',
                    'For the customer who makes no compromises and wants the best of the best.'
                  )}
                </p>
              </div>

              <div className="mb-6 md:mb-8">
                <img 
                  src={luxLineImg} 
                  alt="Veranda Lux Line"
                  className="w-full rounded-lg shadow-elegant h-[250px] md:h-[400px] object-cover"
                />
              </div>

              <div className="bg-secondary p-6 md:p-8 rounded-lg mb-6 md:mb-8">
                <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">{t('Kenmerken', 'Features')}</h3>
                <ul className="grid md:grid-cols-2 gap-4">
                  <li className="flex items-start">
                    <span className="mr-3 text-accent text-xl">✓</span>
                    <span>{t('Top-kwaliteit aluminium constructie', 'Top-quality aluminum construction')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-accent text-xl">✓</span>
                    <span>{t('Geïsoleerd glazen dak', 'Insulated glass roof')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-accent text-xl">✓</span>
                    <span>{t('Smart home integratie mogelijk', 'Smart home integration possible')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-accent text-xl">✓</span>
                    <span>{t('Luxe afwerking tot in detail', 'Luxury finish down to the detail')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-accent text-xl">✓</span>
                    <span>{t('Volledig aanpasbaar design', 'Fully customizable design')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-accent text-xl">✓</span>
                    <span>{t('Premium garantie', 'Premium warranty')}</span>
                  </li>
                </ul>
              </div>

              <Button size="lg" className="w-full md:w-auto" asChild>
                <Link to="/contact">{t('Offerte aanvragen', 'Request quote')}</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LuxLine;
