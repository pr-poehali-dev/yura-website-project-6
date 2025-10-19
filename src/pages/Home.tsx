import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const Home = () => {
  const featuredProducts = [
    {
      id: 1,
      name: 'CYBER RUNNER X1',
      price: 12990,
      image: 'https://cdn.poehali.dev/projects/cded59d1-9959-40ca-bc2b-20780fe5c6b9/files/78da60f4-d998-431c-98bc-82233733ab82.jpg',
      tag: 'ХИТ'
    },
    {
      id: 2,
      name: 'QUANTUM SPRINT',
      price: 15990,
      image: 'https://cdn.poehali.dev/projects/cded59d1-9959-40ca-bc2b-20780fe5c6b9/files/8fc8ae58-bd75-4f12-a290-879fe4113e0e.jpg',
      tag: 'НОВИНКА'
    },
    {
      id: 3,
      name: 'NEON BOOST PRO',
      price: 18990,
      image: 'https://cdn.poehali.dev/projects/cded59d1-9959-40ca-bc2b-20780fe5c6b9/files/c48f6b98-5681-4d16-a65d-635b5a99eb30.jpg',
      tag: 'PREMIUM'
    }
  ];

  const features = [
    {
      icon: 'Rocket',
      title: 'Быстрая доставка',
      description: 'От 1 дня по всей России'
    },
    {
      icon: 'Shield',
      title: 'Гарантия качества',
      description: 'Официальная гарантия 2 года'
    },
    {
      icon: 'Award',
      title: 'Эксклюзивные модели',
      description: 'Уникальные дизайны'
    },
    {
      icon: 'CreditCard',
      title: 'Оплата частями',
      description: 'Рассрочка 0% на 12 месяцев'
    }
  ];

  return (
    <div className="min-h-screen">
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-[120px]"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-card border border-primary/30 rounded-full mb-6">
              <span className="text-primary font-semibold">Следующий шаг в спорте</span>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-foreground to-secondary bg-clip-text text-transparent">
              Обувь будущего
            </h1>
            
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Технологичные кроссовки для максимальной производительности. Инновации в каждом шаге.
            </p>
            
            <div className="flex items-center justify-center gap-4">
              <Link
                to="/catalog"
                className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all hover:scale-105 flex items-center gap-2"
              >
                Смотреть каталог
                <Icon name="ArrowRight" size={20} />
              </Link>
              <Link
                to="/promotions"
                className="px-8 py-4 bg-card border border-border text-foreground rounded-lg font-semibold hover:bg-accent transition-all flex items-center gap-2"
              >
                Акции
                <Icon name="Sparkles" size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Хиты продаж</h2>
            <p className="text-muted-foreground">Самые популярные модели</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                className="group relative bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all hover:scale-105"
              >
                <div className="absolute top-4 right-4 px-3 py-1 bg-secondary text-secondary-foreground text-xs font-bold rounded-full">
                  {product.tag}
                </div>
                
                <div className="aspect-square mb-4 rounded-lg overflow-hidden bg-muted">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                
                <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-primary">{product.price.toLocaleString()} ₽</span>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Icon name="Star" size={16} className="fill-primary text-primary" />
                    <span>4.9</span>
                  </div>
                </div>
                
                <button className="w-full py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all flex items-center justify-center gap-2">
                  <Icon name="ShoppingCart" size={20} />
                  В корзину
                </button>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/catalog"
              className="inline-flex items-center gap-2 px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-all"
            >
              Весь каталог
              <Icon name="ArrowRight" size={20} />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center p-6 bg-card border border-border rounded-xl hover:border-primary/50 transition-all"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={feature.icon} size={32} className="text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Будь первым</h2>
            <p className="text-muted-foreground mb-8">
              Подпишись на рассылку и получи скидку 10% на первый заказ
            </p>
            
            <div className="flex gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Введи свой email"
                className="flex-1 px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:border-primary"
              />
              <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all flex items-center gap-2">
                <Icon name="Send" size={20} />
                Подписаться
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
