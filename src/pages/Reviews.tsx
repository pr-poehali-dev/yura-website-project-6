import { useState } from 'react';
import Icon from '@/components/ui/icon';

const Reviews = () => {
  const [rating, setRating] = useState(0);

  const reviews = [
    {
      id: 1,
      author: 'Алексей М.',
      rating: 5,
      date: '15 октября 2024',
      product: 'CYBER RUNNER X1',
      text: 'Невероятные кроссовки! Легкие, удобные, дизайн просто космос. Бегаю каждый день, ноги не устают. Однозначно рекомендую!',
      verified: true
    },
    {
      id: 2,
      author: 'Мария К.',
      rating: 5,
      date: '12 октября 2024',
      product: 'QUANTUM SPRINT',
      text: 'Заказала для тренировок в зале. Качество на высоте, сидят идеально. Доставка быстрая, упаковка отличная. Спасибо!',
      verified: true
    },
    {
      id: 3,
      author: 'Дмитрий С.',
      rating: 4,
      date: '10 октября 2024',
      product: 'NEON BOOST PRO',
      text: 'Отличные кроссовки для баскетбола. Хорошая амортизация и поддержка стопы. Единственный минус - немного маломерят.',
      verified: true
    },
    {
      id: 4,
      author: 'Елена П.',
      rating: 5,
      date: '8 октября 2024',
      product: 'CYBER RUNNER X1',
      text: 'Купила мужу на день рождения. В восторге! Говорит, что самые удобные кроссовки из всех, что у него были.',
      verified: true
    },
    {
      id: 5,
      author: 'Игорь В.',
      rating: 5,
      date: '5 октября 2024',
      product: 'QUANTUM SPRINT',
      text: 'Стильные и технологичные. Подошва отлично амортизирует, материалы дышащие. За эту цену - просто находка!',
      verified: true
    }
  ];

  const stats = [
    { label: '5 звёзд', value: 87, count: 4356 },
    { label: '4 звезды', value: 10, count: 523 },
    { label: '3 звезды', value: 2, count: 98 },
    { label: '2 звезды', value: 1, count: 45 },
    { label: '1 звезда', value: 0, count: 12 }
  ];

  const averageRating = 4.9;
  const totalReviews = 5034;

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Отзывы покупателей
          </h1>
          <p className="text-xl text-muted-foreground mb-12">
            Реальные мнения наших клиентов
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="md:col-span-1 bg-card border border-border rounded-xl p-8">
              <div className="text-center mb-6">
                <div className="text-6xl font-bold text-primary mb-2">{averageRating}</div>
                <div className="flex items-center justify-center gap-1 mb-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Icon
                      key={star}
                      name="Star"
                      size={24}
                      className={star <= averageRating ? 'fill-primary text-primary' : 'text-muted'}
                    />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">
                  На основе {totalReviews.toLocaleString()} отзывов
                </p>
              </div>

              <div className="space-y-3">
                {stats.map((stat, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <span className="text-xs text-muted-foreground w-16">{stat.label}</span>
                    <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary rounded-full"
                        style={{ width: `${stat.value}%` }}
                      ></div>
                    </div>
                    <span className="text-xs text-muted-foreground w-12 text-right">
                      {stat.count}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="md:col-span-2 bg-card border border-border rounded-xl p-8">
              <h3 className="text-xl font-bold mb-6">Оставь свой отзыв</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">Твоя оценка</label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        onClick={() => setRating(star)}
                        className="transition-all hover:scale-110"
                      >
                        <Icon
                          name="Star"
                          size={32}
                          className={star <= rating ? 'fill-primary text-primary' : 'text-muted hover:text-primary/50'}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Твой отзыв</label>
                  <textarea
                    rows={4}
                    placeholder="Расскажи о своих впечатлениях..."
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-primary resize-none"
                  ></textarea>
                </div>

                <button className="w-full py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all flex items-center justify-center gap-2">
                  <Icon name="Send" size={20} />
                  Отправить отзыв
                </button>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Последние отзывы</h2>
            {reviews.map((review) => (
              <div
                key={review.id}
                className="bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-bold">{review.author}</span>
                      {review.verified && (
                        <div className="flex items-center gap-1 px-2 py-1 bg-primary/10 rounded-full">
                          <Icon name="BadgeCheck" size={14} className="text-primary" />
                          <span className="text-xs text-primary font-semibold">Проверено</span>
                        </div>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">{review.date}</p>
                  </div>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Icon
                        key={star}
                        name="Star"
                        size={16}
                        className={star <= review.rating ? 'fill-primary text-primary' : 'text-muted'}
                      />
                    ))}
                  </div>
                </div>

                <div className="mb-3">
                  <span className="text-sm font-semibold text-muted-foreground">
                    Товар: <span className="text-foreground">{review.product}</span>
                  </span>
                </div>

                <p className="text-muted-foreground leading-relaxed">{review.text}</p>

                <div className="flex items-center gap-4 mt-4 pt-4 border-t border-border">
                  <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-all">
                    <Icon name="ThumbsUp" size={16} />
                    Полезно (24)
                  </button>
                  <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-all">
                    <Icon name="MessageCircle" size={16} />
                    Ответить
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <button className="px-8 py-3 border border-primary text-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-all font-semibold">
              Показать ещё
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
