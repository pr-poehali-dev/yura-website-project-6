import { useState } from 'react';
import Icon from '@/components/ui/icon';

const Catalog = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState([0, 30000]);

  const categories = [
    { id: 'all', name: 'Все модели', icon: 'Grid3x3' },
    { id: 'running', name: 'Для бега', icon: 'Footprints' },
    { id: 'basketball', name: 'Баскетбол', icon: 'Circle' },
    { id: 'training', name: 'Тренировки', icon: 'Dumbbell' },
    { id: 'lifestyle', name: 'Lifestyle', icon: 'Sparkles' }
  ];

  const products = [
    {
      id: 1,
      name: 'CYBER RUNNER X1',
      price: 12990,
      category: 'running',
      image: 'https://cdn.poehali.dev/projects/cded59d1-9959-40ca-bc2b-20780fe5c6b9/files/78da60f4-d998-431c-98bc-82233733ab82.jpg',
      rating: 4.9,
      colors: ['#00ffff', '#ff00ff', '#ffff00']
    },
    {
      id: 2,
      name: 'QUANTUM SPRINT',
      price: 15990,
      category: 'running',
      image: 'https://cdn.poehali.dev/projects/cded59d1-9959-40ca-bc2b-20780fe5c6b9/files/8fc8ae58-bd75-4f12-a290-879fe4113e0e.jpg',
      rating: 4.8,
      colors: ['#ffffff', '#000000', '#00ffff']
    },
    {
      id: 3,
      name: 'NEON BOOST PRO',
      price: 18990,
      category: 'basketball',
      image: 'https://cdn.poehali.dev/projects/cded59d1-9959-40ca-bc2b-20780fe5c6b9/files/c48f6b98-5681-4d16-a65d-635b5a99eb30.jpg',
      rating: 5.0,
      colors: ['#ff00ff', '#00ff00', '#ffff00']
    },
    {
      id: 4,
      name: 'VELOCITY MAX',
      price: 13990,
      category: 'training',
      image: 'https://cdn.poehali.dev/projects/cded59d1-9959-40ca-bc2b-20780fe5c6b9/files/78da60f4-d998-431c-98bc-82233733ab82.jpg',
      rating: 4.7,
      colors: ['#ff0000', '#000000', '#ffffff']
    },
    {
      id: 5,
      name: 'ULTRA LIGHT 3000',
      price: 16990,
      category: 'lifestyle',
      image: 'https://cdn.poehali.dev/projects/cded59d1-9959-40ca-bc2b-20780fe5c6b9/files/8fc8ae58-bd75-4f12-a290-879fe4113e0e.jpg',
      rating: 4.9,
      colors: ['#ffffff', '#808080', '#000000']
    },
    {
      id: 6,
      name: 'POWER JUMP Z',
      price: 19990,
      category: 'basketball',
      image: 'https://cdn.poehali.dev/projects/cded59d1-9959-40ca-bc2b-20780fe5c6b9/files/c48f6b98-5681-4d16-a65d-635b5a99eb30.jpg',
      rating: 4.8,
      colors: ['#0000ff', '#ff0000', '#ffff00']
    }
  ];

  const filteredProducts = products.filter(product => {
    const categoryMatch = selectedCategory === 'all' || product.category === selectedCategory;
    const priceMatch = product.price >= priceRange[0] && product.price <= priceRange[1];
    return categoryMatch && priceMatch;
  });

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Каталог
          </h1>
          <p className="text-muted-foreground">Найди свою идеальную пару</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <aside className="lg:col-span-1">
            <div className="bg-card border border-border rounded-xl p-6 sticky top-24">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <Icon name="Filter" size={20} />
                Фильтры
              </h3>

              <div className="mb-6">
                <h4 className="text-sm font-semibold mb-3 text-muted-foreground">КАТЕГОРИИ</h4>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                        selectedCategory === category.id
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-muted hover:bg-accent text-foreground'
                      }`}
                    >
                      <Icon name={category.icon} size={20} />
                      <span className="font-medium">{category.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-semibold mb-3 text-muted-foreground">ЦЕНА</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span>{priceRange[0].toLocaleString()} ₽</span>
                    <span>{priceRange[1].toLocaleString()} ₽</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="30000"
                    step="1000"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                    className="w-full accent-primary"
                  />
                </div>
              </div>
            </div>
          </aside>

          <div className="lg:col-span-3">
            <div className="flex items-center justify-between mb-6">
              <p className="text-muted-foreground">
                Найдено: <span className="text-foreground font-semibold">{filteredProducts.length}</span> моделей
              </p>
              <select className="px-4 py-2 bg-card border border-border rounded-lg focus:outline-none focus:border-primary">
                <option>По популярности</option>
                <option>Цена: по возрастанию</option>
                <option>Цена: по убыванию</option>
                <option>По рейтингу</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="group bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all hover:scale-105"
                >
                  <div className="relative aspect-square bg-muted overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <button className="absolute top-4 right-4 w-10 h-10 bg-card/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all">
                      <Icon name="Heart" size={20} />
                    </button>
                  </div>

                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-2">{product.name}</h3>
                    
                    <div className="flex items-center gap-2 mb-3">
                      {product.colors.map((color, index) => (
                        <button
                          key={index}
                          className="w-6 h-6 rounded-full border-2 border-border hover:border-primary transition-all"
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>

                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-bold text-primary">{product.price.toLocaleString()} ₽</span>
                      <div className="flex items-center gap-1 text-sm">
                        <Icon name="Star" size={16} className="fill-primary text-primary" />
                        <span className="font-semibold">{product.rating}</span>
                      </div>
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
        </div>
      </div>
    </div>
  );
};

export default Catalog;
