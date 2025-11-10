import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const ProductSidebar = () => {
  const { t } = useLanguage();
  const location = useLocation();

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

  return (
    <aside className="bg-secondary rounded-lg p-6 h-fit sticky top-4">
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
  );
};

export default ProductSidebar;
