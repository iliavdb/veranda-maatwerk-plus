import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { Clock, Palette, Tag } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import Autoplay from 'embla-carousel-autoplay';
import Fade from 'embla-carousel-fade';
import aboutUsHome from '@/assets/about_us_home.jpg';
import optimumImg from '@/assets/optimum.png';
import premiumImg from '@/assets/premium.jpg';
import luxLineImg from '@/assets/lux_line.jpg';
import slidingGlassImg from '@/assets/sliding_glass.jpg';
import hero1 from '@/assets/hero-1.jpg';
import hero2 from '@/assets/hero-2.jpg';
import hero3 from '@/assets/hero-3.jpg';

const Home = () => {
  const { t } = useLanguage();

  const products = [
    {
      name: 'Optimum',
      path: '/producten/optimum',
      description: t('Basis kwaliteit maatwerk veranda', 'Basic quality custom veranda'),
      image: optimumImg,
    },
    {
      name: 'Premium',
      path: '/producten/premium',
      description: t('Verbeterde afwerking & opties', 'Improved finish & options'),
      image: premiumImg,
    },
    {
      name: 'Lux Line',
      path: '/producten/lux-line',
      description: t('Hoogste kwaliteit, luxe uitstraling', 'Highest quality, luxury appearance'),
      image: luxLineImg,
    },
    {
      name: 'Sliding Glass',
      path: '/producten/sliding-glass',
      description: t('Glazen schuifwand systemen', 'Glass sliding wall systems'),
      image: slidingGlassImg,
    },
  ];

  const usps = [
    {
      icon: Clock,
      title: t('Precisie & Planning', 'Precision & Planning'),
      description: t('Wij leveren snel en op tijd.', 'We deliver fast and on time.'),
    },
    {
      icon: Palette,
      title: t('Sterk in Design', 'Strong in Design'),
      description: t('Moderne en hoogwaardige afwerking.', 'Modern and high-quality finish.'),
    },
    {
      icon: Tag,
      title: t('Maatwerk voor iedereen', 'Custom for everyone'),
      description: t('Speciale offertes voor nieuwe klanten.', 'Special quotes for new customers.'),
    },
  ];

  const heroImages = [hero1, hero2, hero3];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[500px] md:h-[600px] lg:h-[700px] flex items-center justify-center overflow-hidden">
        <Carousel
          opts={{ loop: true }}
          plugins={[
            Fade(),
            Autoplay({
              delay: 5000,
            }),
          ]}
          className="absolute inset-0"
        >
          <CarouselContent>
            {heroImages.map((image, index) => (
              <CarouselItem key={index}>
                <div className="relative h-[500px] md:h-[600px] lg:h-[700px] w-full">
                  <img 
                    src={image} 
                    alt={`Power Veranda ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/50"></div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            {t('Ontdek onze maatwerk veranda\'s', 'Discover our custom verandas')}
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            {t(
              'Hoogwaardige veranda\'s, glazen schuifwanden en aluminium onderdelen op maat',
              'High-quality verandas, glass sliding walls and custom aluminum parts'
            )}
          </p>
          <Button size="lg" variant="default" asChild className="bg-accent hover:bg-accent/90">
            <Link to="/contact">{t('Offerte aanvragen', 'Request quote')}</Link>
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('OVER ONS', 'ABOUT US')}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {t(
                  'Wij zijn een groothandel gespecialiseerd in veranda\'s, glazen schuifwanden en aluminium onderdelen voor overkappingen. Power Veranda levert uitsluitend maatwerk veranda\'s die als compleet bouwpakket geleverd worden, klaar voor montage.',
                  'We are a wholesaler specialized in verandas, glass sliding walls and aluminum parts for canopies. Power Veranda exclusively delivers custom verandas that are delivered as a complete construction package, ready for assembly.'
                )}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                {t(
                  'Elk project wordt op maat gemaakt en volledig afgestemd op uw specifieke wensen en de architectuur van uw woning.',
                  'Each project is custom-made and fully tailored to your specific wishes and the architecture of your home.'
                )}
              </p>
              <Button variant="outline" size="lg" asChild>
                <Link to="/over-ons">{t('Lees meer', 'Read more')}</Link>
              </Button>
            </div>
            <div className="order-1 md:order-2 h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-elegant">
              <img 
                src={aboutUsHome} 
                alt="Power Veranda"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('NIEUWE VERANDA\'S', 'NEW VERANDAS')}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t(
                'Er is in elke prijscategorie een geschikte veranda te vinden voor ieder wat wils.',
                'There is a suitable veranda available in every price range for everyone.'
              )}
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {products.map((product) => (
              <Card key={product.path} className="overflow-hidden hover:shadow-elegant transition-smooth group">
                <div className="relative h-48">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                  />
                </div>
                <CardContent className="p-4 text-center">
                  <h3 className="text-lg font-bold mb-2">{product.name}</h3>
                  <Button variant="default" size="sm" asChild className="mt-2">
                    <Link to={product.path}>{t('BEKIJKEN', 'VIEW')}</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* USPs Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {usps.map((usp, index) => (
              <Card key={index} className="text-center p-8 border-2">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-6">
                  <usp.icon className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3">{usp.title}</h3>
                <p className="text-muted-foreground">{usp.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* New Products Banner */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {t('2025 – NIEUWE PRODUCTEN', '2025 – NEW PRODUCTS')}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            {t('Bekijk alle nieuwe veranda\'s', 'View all new verandas')}
          </p>
          <Button size="lg" variant="default" asChild className="bg-accent hover:bg-accent/90">
            <Link to="/galerij">{t('Galerij bekijken', 'View gallery')}</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
