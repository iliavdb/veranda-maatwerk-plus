import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import logo from '@/assets/logo.jpg';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { path: '/', label: t('Home', 'Home') },
    { path: '/over-ons', label: t('Over Ons', 'About Us') },
  ];

  const productLinks = [
    { path: '/producten/optimum', label: 'Optimum' },
    { path: '/producten/premium', label: 'Premium' },
    { path: '/producten/lux-line', label: 'Lux Line' },
    { path: '/producten/sliding-glass', label: 'Sliding Glass' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Left Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-fast hover:text-accent ${
                  isActive(link.path) ? 'text-accent' : 'text-foreground'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-foreground hover:text-accent transition-fast">
                {t('Producten', 'Products')}
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-popover">
                {productLinks.map((link) => (
                  <DropdownMenuItem key={link.path} asChild>
                    <Link to={link.path} className="cursor-pointer">
                      {link.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Center Logo - Hidden on mobile, shown on desktop */}
          <Link to="/" className="hidden lg:block absolute left-1/2 transform -translate-x-1/2">
            <img 
              src={logo} 
              alt="Power Veranda Logo" 
              className="h-16 w-auto"
            />
          </Link>

          {/* Mobile Logo - Left aligned */}
          <Link to="/" className="lg:hidden">
            <img 
              src={logo} 
              alt="Power Veranda Logo" 
              className="h-10 w-auto"
            />
          </Link>

          {/* Right Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <Link
              to="/galerij"
              className={`text-sm font-medium transition-fast hover:text-accent ${
                isActive('/galerij') ? 'text-accent' : 'text-foreground'
              }`}
            >
              {t('Galerij', 'Gallery')}
            </Link>
            <Link
              to="/contact"
              className={`text-sm font-medium transition-fast hover:text-accent ${
                isActive('/contact') ? 'text-accent' : 'text-foreground'
              }`}
            >
              Contact
            </Link>
            <div className="flex items-center gap-2 ml-4 border-l border-border pl-4">
              <Button
                variant={language === 'nl' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setLanguage('nl')}
                className="h-8 px-3 text-xs"
              >
                NL
              </Button>
              <Button
                variant={language === 'en' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setLanguage('en')}
                className="h-8 px-3 text-xs"
              >
                EN
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-sm font-medium ${
                    isActive(link.path) ? 'text-accent' : 'text-foreground'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="text-sm font-medium text-muted-foreground">
                {t('Producten', 'Products')}:
              </div>
              {productLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-medium text-foreground pl-4"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/galerij"
                onClick={() => setIsOpen(false)}
                className={`text-sm font-medium ${
                  isActive('/galerij') ? 'text-accent' : 'text-foreground'
                }`}
              >
                {t('Galerij', 'Gallery')}
              </Link>
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className={`text-sm font-medium ${
                  isActive('/contact') ? 'text-accent' : 'text-foreground'
                }`}
              >
                Contact
              </Link>
              <div className="flex gap-2 pt-2">
                <Button
                  variant={language === 'nl' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setLanguage('nl')}
                >
                  NL
                </Button>
                <Button
                  variant={language === 'en' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setLanguage('en')}
                >
                  EN
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
