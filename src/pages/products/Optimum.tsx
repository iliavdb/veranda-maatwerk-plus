import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import ProductSidebar from '@/components/ProductSidebar';
import optimumImg from '@/assets/optimum.png';

const Optimum = () => {
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
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2">OPTIMUM</h1>
              <div className="h-1 w-20 bg-accent mb-6 md:mb-8"></div>

              <div className="space-y-4 md:space-y-6 text-muted-foreground mb-6 md:mb-8">
                <p className="text-base md:text-lg leading-relaxed">
                  {t(
                    'De Veranda Optimum is onze basis lijn met uitstekende kwaliteit voor een aantrekkelijke prijs. Perfect voor wie op zoek is naar een betrouwbare en functionele veranda.',
                    'The Veranda Optimum is our basic line with excellent quality for an attractive price. Perfect for those looking for a reliable and functional veranda.'
                  )}
                </p>
                <p className="text-base md:text-lg leading-relaxed">
                  {t(
                    'Volledig op maat gemaakt en geleverd als compleet bouwpakket, klaar voor montage aan uw woning.',
                    'Fully custom-made and delivered as a complete construction package, ready for assembly at your home.'
                  )}
                </p>
              </div>

              <div className="mb-6 md:mb-8">
                <img 
                  src={optimumImg} 
                  alt="Veranda Optimum"
                  className="w-full rounded-lg shadow-elegant h-[250px] md:h-[400px] object-cover"
                />
              </div>

              <div className="bg-secondary p-6 md:p-8 rounded-lg mb-6 md:mb-8">
                <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">{t('Kenmerken', 'Features')}</h3>
                <ul className="grid md:grid-cols-2 gap-4">
                  <li className="flex items-start">
                    <span className="mr-3 text-accent text-xl">✓</span>
                    <span>{t('Op maat gemaakt bouwpakket', 'Custom-made construction package')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-accent text-xl">✓</span>
                    <span>{t('Aluminium constructie', 'Aluminum construction')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-accent text-xl">✓</span>
                    <span>{t('Hoogwaardig polycarbonaat dak', 'High-quality polycarbonate roof')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-accent text-xl">✓</span>
                    <span>{t('Onderhoudsvriendelijk', 'Low maintenance')}</span>
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

export default Optimum;
