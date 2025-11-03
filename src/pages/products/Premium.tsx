import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import premiumImg from '@/assets/premium.jpg';

const Premium = () => {
  const { t } = useLanguage();

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold mb-4">Veranda Premium</h1>
        <p className="text-xl text-muted-foreground mb-12">
          {t('Verbeterde afwerking & opties', 'Improved finish & options')}
        </p>

        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div className="space-y-6">
            <div className="h-[400px] bg-muted rounded-lg shadow-elegant overflow-hidden">
              <img 
                src={premiumImg} 
                alt="Veranda Premium"
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
                  'De Veranda Premium biedt meer mogelijkheden en een verbeterde afwerking ten opzichte van de Optimum. Ideaal voor wie extra comfort en stijl waardeert.',
                  'The Veranda Premium offers more possibilities and an improved finish compared to the Optimum. Ideal for those who value extra comfort and style.'
                )}
              </p>
              <p>
                {t(
                  'Met hoogwaardige materialen en meer design opties creëert u de perfecte buitenruimte.',
                  'With high-quality materials and more design options, you create the perfect outdoor space.'
                )}
              </p>
            </div>

            <div className="bg-secondary p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold mb-4">{t('Kenmerken', 'Features')}</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="mr-3 text-accent">✓</span>
                  <span>{t('Premium aluminium constructie', 'Premium aluminum construction')}</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-accent">✓</span>
                  <span>{t('Meerdere dakopties beschikbaar', 'Multiple roof options available')}</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-accent">✓</span>
                  <span>{t('Geïntegreerde LED verlichting optie', 'Integrated LED lighting option')}</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-accent">✓</span>
                  <span>{t('Uitgebreide kleurkeuzes', 'Extensive color choices')}</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-accent">✓</span>
                  <span>{t('Verbeterde waterdichting', 'Improved waterproofing')}</span>
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

export default Premium;
