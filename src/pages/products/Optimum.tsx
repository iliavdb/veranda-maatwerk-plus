import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import optimumImg from '@/assets/optimum.png';

const Optimum = () => {
  const { t } = useLanguage();

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold mb-4">Veranda Optimum</h1>
        <p className="text-xl text-muted-foreground mb-12">
          {t('Basis kwaliteit maatwerk veranda', 'Basic quality custom veranda')}
        </p>

        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div className="space-y-6">
            <div className="h-[400px] bg-muted rounded-lg shadow-elegant overflow-hidden">
              <img 
                src={optimumImg} 
                alt="Veranda Optimum"
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
                  'De Veranda Optimum is onze basis lijn met uitstekende kwaliteit voor een aantrekkelijke prijs. Perfect voor wie op zoek is naar een betrouwbare en functionele veranda.',
                  'The Veranda Optimum is our basic line with excellent quality for an attractive price. Perfect for those looking for a reliable and functional veranda.'
                )}
              </p>
              <p>
                {t(
                  'Volledig op maat gemaakt en geleverd als compleet bouwpakket, klaar voor montage aan uw woning.',
                  'Fully custom-made and delivered as a complete construction package, ready for assembly at your home.'
                )}
              </p>
            </div>

            <div className="bg-secondary p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold mb-4">{t('Kenmerken', 'Features')}</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="mr-3 text-accent">✓</span>
                  <span>{t('Op maat gemaakt bouwpakket', 'Custom-made construction package')}</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-accent">✓</span>
                  <span>{t('Aluminium constructie', 'Aluminum construction')}</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-accent">✓</span>
                  <span>{t('Hoogwaardig polycarbonaat dak', 'High-quality polycarbonate roof')}</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-accent">✓</span>
                  <span>{t('Onderhoudsvriendelijk', 'Low maintenance')}</span>
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

export default Optimum;
