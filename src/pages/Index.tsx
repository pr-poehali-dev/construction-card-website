import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

type ProjectType = 'all' | 'commercial' | 'residential' | 'reconstruction';

interface Project {
  id: number;
  title: string;
  type: ProjectType;
  image: string;
  description: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Бизнес-центр "Альфа"',
    type: 'commercial',
    image: 'https://cdn.poehali.dev/projects/0de79e42-0a5a-491a-b6f1-611aa807432a/files/61541c12-1760-4f7b-919f-3bd8d91db8cb.jpg',
    description: 'Современный офисный комплекс площадью 12 000 м²'
  },
  {
    id: 2,
    title: 'ЖК "Солнечный"',
    type: 'residential',
    image: 'https://cdn.poehali.dev/projects/0de79e42-0a5a-491a-b6f1-611aa807432a/files/89594aa3-a673-4869-89c7-686f2d04abc7.jpg',
    description: 'Жилой комплекс на 250 квартир с подземной парковкой'
  },
  {
    id: 3,
    title: 'Реконструкция завода',
    type: 'reconstruction',
    image: 'https://cdn.poehali.dev/projects/0de79e42-0a5a-491a-b6f1-611aa807432a/files/b0dcaaec-ad62-475f-a515-ca863b33bf98.jpg',
    description: 'Комплексная реконструкция производственного помещения'
  },
  {
    id: 4,
    title: 'ТРЦ "Галерея"',
    type: 'commercial',
    image: 'https://cdn.poehali.dev/projects/0de79e42-0a5a-491a-b6f1-611aa807432a/files/61541c12-1760-4f7b-919f-3bd8d91db8cb.jpg',
    description: 'Торгово-развлекательный центр площадью 25 000 м²'
  },
  {
    id: 5,
    title: 'Коттеджный поселок',
    type: 'residential',
    image: 'https://cdn.poehali.dev/projects/0de79e42-0a5a-491a-b6f1-611aa807432a/files/89594aa3-a673-4869-89c7-686f2d04abc7.jpg',
    description: 'Строительство 45 коттеджей премиум-класса'
  },
  {
    id: 6,
    title: 'Реставрация памятника',
    type: 'reconstruction',
    image: 'https://cdn.poehali.dev/projects/0de79e42-0a5a-491a-b6f1-611aa807432a/files/b0dcaaec-ad62-475f-a515-ca863b33bf98.jpg',
    description: 'Реставрация исторического здания XIX века'
  }
];

const services = [
  {
    icon: 'Building2',
    title: 'Коммерческое строительство',
    description: 'Офисные центры, торговые комплексы, производственные здания'
  },
  {
    icon: 'Home',
    title: 'Жилые объекты',
    description: 'Многоквартирные дома, коттеджи, таунхаусы'
  },
  {
    icon: 'Wrench',
    title: 'Реконструкция',
    description: 'Модернизация и реставрация существующих зданий'
  },
  {
    icon: 'ClipboardCheck',
    title: 'Проектирование',
    description: 'Полный цикл проектных работ любой сложности'
  }
];

const stats = [
  { value: '15+', label: 'Лет на рынке' },
  { value: '200+', label: 'Завершенных проектов' },
  { value: '50+', label: 'Квалифицированных специалистов' },
  { value: '100%', label: 'Соблюдение сроков' }
];

