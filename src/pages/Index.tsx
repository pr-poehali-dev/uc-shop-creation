import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const [promoCode, setPromoCode] = useState('');
  const { toast } = useToast();

  const ucPackages = [
    { id: 1, amount: 60, price: 65, discount: null, popular: false },
    { id: 2, amount: 325, price: 330, discount: null, popular: false },
    { id: 3, amount: 660, price: 660, discount: 10, popular: true },
    { id: 4, amount: 1800, price: 1800, discount: 15, popular: false },
    { id: 5, amount: 3850, price: 3850, discount: 20, popular: false },
    { id: 6, amount: 8100, price: 8100, discount: 25, popular: false },
  ];

  const paymentMethods = [
    { name: 'Банковская карта', icon: 'CreditCard', description: 'Visa, MasterCard, МИР' },
    { name: 'СБП', icon: 'Smartphone', description: 'Система быстрых платежей' },
    { name: 'Электронные кошельки', icon: 'Wallet', description: 'ЮMoney, QIWI' },
    { name: 'Криптовалюта', icon: 'Bitcoin', description: 'BTC, ETH, USDT' },
  ];

  const reviews = [
    { name: 'Алексей', rating: 5, text: 'Быстро получил UC, всё работает отлично!', date: '2 дня назад' },
    { name: 'Мария', rating: 5, text: 'Лучшие цены, промокод сработал!', date: '5 дней назад' },
    { name: 'Дмитрий', rating: 5, text: 'Моментальная доставка, рекомендую', date: '1 неделю назад' },
  ];

  const faqItems = [
    { question: 'Как быстро я получу UC?', answer: 'UC зачисляются на ваш аккаунт в течение 5-15 минут после оплаты.' },
    { question: 'Безопасно ли покупать UC?', answer: 'Да, мы используем официальные каналы пополнения. Ваш аккаунт в полной безопасности.' },
    { question: 'Можно ли вернуть средства?', answer: 'Возврат возможен только если UC не были зачислены по нашей вине в течение 24 часов.' },
    { question: 'Какие данные нужны для покупки?', answer: 'Только ID вашего игрока в PUBG Mobile. Никаких паролей!' },
  ];

  const handleApplyPromo = () => {
    if (promoCode) {
      toast({
        title: '🎉 Промокод применён!',
        description: `Промокод "${promoCode}" даёт скидку 5%`,
      });
    }
  };

  const handleBuyPackage = (amount: number, price: number) => {
    toast({
      title: '✅ Пакет добавлен в корзину',
      description: `${amount} UC за ${price}₽`,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="bg-primary p-2 rounded-lg">
                <Icon name="Gamepad2" size={28} className="text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-primary">UC SHOP</h1>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">Magascha</p>
              </div>
            </div>
            <nav className="hidden md:flex gap-6">
              <a href="#catalog" className="text-sm hover:text-primary transition-colors">Каталог</a>
              <a href="#payment" className="text-sm hover:text-primary transition-colors">Оплата</a>
              <a href="#how-to" className="text-sm hover:text-primary transition-colors">Как получить</a>
              <a href="#support" className="text-sm hover:text-primary transition-colors">Поддержка</a>
              <a href="#reviews" className="text-sm hover:text-primary transition-colors">Отзывы</a>
              <a href="#faq" className="text-sm hover:text-primary transition-colors">FAQ</a>
            </nav>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/10 py-20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNDksIDExNSwgMjIsIDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <Badge className="mb-4 bg-secondary text-secondary-foreground hover:bg-secondary">
              <Icon name="Zap" size={14} className="mr-1" />
              Мгновенная доставка UC
            </Badge>
            <h2 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">
              КУПИТЬ UC ДЛЯ<br />
              <span className="text-primary">PUBG MOBILE</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Лучшие цены на Unknown Cash • Моментальное зачисление • Официальные каналы • Промокоды и акции
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 animate-glow">
                <Icon name="ShoppingCart" size={20} className="mr-2" />
                Купить UC сейчас
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <Icon name="Gift" size={20} className="mr-2" />
                Промокоды
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="catalog" className="py-16 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Каталог UC</h2>
            <p className="text-muted-foreground">Выберите нужное количество Unknown Cash</p>
          </div>

          <div className="max-w-sm mx-auto mb-8">
            <Card className="bg-gradient-to-r from-primary/20 to-secondary/20 border-primary/50">
              <CardContent className="p-4">
                <div className="flex gap-2">
                  <Input
                    placeholder="Введите промокод"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    className="bg-background"
                  />
                  <Button onClick={handleApplyPromo} className="shrink-0">
                    <Icon name="Tag" size={18} />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {ucPackages.map((pkg) => (
              <Card
                key={pkg.id}
                className={`relative overflow-hidden transition-all hover:scale-105 hover:shadow-xl hover:shadow-primary/20 ${
                  pkg.popular ? 'border-primary border-2' : ''
                }`}
              >
                {pkg.popular && (
                  <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-3 py-1 text-xs font-bold">
                    ПОПУЛЯРНО
                  </div>
                )}
                {pkg.discount && (
                  <div className="absolute top-0 left-0 bg-secondary text-secondary-foreground px-3 py-1 text-xs font-bold">
                    -{pkg.discount}%
                  </div>
                )}
                <CardHeader className="text-center pb-4">
                  <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Coins" size={40} className="text-primary" />
                  </div>
                  <CardTitle className="text-3xl">{pkg.amount} UC</CardTitle>
                  <CardDescription className="text-2xl font-bold text-primary mt-2">
                    {pkg.price}₽
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button
                    className="w-full"
                    size="lg"
                    onClick={() => handleBuyPackage(pkg.amount, pkg.price)}
                  >
                    <Icon name="ShoppingCart" size={18} className="mr-2" />
                    Купить
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="payment" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Способы оплаты</h2>
            <p className="text-muted-foreground">Выберите удобный способ оплаты</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {paymentMethods.map((method) => (
              <Card key={method.name} className="hover:border-primary transition-all">
                <CardHeader className="text-center">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Icon name={method.icon as any} size={32} className="text-primary" />
                  </div>
                  <CardTitle className="text-lg">{method.name}</CardTitle>
                  <CardDescription className="text-sm">{method.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="how-to" className="py-16 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Как получить UC</h2>
            <p className="text-muted-foreground">Простой процесс в 4 шага</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { icon: 'Package', title: 'Выберите пакет', desc: 'Выберите нужное количество UC' },
              { icon: 'User', title: 'Введите ID', desc: 'Укажите ваш игровой ID PUBG' },
              { icon: 'CreditCard', title: 'Оплатите', desc: 'Выберите удобный способ оплаты' },
              { icon: 'CheckCircle', title: 'Получите UC', desc: 'UC зачислятся автоматически' },
            ].map((step, idx) => (
              <div key={idx} className="text-center">
                <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-primary">
                  <Icon name={step.icon as any} size={36} className="text-primary" />
                </div>
                <div className="text-primary text-sm font-bold mb-2">ШАГ {idx + 1}</div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="support" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon name="Headphones" size={40} className="text-primary" />
            </div>
            <h2 className="text-4xl font-bold mb-4">Поддержка 24/7</h2>
            <p className="text-muted-foreground mb-8">
              Наша служба поддержки всегда готова помочь вам с любыми вопросами
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gap-2">
                <Icon name="MessageCircle" size={20} />
                Написать в чат
              </Button>
              <Button size="lg" variant="outline" className="gap-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <Icon name="Send" size={20} />
                Telegram
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="reviews" className="py-16 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Отзывы клиентов</h2>
            <p className="text-muted-foreground">Что говорят наши покупатели</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {reviews.map((review, idx) => (
              <Card key={idx} className="hover:border-primary transition-all">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-primary/20 w-12 h-12 rounded-full flex items-center justify-center">
                      <Icon name="User" size={24} className="text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-base">{review.name}</CardTitle>
                      <div className="flex gap-1 mt-1">
                        {[...Array(review.rating)].map((_, i) => (
                          <Icon key={i} name="Star" size={14} className="text-primary fill-primary" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <CardDescription className="text-foreground">{review.text}</CardDescription>
                  <p className="text-xs text-muted-foreground mt-2">{review.date}</p>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Вопросы и ответы</h2>
            <p className="text-muted-foreground">Ответы на часто задаваемые вопросы</p>
          </div>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, idx) => (
                <AccordionItem key={idx} value={`item-${idx}`}>
                  <AccordionTrigger className="text-left hover:text-primary">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-primary/20 via-background to-secondary/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Специальное предложение</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Используйте промокод <span className="text-primary font-bold">MAGASCHA10</span> и получите скидку 10%
          </p>
          <Button size="lg" className="animate-glow">
            <Icon name="Gift" size={20} className="mr-2" />
            Активировать промокод
          </Button>
        </div>
      </section>

      <footer className="border-t border-border py-12 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-primary p-2 rounded-lg">
                  <Icon name="Gamepad2" size={24} className="text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary">UC SHOP</h3>
                  <p className="text-xs text-muted-foreground">Magascha</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Лучший магазин UC для PUBG Mobile с моментальной доставкой и выгодными ценами
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Навигация</h4>
              <div className="flex flex-col gap-2 text-sm">
                <a href="#catalog" className="text-muted-foreground hover:text-primary transition-colors">Каталог UC</a>
                <a href="#payment" className="text-muted-foreground hover:text-primary transition-colors">Способы оплаты</a>
                <a href="#how-to" className="text-muted-foreground hover:text-primary transition-colors">Как получить UC</a>
                <a href="#support" className="text-muted-foreground hover:text-primary transition-colors">Поддержка</a>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <div className="flex flex-col gap-3 text-sm">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Icon name="Mail" size={16} className="text-primary" />
                  support@ucshop.com
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Icon name="Send" size={16} className="text-primary" />
                  @ucshop_support
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Icon name="Clock" size={16} className="text-primary" />
                  Онлайн 24/7
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>© 2024 UC Shop Magascha. Все права защищены.</p>
            <p className="mt-2">Мы не являемся официальным представителем PUBG Mobile</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
