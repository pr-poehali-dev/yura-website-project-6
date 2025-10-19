import { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'CYBER RUNNER X1',
      price: 12990,
      quantity: 1,
      size: 42,
      image: 'https://cdn.poehali.dev/projects/cded59d1-9959-40ca-bc2b-20780fe5c6b9/files/78da60f4-d998-431c-98bc-82233733ab82.jpg'
    },
    {
      id: 2,
      name: 'QUANTUM SPRINT',
      price: 15990,
      quantity: 2,
      size: 43,
      image: 'https://cdn.poehali.dev/projects/cded59d1-9959-40ca-bc2b-20780fe5c6b9/files/8fc8ae58-bd75-4f12-a290-879fe4113e0e.jpg'
    }
  ]);

  const updateQuantity = (id: number, delta: number) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const delivery = 500;
  const total = subtotal + delivery;

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center py-20">
            <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon name="ShoppingCart" size={48} className="text-muted-foreground" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Корзина пуста</h2>
            <p className="text-muted-foreground mb-8">Добавь что-нибудь из каталога</p>
            <Link
              to="/catalog"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all"
            >
              <Icon name="Grid3x3" size={20} />
              Перейти в каталог
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold mb-12 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Корзина
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="bg-card border border-border rounded-xl p-6 flex gap-6"
              >
                <div className="w-32 h-32 bg-muted rounded-lg overflow-hidden flex-shrink-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="text-xl font-bold mb-1">{item.name}</h3>
                      <p className="text-sm text-muted-foreground">Размер: {item.size}</p>
                    </div>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="p-2 hover:bg-destructive/10 hover:text-destructive rounded-lg transition-all"
                    >
                      <Icon name="Trash2" size={20} />
                    </button>
                  </div>

                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="w-8 h-8 bg-muted hover:bg-accent rounded-lg flex items-center justify-center transition-all"
                      >
                        <Icon name="Minus" size={16} />
                      </button>
                      <span className="text-lg font-semibold w-8 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="w-8 h-8 bg-muted hover:bg-accent rounded-lg flex items-center justify-center transition-all"
                      >
                        <Icon name="Plus" size={16} />
                      </button>
                    </div>
                    <span className="text-2xl font-bold text-primary">
                      {(item.price * item.quantity).toLocaleString()} ₽
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-1">
            <div className="bg-card border border-border rounded-xl p-6 sticky top-24">
              <h3 className="text-xl font-bold mb-6">Итого</h3>

              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between text-muted-foreground">
                  <span>Товары ({cartItems.length})</span>
                  <span>{subtotal.toLocaleString()} ₽</span>
                </div>
                <div className="flex items-center justify-between text-muted-foreground">
                  <span>Доставка</span>
                  <span>{delivery.toLocaleString()} ₽</span>
                </div>
                <div className="h-px bg-border"></div>
                <div className="flex items-center justify-between text-xl font-bold">
                  <span>Всего</span>
                  <span className="text-primary">{total.toLocaleString()} ₽</span>
                </div>
              </div>

              <button className="w-full py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all mb-4 flex items-center justify-center gap-2">
                <Icon name="CreditCard" size={20} />
                Оформить заказ
              </button>

              <Link
                to="/catalog"
                className="w-full py-3 bg-card border border-border text-foreground rounded-lg font-semibold hover:bg-accent transition-all flex items-center justify-center gap-2"
              >
                <Icon name="ArrowLeft" size={20} />
                Продолжить покупки
              </Link>

              <div className="mt-6 p-4 bg-primary/10 border border-primary/30 rounded-lg">
                <div className="flex items-start gap-3">
                  <Icon name="Gift" size={20} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-sm font-semibold mb-1">Промокод</p>
                    <input
                      type="text"
                      placeholder="Введи код"
                      className="w-full px-3 py-2 bg-card border border-border rounded-lg focus:outline-none focus:border-primary text-sm"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Icon name="Shield" size={16} className="text-primary" />
                  <span>Безопасная оплата</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Icon name="Truck" size={16} className="text-primary" />
                  <span>Быстрая доставка</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Icon name="RefreshCcw" size={16} className="text-primary" />
                  <span>Возврат 30 дней</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
