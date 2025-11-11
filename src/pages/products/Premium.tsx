import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import ProductSidebar from '@/components/ProductSidebar';
import premiumImg from '@/assets/premium.jpg';

const Premium = () => {
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
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2">PREMIUM</h1>
              <div className="h-1 w-20 bg-accent mb-6 md:mb-8"></div>

              <div className="space-y-4 md:space-y-6 text-muted-foreground mb-6 md:mb-8">
                <p className="text-base md:text-lg leading-relaxed">
                  {t(
                    'De Veranda Premium biedt meer mogelijkheden en een verbeterde afwerking ten opzichte van de Optimum. Ideaal voor wie extra comfort en stijl waardeert.',
                    'The Veranda Premium offers more possibilities and an improved finish compared to the Optimum. Ideal for those who value extra comfort and style.'
                  )}
                </p>
                <p className="text-base md:text-lg leading-relaxed">
                  {t(
                    'Met hoogwaardige materialen en meer design opties creëert u de perfecte buitenruimte.',
                    'With high-quality materials and more design options, you create the perfect outdoor space.'
                  )}
                </p>
              </div>

              <div className="mb-6 md:mb-8">
                <img 
                  src={premiumImg} 
                  alt="Veranda Premium"
                  className="w-full rounded-lg shadow-elegant h-[250px] md:h-[400px] object-cover"
                />
              </div>

              <div className="bg-secondary p-6 md:p-8 rounded-lg mb-6 md:mb-8">
                <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">{t('Kenmerken', 'Features')}</h3>
                <ul className="grid md:grid-cols-2 gap-4">
                  <li className="flex items-start">
                    <span className="mr-3 text-accent text-xl">✓</span>
                    <span>{t('Premium aluminium constructie', 'Premium aluminum construction')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-accent text-xl">✓</span>
                    <span>{t('Meerdere dakopties beschikbaar', 'Multiple roof options available')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-accent text-xl">✓</span>
                    <span>{t('Geïntegreerde LED verlichting optie', 'Integrated LED lighting option')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-accent text-xl">✓</span>
                    <span>{t('Uitgebreide kleurkeuzes', 'Extensive color choices')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-accent text-xl">✓</span>
                    <span>{t('Verbeterde waterdichting', 'Improved waterproofing')}</span>
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

export default Premium;
