import Icon from '@/components/ui/icon';

const Contacts = () => {
  const contacts = [
    {
      icon: 'Phone',
      title: 'Телефон',
      value: '+7 (800) 555-35-35',
      description: 'Бесплатно по России'
    },
    {
      icon: 'Mail',
      title: 'Email',
      value: 'info@nextstep.ru',
      description: 'Ответим в течение часа'
    },
    {
      icon: 'MapPin',
      title: 'Адрес',
      value: 'Москва, ул. Тверская, 1',
      description: 'Флагманский магазин'
    },
    {
      icon: 'Clock',
      title: 'Режим работы',
      value: 'Ежедневно 10:00 - 22:00',
      description: 'Без выходных'
    }
  ];

  const socials = [
    { icon: 'Send', name: 'Telegram', link: '#' },
    { icon: 'Instagram', name: 'Instagram', link: '#' },
    { icon: 'Youtube', name: 'YouTube', link: '#' },
    { icon: 'Twitter', name: 'X (Twitter)', link: '#' }
  ];

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Контакты
          </h1>
          <p className="text-xl text-muted-foreground mb-12">
            Свяжись с нами удобным способом
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {contacts.map((contact, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all text-center"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={contact.icon} size={28} className="text-primary" />
                </div>
                <h3 className="text-sm font-semibold text-muted-foreground mb-2">{contact.title}</h3>
                <p className="text-lg font-bold mb-1">{contact.value}</p>
                <p className="text-xs text-muted-foreground">{contact.description}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="bg-card border border-border rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-6">Напиши нам</h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">Имя</label>
                  <input
                    type="text"
                    placeholder="Как тебя зовут?"
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Email</label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Сообщение</label>
                  <textarea
                    rows={4}
                    placeholder="Чем можем помочь?"
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-primary resize-none"
                  ></textarea>
                </div>

                <button className="w-full py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all flex items-center justify-center gap-2">
                  <Icon name="Send" size={20} />
                  Отправить
                </button>
              </form>
            </div>

            <div className="space-y-6">
              <div className="bg-card border border-border rounded-xl p-8">
                <h3 className="text-xl font-bold mb-4">Социальные сети</h3>
                <p className="text-muted-foreground mb-6">Подписывайся и следи за новинками</p>
                <div className="grid grid-cols-2 gap-4">
                  {socials.map((social, index) => (
                    <a
                      key={index}
                      href={social.link}
                      className="flex items-center gap-3 p-4 bg-muted hover:bg-accent rounded-lg transition-all group"
                    >
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-all">
                        <Icon name={social.icon} size={20} className="text-primary" />
                      </div>
                      <span className="font-semibold">{social.name}</span>
                    </a>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/30 rounded-xl p-8">
                <Icon name="Headphones" size={40} className="text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Поддержка 24/7</h3>
                <p className="text-muted-foreground mb-4">
                  Наша команда всегда на связи и готова помочь с любым вопросом
                </p>
                <div className="flex items-center gap-2 text-sm">
                  <Icon name="Clock" size={16} className="text-primary" />
                  <span className="text-muted-foreground">Средний ответ: 5 минут</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-6">Как нас найти</h2>
            <div className="aspect-video bg-muted rounded-lg overflow-hidden mb-4">
              <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                <div className="text-center">
                  <Icon name="MapPin" size={48} className="mx-auto mb-2" />
                  <p>Москва, ул. Тверская, 1</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-start gap-3">
                <Icon name="MapPin" size={20} className="text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold mb-1">Адрес</p>
                  <p className="text-sm text-muted-foreground">
                    Москва, ул. Тверская, 1<br />
                    Вход с главного входа
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Icon name="Car" size={20} className="text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold mb-1">Парковка</p>
                  <p className="text-sm text-muted-foreground">
                    Подземная парковка<br />
                    Первые 2 часа бесплатно
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Icon name="Train" size={20} className="text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold mb-1">Как добраться</p>
                  <p className="text-sm text-muted-foreground">
                    Метро "Тверская"<br />
                    5 минут пешком
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
