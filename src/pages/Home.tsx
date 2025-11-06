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
      <section className="relative h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center overflow-hidden">
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
                <div className="relative h-[400px] md:h-[500px] lg:h-[600px] w-full">
                  <img 
                    src={image} 
                    alt={`Hero ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60"></div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6">
            {t('Ontdek onze maatwerk veranda\'s', 'Discover our custom verandas')}
          </h1>
          <p className="text-base md:text-xl text-white/90 mb-6 md:mb-8 max-w-2xl mx-auto px-4">
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
      <section className="py-12 md:py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">{t('Over Ons', 'About Us')}</h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
                {t(
                  'Power Veranda is gespecialiseerd in maatwerk veranda\'s, glazen schuifwanden en hoogwaardige veranda-onderdelen. Wij leveren altijd op maat gemaakt bouwpakketten, afgestemd op uw wensen en woning.',
                  'Power Veranda specializes in custom verandas, glass sliding walls and high-quality veranda components. We always deliver custom-made construction packages, tailored to your wishes and home.'
                )}
              </p>
              <Button variant="outline" asChild>
                <Link to="/over-ons">{t('Lees meer', 'Read more')}</Link>
              </Button>
            </div>
            <div className="h-[250px] md:h-[400px] bg-muted rounded-lg shadow-elegant overflow-hidden">
              <img 
                src={aboutUsHome} 
                alt="Power Veranda showroom"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 md:mb-4">
              {t('Power Veranda – Nieuwe veranda\'s', 'Power Veranda – New verandas')}
            </h2>
            <p className="text-base md:text-lg text-muted-foreground px-4">
              {t(
                'Ontdek onze nieuwe modellen veranda\'s en overkappingen.',
                'Discover our new models of verandas and canopies.'
              )}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {products.map((product) => (
              <Card key={product.path} className="overflow-hidden hover:shadow-elegant transition-smooth">
                <div className="h-48 bg-muted overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-105 transition-smooth"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                  <p className="text-muted-foreground mb-4">{product.description}</p>
                  <Button variant="outline" asChild className="w-full">
                    <Link to={product.path}>{t('Bekijken', 'View')}</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* USPs Section */}
      <section className="py-12 md:py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">
            {t('Onze Sterke Punten', 'Our Strengths')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {usps.map((usp, index) => (
              <Card key={index} className="text-center p-8">
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
      <section className="py-12 md:py-20 hero-gradient">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-4">
            {t('2025 – Nieuwe Producten', '2025 – New Products')}
          </h2>
          <p className="text-base md:text-xl text-white/90 mb-6 md:mb-8">
            {t('Bekijk alle nieuwe veranda\'s', 'View all new verandas')}
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/galerij">{t('Galerij bekijken', 'View gallery')}</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
