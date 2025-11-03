import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-xl font-bold mb-4">Power Veranda</h3>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              {t(
                'Power Veranda biedt hoogwaardige maatwerk veranda\'s en schuifwanden. Wij leveren complete bouwpakketten volledig afgestemd op uw woning en wensen.',
                'Power Veranda offers high-quality custom verandas and sliding walls. We deliver complete construction packages fully tailored to your home and wishes.'
              )}
            </p>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold mb-4">{t('Producten', 'Products')}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/producten/optimum" className="hover:text-accent transition-fast">
                  Veranda Optimum
                </Link>
              </li>
              <li>
                <Link to="/producten/premium" className="hover:text-accent transition-fast">
                  Veranda Premium
                </Link>
              </li>
              <li>
                <Link to="/producten/lux-line" className="hover:text-accent transition-fast">
                  Veranda Lux Line
                </Link>
              </li>
              <li>
                <Link to="/producten/sliding-glass" className="hover:text-accent transition-fast">
                  Sliding Glass
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="font-semibold mb-4">{t('Klantenservice', 'Customer Service')}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-accent transition-fast">
                  {t("Veranda's", 'Verandas')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-accent transition-fast">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/over-ons" className="hover:text-accent transition-fast">
                  {t('Over Ons', 'About Us')}
                </Link>
              </li>
              <li>
                <Link to="/galerij" className="hover:text-accent transition-fast">
                  {t('Beoordelingen', 'Reviews')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">{t('Bedrijfsinformatie', 'Company Information')}</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <span>Croy 19, 5653 LC Eindhoven</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <a href="tel:+31610576944" className="hover:text-accent transition-fast">
                  06 10 57 69 44
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <a
                  href="mailto:Powerveranda@icloud.com"
                  className="hover:text-accent transition-fast"
                >
                  Powerveranda@icloud.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/60">
          <p>© {new Date().getFullYear()} Power Veranda. {t('Alle rechten voorbehouden.', 'All rights reserved.')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
