import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useNavigate } from 'react-router-dom';

const ProductSidebar = () => {
  const { t } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();

  const products = [
    {
      name: 'Veranda Optimum',
      path: '/producten/optimum',
    },
    {
      name: 'Veranda Premium',
      path: '/producten/premium',
    },
    {
      name: 'Veranda Lux Line',
      path: '/producten/lux-line',
    },
    {
      name: 'Glazen Schuifwanden',
      path: '/producten/sliding-glass',
    },
  ];

  const currentProduct = products.find(p => p.path === location.pathname);

  return (
    <>
      {/* Mobile Select Dropdown */}
      <div className="lg:hidden mb-6">
        <Select value={location.pathname} onValueChange={(value) => navigate(value)}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder={t('Selecteer veranda', 'Select veranda')} />
          </SelectTrigger>
          <SelectContent>
            {products.map((product) => (
              <SelectItem key={product.path} value={product.path}>
                {product.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Desktop Sidebar */}
      <aside className="hidden lg:block bg-secondary rounded-lg p-6 h-fit sticky top-20">
        <h3 className="text-lg font-bold mb-4 pb-2 border-b border-border">
          {t('ONZE VERANDA\'S', 'OUR VERANDAS')}
        </h3>
        <nav>
          <ul className="space-y-2">
            {products.map((product) => (
              <li key={product.path}>
                <Link
                  to={product.path}
                  className={`block py-2 px-3 rounded transition-colors ${
                    location.pathname === product.path
                      ? 'bg-accent text-accent-foreground font-medium'
                      : 'hover:bg-muted'
                  }`}
                >
                  {product.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default ProductSidebar;
