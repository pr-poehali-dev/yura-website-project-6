import Icon from '@/components/ui/icon';

const About = () => {
  const stats = [
    { value: '50K+', label: 'Довольных клиентов' },
    { value: '200+', label: 'Моделей обуви' },
    { value: '15', label: 'Лет на рынке' },
    { value: '99%', label: 'Положительных отзывов' }
  ];

  const values = [
    {
      icon: 'Lightbulb',
      title: 'Инновации',
      description: 'Используем передовые технологии в каждой модели'
    },
    {
      icon: 'Heart',
      title: 'Качество',
      description: 'Только проверенные материалы и производители'
    },
    {
      icon: 'Users',
      title: 'Клиенты',
      description: 'Ваш комфорт - наш главный приоритет'
    },
    {
      icon: 'Zap',
      title: 'Скорость',
      description: 'Быстрая доставка по всей стране'
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            О магазине
          </h1>
          <p className="text-xl text-muted-foreground mb-12">
            NEXTSTEP — это больше, чем просто магазин спортивной обуви
          </p>

          <div className="bg-card border border-border rounded-xl p-8 mb-12">
            <h2 className="text-3xl font-bold mb-6">Наша миссия</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Мы верим, что правильная обувь может изменить вашу жизнь. Наша цель — предоставить вам доступ к самым инновационным и технологичным моделям спортивной обуви, которые помогут вам достичь новых высот в спорте и жизни.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Каждая пара обуви в нашем каталоге проходит строгий отбор. Мы сотрудничаем только с проверенными брендами и следим за последними технологическими разработками в индустрии спортивной обуви.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-6 text-center"
              >
                <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>

          <h2 className="text-3xl font-bold mb-8 text-center">Наши ценности</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name={value.icon} size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/30 rounded-xl p-8 text-center">
            <Icon name="Rocket" size={48} className="text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Присоединяйся к нам</h3>
            <p className="text-muted-foreground mb-6">
              Стань частью сообщества людей, которые стремятся к большему
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
