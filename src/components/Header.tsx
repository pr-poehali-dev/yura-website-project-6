import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
              <Icon name="Zap" size={24} className="text-primary-foreground" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              NEXTSTEP
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-foreground hover:text-primary transition-colors">
              Главная
            </Link>
            <Link to="/catalog" className="text-foreground hover:text-primary transition-colors">
              Каталог
            </Link>
            <Link to="/promotions" className="text-foreground hover:text-primary transition-colors">
              Акции
            </Link>
            <Link to="/about" className="text-foreground hover:text-primary transition-colors">
              О магазине
            </Link>
            <Link to="/delivery" className="text-foreground hover:text-primary transition-colors">
              Доставка
            </Link>
            <Link to="/reviews" className="text-foreground hover:text-primary transition-colors">
              Отзывы
            </Link>
            <Link to="/contacts" className="text-foreground hover:text-primary transition-colors">
              Контакты
            </Link>
          </nav>

          <Link 
            to="/cart" 
            className="relative p-3 bg-card hover:bg-accent border border-border rounded-lg transition-all hover:scale-105"
          >
            <Icon name="ShoppingCart" size={24} className="text-foreground" />
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-secondary text-secondary-foreground text-xs rounded-full flex items-center justify-center font-bold">
              0
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
