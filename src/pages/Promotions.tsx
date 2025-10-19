import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const Promotions = () => {
  const promotions = [
    {
      id: 1,
      title: 'Киберпонедельник',
      discount: '-30%',
      description: 'Скидки до 30% на все модели',
      endDate: '31 октября',
      color: 'from-primary to-primary/60',
      icon: 'Zap'
    },
    {
      id: 2,
      title: 'Новая коллекция',
      discount: '-20%',
      description: 'Первым покупателям скидка 20%',
      endDate: '15 ноября',
      color: 'from-secondary to-secondary/60',
      icon: 'Sparkles'
    },
    {
      id: 3,
      title: 'Рассрочка 0%',
      discount: '12 мес',
      description: 'Беспроцентная рассрочка на всё',
      endDate: 'Постоянно',
      color: 'from-primary to-secondary',
      icon: 'CreditCard'
    }
  ];

  const hotDeals = [
    {
      id: 1,
      name: 'CYBER RUNNER X1',
      oldPrice: 15990,
      price: 12990,
      discount: 18,
      image: 'https://cdn.poehali.dev/projects/cded59d1-9959-40ca-bc2b-20780fe5c6b9/files/78da60f4-d998-431c-98bc-82233733ab82.jpg',
      stock: 5
    },
    {
      id: 2,
      name: 'QUANTUM SPRINT',
      oldPrice: 19990,
      price: 15990,
      discount: 20,
      image: 'https://cdn.poehali.dev/projects/cded59d1-9959-40ca-bc2b-20780fe5c6b9/files/8fc8ae58-bd75-4f12-a290-879fe4113e0e.jpg',
      stock: 3
    },
    {
      id: 3,
      name: 'NEON BOOST PRO',
      oldPrice: 22990,
      price: 18990,
      discount: 17,
      image: 'https://cdn.poehali.dev/projects/cded59d1-9959-40ca-bc2b-20780fe5c6b9/files/c48f6b98-5681-4d16-a65d-635b5a99eb30.jpg',
      stock: 7
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Акции и скидки
          </h1>
          <p className="text-xl text-muted-foreground">Лучшие предложения прямо сейчас</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {promotions.map((promo) => (
            <div
              key={promo.id}
              className="relative bg-card border border-border rounded-xl overflow-hidden hover:scale-105 transition-all group"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${promo.color} opacity-10`}></div>
              <div className="relative p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mb-4">
                  <Icon name={promo.icon} size={32} className="text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-2">{promo.title}</h3>
                <div className="text-4xl font-bold mb-3 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  {promo.discount}
                </div>
                <p className="text-muted-foreground mb-4">{promo.description}</p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Icon name="Clock" size={16} />
                  <span>До {promo.endDate}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold">Горячие предложения</h2>
            <Link
              to="/catalog"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              Смотреть все
              <Icon name="ArrowRight" size={20} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {hotDeals.map((deal) => (
              <div
                key={deal.id}
                className="group bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all hover:scale-105"
              >
                <div className="relative aspect-square bg-muted overflow-hidden">
                  <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-destructive text-destructive-foreground text-sm font-bold rounded-full">
                    -{deal.discount}%
                  </div>
                  <img
                    src={deal.image}
                    alt={deal.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  {deal.stock <= 5 && (
                    <div className="absolute bottom-4 left-4 right-4 px-3 py-2 bg-card/90 backdrop-blur-sm rounded-lg flex items-center gap-2">
                      <Icon name="AlertCircle" size={16} className="text-destructive" />
                      <span className="text-sm font-semibold">Осталось {deal.stock} шт</span>
                    </div>
                  )}
                </div>

                <div className="p-4">
                  <h3 className="text-lg font-bold mb-3">{deal.name}</h3>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl font-bold text-primary">{deal.price.toLocaleString()} ₽</span>
                    <span className="text-sm text-muted-foreground line-through">{deal.oldPrice.toLocaleString()} ₽</span>
                  </div>
                  <button className="w-full py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all flex items-center justify-center gap-2">
                    <Icon name="ShoppingCart" size={20} />
                    В корзину
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/30 rounded-xl p-8">
          <div className="max-w-3xl mx-auto text-center">
            <Icon name="Bell" size={48} className="text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Не пропусти новые акции</h3>
            <p className="text-muted-foreground mb-6">
              Подпишись на рассылку и получай уведомления о скидках первым
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
      </div>
    </div>
  );
};

export default Promotions;
