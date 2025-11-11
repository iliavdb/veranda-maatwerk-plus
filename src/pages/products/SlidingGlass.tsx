import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import ProductSidebar from '@/components/ProductSidebar';
import slidingGlassImg from '@/assets/sliding_glass.jpg';

const SlidingGlass = () => {
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
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2">GLAZEN SCHUIFWANDEN</h1>
              <div className="h-1 w-20 bg-accent mb-6 md:mb-8"></div>

              <div className="space-y-4 md:space-y-6 text-muted-foreground mb-6 md:mb-8">
                <p className="text-base md:text-lg leading-relaxed">
                  {t(
                    'Onze Sliding Glass systemen bieden de perfecte oplossing om uw veranda of buitenruimte te sluiten met stijlvolle glazen schuifwanden. Geniet het hele jaar door van uw buitenruimte.',
                    'Our Sliding Glass systems offer the perfect solution to close your veranda or outdoor space with stylish glass sliding walls. Enjoy your outdoor space all year round.'
                  )}
                </p>
                <p className="text-base md:text-lg leading-relaxed">
                  {t(
                    'De wanden zijn eenvoudig te bedienen en kunnen volledig open geschoven worden voor een naadloze overgang tussen binnen en buiten.',
                    'The walls are easy to operate and can be completely opened for a seamless transition between inside and outside.'
                  )}
                </p>
              </div>

              <div className="mb-6 md:mb-8">
                <img 
                  src={slidingGlassImg} 
                  alt="Sliding Glass"
                  className="w-full rounded-lg shadow-elegant h-[250px] md:h-[400px] object-cover"
                />
              </div>

              <div className="bg-secondary p-6 md:p-8 rounded-lg mb-6 md:mb-8">
                <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">{t('Kenmerken', 'Features')}</h3>
                <ul className="grid md:grid-cols-2 gap-4">
                  <li className="flex items-start">
                    <span className="mr-3 text-accent text-xl">✓</span>
                    <span>{t('Frameless glazen panelen', 'Frameless glass panels')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-accent text-xl">✓</span>
                    <span>{t('Veiligheids glas', 'Safety glass')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-accent text-xl">✓</span>
                    <span>{t('Soepel glijdend systeem', 'Smooth sliding system')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-accent text-xl">✓</span>
                    <span>{t('Wind- en waterdicht', 'Wind and waterproof')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-accent text-xl">✓</span>
                    <span>{t('Minimaal onderhoud', 'Minimal maintenance')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-accent text-xl">✓</span>
                    <span>{t('Op maat gemaakt', 'Custom-made')}</span>
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

export default SlidingGlass;