const Index = () => {
  const [activeFilter, setActiveFilter] = useState<ProjectType>('all');
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.type === activeFilter);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Спасибо за обращение! Мы свяжемся с вами в ближайшее время.');
    setFormData({ name: '', phone: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Building2" className="text-secondary" size={32} />
              <span className="text-2xl font-bold text-primary">ООО СК "ФОКУЗ"</span>
            </div>
            <nav className="hidden md:flex gap-8">
              <a href="#home" className="text-foreground hover:text-secondary transition-colors">Главная</a>
              <a href="#about" className="text-foreground hover:text-secondary transition-colors">О компании</a>
              <a href="#services" className="text-foreground hover:text-secondary transition-colors">Услуги</a>
              <a href="#projects" className="text-foreground hover:text-secondary transition-colors">Проекты</a>
              <a href="#contacts" className="text-foreground hover:text-secondary transition-colors">Контакты</a>
            </nav>
            <Button className="hidden md:flex">
              <Icon name="Phone" size={18} className="mr-2" />
              +7 (495) 123-45-67
            </Button>
          </div>
        </div>
      </header>

      <section id="home" className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-primary via-primary/95 to-secondary/20">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-3xl animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Строим будущее вместе
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Надежный партнер в реализации строительных проектов любой сложности. 
              Качество, проверенное временем.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white">
                Наши проекты
                <Icon name="ArrowRight" size={20} className="ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="bg-white hover:bg-white/90 text-primary border-white">
                Получить консультацию
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">О компании</h2>
            <p className="text-lg text-muted-foreground mb-8">
              ООО СК "ФОКУЗ" — это команда профессионалов с 15-летним опытом работы в строительной отрасли. 
              Мы специализируемся на комплексном строительстве коммерческих и жилых объектов, 
              реконструкции зданий и сооружений.
            </p>
            <p className="text-lg text-muted-foreground">
              Наша миссия — создавать надежные, современные и функциональные здания, 
              которые служат людям десятилетиями. Каждый проект для нас — это вклад в будущее.
            </p>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Наши услуги</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white">
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                    <Icon name={service.icon as any} className="text-secondary" size={28} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">Наши проекты</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Мы гордимся каждым реализованным проектом. Посмотрите на наши работы.
          </p>
          
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <Button
              variant={activeFilter === 'all' ? 'default' : 'outline'}
              onClick={() => setActiveFilter('all')}
              className={activeFilter === 'all' ? 'bg-secondary' : ''}
            >
              Все проекты
            </Button>
            <Button
              variant={activeFilter === 'commercial' ? 'default' : 'outline'}
              onClick={() => setActiveFilter('commercial')}
              className={activeFilter === 'commercial' ? 'bg-secondary' : ''}
            >
              Коммерческие
            </Button>
            <Button
              variant={activeFilter === 'residential' ? 'default' : 'outline'}
              onClick={() => setActiveFilter('residential')}
              className={activeFilter === 'residential' ? 'bg-secondary' : ''}
            >
              Жилые
            </Button>
            <Button
              variant={activeFilter === 'reconstruction' ? 'default' : 'outline'}
              onClick={() => setActiveFilter('reconstruction')}
              className={activeFilter === 'reconstruction' ? 'bg-secondary' : ''}
            >
              Реконструкция
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="relative h-64 overflow-hidden bg-muted">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-accent text-white">
                      {project.type === 'commercial' && 'Коммерческий'}
                      {project.type === 'residential' && 'Жилой'}
                      {project.type === 'reconstruction' && 'Реконструкция'}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Контакты</h2>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-6">Свяжитесь с нами</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Icon name="Phone" className="text-secondary mt-1" size={20} />
                    <div>
                      <p className="font-semibold">Телефон</p>
                      <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Mail" className="text-secondary mt-1" size={20} />
                    <div>
                      <p className="font-semibold">Email</p>
                      <p className="text-muted-foreground">info@stroiproject.ru</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="MapPin" className="text-secondary mt-1" size={20} />
                    <div>
                      <p className="font-semibold">Адрес</p>
                      <p className="text-muted-foreground">г. Москва, ул. Строителей, д. 10</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Clock" className="text-secondary mt-1" size={20} />
                    <div>
                      <p className="font-semibold">Режим работы</p>
                      <p className="text-muted-foreground">Пн-Пт: 9:00 - 18:00</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6">Оставить заявку</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      placeholder="Ваше имя"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Input
                      placeholder="Телефон"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Сообщение"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                    />
                  </div>
                  <Button type="submit" className="w-full bg-secondary hover:bg-secondary/90">
                    Отправить заявку
                    <Icon name="Send" size={18} className="ml-2" />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Icon name="Building2" size={28} />
              <span className="text-xl font-bold">ООО СК "ФОКУЗ"</span>
            </div>
            <p className="text-white/80">© 2024 ООО СК "ФОКУЗ". Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;