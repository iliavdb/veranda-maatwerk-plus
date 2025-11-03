import { useLanguage } from '@/contexts/LanguageContext';
import overOnsImg from '@/assets/over_ons.jpg';

const About = () => {
  const { t } = useLanguage();

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-8">{t('Over Ons', 'About Us')}</h1>
        
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div>
            <h2 className="text-2xl font-bold mb-4">
              {t('Wie zijn wij?', 'Who are we?')}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              {t(
                'Wij zijn een groothandel gespecialiseerd in veranda\'s, glazen schuifwanden en aluminium onderdelen voor overkappingen. Power Veranda levert uitsluitend maatwerk veranda\'s die als compleet bouwpakket geleverd worden, klaar voor montage.',
                'We are a wholesaler specialized in verandas, glass sliding walls and aluminum parts for canopies. Power Veranda exclusively delivers custom verandas that are delivered as a complete construction package, ready for assembly.'
              )}
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t(
                'Elk project wordt op maat gemaakt en volledig afgestemd op uw specifieke wensen en de architectuur van uw woning. Van ontwerp tot levering, wij zorgen voor kwaliteit en precisie.',
                'Each project is custom-made and fully tailored to your specific wishes and the architecture of your home. From design to delivery, we ensure quality and precision.'
              )}
            </p>
          </div>
          
          <div className="h-[400px] bg-muted rounded-lg shadow-elegant overflow-hidden">
            <img 
              src={overOnsImg} 
              alt="Power Veranda magazijn"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-secondary p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-3">{t('Maatwerk', 'Custom Made')}</h3>
            <p className="text-muted-foreground">
              {t(
                'Elk bouwpakket wordt speciaal voor u op maat gemaakt.',
                'Every construction package is specially custom-made for you.'
              )}
            </p>
          </div>
          
          <div className="bg-secondary p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-3">{t('Kwaliteit', 'Quality')}</h3>
            <p className="text-muted-foreground">
              {t(
                'Hoogwaardige materialen en perfecte afwerking.',
                'High-quality materials and perfect finish.'
              )}
            </p>
          </div>
          
          <div className="bg-secondary p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-3">{t('Service', 'Service')}</h3>
            <p className="text-muted-foreground">
              {t(
                'Van ontwerp tot levering, wij begeleiden u in het hele proces.',
                'From design to delivery, we guide you through the entire process.'
              )}
            </p>
          </div>
        </div>

        <div className="bg-primary text-primary-foreground p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">
            {t('Onze Expertise', 'Our Expertise')}
          </h2>
          <ul className="space-y-3 text-lg">
            <li className="flex items-start">
              <span className="mr-3">✓</span>
              <span>{t('Maatwerk veranda\'s in alle maten en stijlen', 'Custom verandas in all sizes and styles')}</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3">✓</span>
              <span>{t('Glazen schuifwanden voor maximaal wooncomfort', 'Glass sliding walls for maximum living comfort')}</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3">✓</span>
              <span>{t('Aluminium onderdelen van topkwaliteit', 'Aluminum parts of top quality')}</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3">✓</span>
              <span>{t('Complete bouwpakketten, kant-en-klaar', 'Complete construction packages, ready-to-use')}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
