import Icon from '@/components/ui/icon';

const Delivery = () => {
  const methods = [
    {
      icon: 'Truck',
      title: 'Курьерская доставка',
      time: '1-3 дня',
      price: '500 ₽',
      description: 'Доставим прямо к двери в удобное время'
    },
    {
      icon: 'Package',
      title: 'Пункт выдачи',
      time: '2-5 дней',
      price: 'Бесплатно',
      description: 'Более 5000 пунктов выдачи по всей России'
    },
    {
      icon: 'Store',
      title: 'Самовывоз',
      time: 'Сегодня',
      price: 'Бесплатно',
      description: 'Забери заказ из нашего магазина'
    }
  ];

  const steps = [
    {
      number: '01',
      title: 'Оформи заказ',
      description: 'Добавь товары в корзину и заполни данные'
    },
    {
      number: '02',
      title: 'Выбери доставку',
      description: 'Укажи удобный способ получения'
    },
    {
      number: '03',
      title: 'Оплати',
      description: 'Онлайн или при получении'
    },
    {
      number: '04',
      title: 'Получи заказ',
      description: 'В указанное время и место'
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Доставка и оплата
          </h1>
          <p className="text-xl text-muted-foreground mb-12">
            Выбирай удобный способ получения заказа
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {methods.map((method, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Icon name={method.icon} size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{method.title}</h3>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-sm text-muted-foreground flex items-center gap-1">
                    <Icon name="Clock" size={14} />
                    {method.time}
                  </span>
                  <span className="text-sm font-semibold text-primary">{method.price}</span>
                </div>
                <p className="text-sm text-muted-foreground">{method.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-card border border-border rounded-xl p-8 mb-12">
            <h2 className="text-3xl font-bold mb-8">Как сделать заказ</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="text-5xl font-bold text-primary/20 mb-3">{step.number}</div>
                  <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                  {index < steps.length - 1 && (
                    <Icon
                      name="ArrowRight"
                      size={24}
                      className="hidden md:block absolute top-8 -right-4 text-primary/30"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-card border border-border rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="CreditCard" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Способы оплаты</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <Icon name="Check" size={16} className="text-primary" />
                      Банковские карты (Visa, MasterCard, МИР)
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Check" size={16} className="text-primary" />
                      Электронные кошельки
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Check" size={16} className="text-primary" />
                      Наличные при получении
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Check" size={16} className="text-primary" />
                      Рассрочка 0%
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="MapPin" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">География доставки</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <Icon name="Check" size={16} className="text-primary" />
                      Вся территория России
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Check" size={16} className="text-primary" />
                      Москва и МО — от 1 дня
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Check" size={16} className="text-primary" />
                      Крупные города — от 2 дней
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Check" size={16} className="text-primary" />
                      Отдалённые регионы — 5-7 дней
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/30 rounded-xl p-8">
            <div className="flex items-start gap-4">
              <Icon name="Info" size={32} className="text-primary flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-3">Важная информация</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Бесплатная доставка при заказе от 5000 ₽</li>
                  <li>• Можно примерить перед оплатой</li>
                  <li>• Возврат и обмен в течение 30 дней</li>
                  <li>• Отслеживание заказа в личном кабинете</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
