import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import slidingGlassImg from '@/assets/sliding_glass.jpg';

const SlidingGlass = () => {
  const { t } = useLanguage();

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold mb-4">Sliding Glass</h1>
        <p className="text-xl text-muted-foreground mb-12">
          {t('Glazen schuifwand systemen', 'Glass sliding wall systems')}
        </p>

        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div className="space-y-6">
            <div className="h-[400px] bg-muted rounded-lg shadow-elegant overflow-hidden">
              <img 
                src={slidingGlassImg} 
                alt="Sliding Glass"
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
                  'Onze Sliding Glass systemen bieden de perfecte oplossing om uw veranda of buitenruimte te sluiten met stijlvolle glazen schuifwanden. Geniet het hele jaar door van uw buitenruimte.',
                  'Our Sliding Glass systems offer the perfect solution to close your veranda or outdoor space with stylish glass sliding walls. Enjoy your outdoor space all year round.'
                )}
              </p>
              <p>
                {t(
                  'De wanden zijn eenvoudig te bedienen en kunnen volledig open geschoven worden voor een naadloze overgang tussen binnen en buiten.',
                  'The walls are easy to operate and can be completely opened for a seamless transition between inside and outside.'
                )}
              </p>
            </div>

            <div className="bg-secondary p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold mb-4">{t('Kenmerken', 'Features')}</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="mr-3 text-accent">✓</span>
                  <span>{t('Frameless glazen panelen', 'Frameless glass panels')}</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-accent">✓</span>
                  <span>{t('Veiligheids glas', 'Safety glass')}</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-accent">✓</span>
                  <span>{t('Soepel glijdend systeem', 'Smooth sliding system')}</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-accent">✓</span>
                  <span>{t('Wind- en waterdicht', 'Wind and waterproof')}</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-accent">✓</span>
                  <span>{t('Minimaal onderhoud', 'Minimal maintenance')}</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-accent">✓</span>
                  <span>{t('Op maat gemaakt', 'Custom-made')}</span>
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

export default SlidingGlass;
