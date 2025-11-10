import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-muted/40 border-t">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto text-sm">
          {/* Products */}
          <div>
            <h4 className="font-bold mb-3 text-base">{t('PRODUCTEN', 'PRODUCTS')}</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/producten/optimum" className="text-muted-foreground hover:text-foreground transition-fast">
                  Veranda Optimum
                </Link>
              </li>
              <li>
                <Link to="/producten/premium" className="text-muted-foreground hover:text-foreground transition-fast">
                  Veranda Premium
                </Link>
              </li>
              <li>
                <Link to="/producten/lux-line" className="text-muted-foreground hover:text-foreground transition-fast">
                  Veranda Lux Line
                </Link>
              </li>
              <li>
                <Link to="/producten/sliding-glass" className="text-muted-foreground hover:text-foreground transition-fast">
                  Glazen Schuifwanden
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="font-bold mb-3 text-base">{t('KLANTENSERVICE', 'CUSTOMER SERVICE')}</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-foreground transition-fast">
                  {t('Home', 'Home')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-foreground transition-fast">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/over-ons" className="text-muted-foreground hover:text-foreground transition-fast">
                  {t('Over Ons', 'About Us')}
                </Link>
              </li>
              <li>
                <Link to="/galerij" className="text-muted-foreground hover:text-foreground transition-fast">
                  {t('Galerij', 'Gallery')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold mb-3 text-base">{t('BEDRIJFSINFORMATIE', 'COMPANY INFORMATION')}</h4>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Croy 19, 5653 LC Eindhoven</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <a href="tel:+31610576944" className="text-muted-foreground hover:text-foreground transition-fast">
                  06 10 57 69 44
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <a
                  href="mailto:Powerveranda@icloud.com"
                  className="text-muted-foreground hover:text-foreground transition-fast break-all"
                >
                  Powerveranda@icloud.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-6 text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Power Veranda. {t('Alle rechten voorbehouden.', 'All rights reserved.')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
