import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState } from "react";

type ViewType = 'dashboard' | 'channels' | 'collections' | 'ai' | 'profile' | 'settings' | 'pricing';

export default function Index() {
  const [activeView, setActiveView] = useState<ViewType>('dashboard');
  const [selectedChannel, setSelectedChannel] = useState<string | null>(null);
  const [isAddingChannel, setIsAddingChannel] = useState(false);

  const renderDashboard = () => (
    <div className="space-y-6">
      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="cursor-pointer hover:shadow-md transition-shadow" onClick={() => setActiveView('channels')}>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Каналов отслеживается</p>
                <p className="text-2xl font-bold">47</p>
              </div>
              <Icon name="Eye" size={24} className="text-primary" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="cursor-pointer hover:shadow-md transition-shadow" onClick={() => setActiveView('channels')}>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Постов проанализировано</p>
                <p className="text-2xl font-bold">2,347</p>
              </div>
              <Icon name="BarChart3" size={24} className="text-primary" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="cursor-pointer hover:shadow-md transition-shadow" onClick={() => setActiveView('ai')}>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">ИИ предложений</p>
                <p className="text-2xl font-bold">89</p>
              </div>
              <Icon name="Sparkles" size={24} className="text-primary" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="cursor-pointer hover:shadow-md transition-shadow" onClick={() => setActiveView('profile')}>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Дней до окончания</p>
                <p className="text-2xl font-bold">23</p>
              </div>
              <Icon name="Calendar" size={24} className="text-primary" />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Analytics */}
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center">
                  <Icon name="TrendingUp" size={20} className="mr-2" />
                  Аналитика каналов
                </div>
                <Button variant="outline" size="sm" onClick={() => setActiveView('channels')}>
                  Подробнее
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { name: "Tech News RU", posts: 24, views: "156K", engagement: 78, growth: "+12%" },
                  { name: "Marketing Pro", posts: 18, views: "89K", engagement: 65, growth: "+8%" },
                  { name: "Design Daily", posts: 31, views: "234K", engagement: 82, growth: "+15%" }
                ].map((channel, i) => (
                  <div key={i} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 cursor-pointer" onClick={() => setSelectedChannel(channel.name)}>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-medium">{channel.name}</h3>
                        <Badge variant={channel.growth.startsWith('+') ? "default" : "secondary"}>
                          {channel.growth}
                        </Badge>
                      </div>
                      <div className="grid grid-cols-3 gap-4 text-sm text-muted-foreground">
                        <span>Постов: {channel.posts}</span>
                        <span>Просмотры: {channel.views}</span>
                        <span>Вовлеченность:</span>
                      </div>
                      <Progress value={channel.engagement} className="mt-2 h-2" />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center">
                  <Icon name="Folder" size={20} className="mr-2" />
                  Подборки каналов
                </div>
                <Button variant="outline" size="sm" onClick={() => setActiveView('collections')}>
                  Все подборки
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[
                  { name: "IT & Технологии", count: 23, description: "Каналы о разработке, стартапах" },
                  { name: "Маркетинг", count: 18, description: "SMM, реклама, аналитика" }
                ].map((collection, i) => (
                  <div key={i} className="p-4 border rounded-lg hover:bg-gray-50 cursor-pointer" onClick={() => setActiveView('collections')}>
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">{collection.name}</h3>
                        <p className="text-sm text-muted-foreground">{collection.description}</p>
                      </div>
                      <Badge variant="outline">{collection.count} каналов</Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center">
                  <Icon name="Bot" size={20} className="mr-2" />
                  ИИ помощник
                </div>
                <Button variant="outline" size="sm" onClick={() => setActiveView('ai')}>
                  Открыть
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                {[
                  "Тренд: посты о новых ИИ инструментах набирают +45% просмотров",
                  "Рекомендуем: видео-формат показывает лучшую вовлеченность"
                ].map((suggestion, i) => (
                  <div key={i} className="p-3 bg-blue-50 border border-blue-200 rounded-lg text-sm">
                    <Icon name="Lightbulb" size={16} className="inline mr-2 text-blue-600" />
                    {suggestion}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Icon name="Zap" size={20} className="mr-2" />
                Быстрые действия
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="outline" className="w-full justify-start" onClick={() => setIsAddingChannel(true)}>
                <Icon name="Plus" size={16} className="mr-2" />
                Добавить канал
              </Button>
              
              <Button variant="outline" className="w-full justify-start" onClick={() => setActiveView('channels')}>
                <Icon name="Download" size={16} className="mr-2" />
                Экспорт данных
              </Button>
              
              <Button variant="outline" className="w-full justify-start" onClick={() => setActiveView('settings')}>
                <Icon name="Settings" size={16} className="mr-2" />
                Настройки
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );

  const renderChannels = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Аналитика каналов</h2>
          <p className="text-muted-foreground">Детальная статистика по всем отслеживаемым каналам</p>
        </div>
        <div className="flex space-x-3">
          <Button variant="outline" onClick={() => setIsAddingChannel(true)}>
            <Icon name="Plus" size={16} className="mr-2" />
            Добавить канал
          </Button>
          <Button variant="outline">
            <Icon name="Download" size={16} className="mr-2" />
            Экспорт
          </Button>
        </div>
      </div>

      <div className="grid gap-4">
        {[
          { name: "Tech News RU", posts: 24, views: "156K", engagement: 78, growth: "+12%", subs: "45.2K" },
          { name: "Marketing Pro", posts: 18, views: "89K", engagement: 65, growth: "+8%", subs: "32.1K" },
          { name: "Design Daily", posts: 31, views: "234K", engagement: 82, growth: "+15%", subs: "67.8K" },
          { name: "Startup Insider", posts: 12, views: "67K", engagement: 59, growth: "+5%", subs: "28.9K" },
          { name: "Business Today", posts: 19, views: "123K", engagement: 71, growth: "+9%", subs: "41.3K" }
        ].map((channel, i) => (
          <Card key={i} className="hover:shadow-md transition-shadow cursor-pointer" onClick={() => setSelectedChannel(channel.name)}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon name="MessageSquare" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{channel.name}</h3>
                    <p className="text-sm text-muted-foreground">{channel.subs} подписчиков</p>
                  </div>
                </div>
                <Badge variant={channel.growth.startsWith('+') ? "default" : "secondary"}>
                  {channel.growth}
                </Badge>
              </div>
              
              <div className="grid grid-cols-4 gap-4 mb-4">
                <div>
                  <p className="text-sm text-muted-foreground">Постов</p>
                  <p className="text-lg font-semibold">{channel.posts}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Просмотры</p>
                  <p className="text-lg font-semibold">{channel.views}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Вовлеченность</p>
                  <p className="text-lg font-semibold">{channel.engagement}%</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Рост</p>
                  <p className="text-lg font-semibold text-green-600">{channel.growth}</p>
                </div>
              </div>
              
              <Progress value={channel.engagement} className="h-2" />
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  const renderCollections = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Подборки каналов</h2>
          <p className="text-muted-foreground">Готовые подборки и ваши кастомные группы</p>
        </div>
        <Button onClick={() => alert('Создание новой группы')}>
          <Icon name="Plus" size={16} className="mr-2" />
          Создать группу
        </Button>
      </div>

      <Tabs defaultValue="ready" className="w-full">
        <TabsList>
          <TabsTrigger value="ready">Готовые подборки</TabsTrigger>
          <TabsTrigger value="custom">Мои группы</TabsTrigger>
        </TabsList>
        
        <TabsContent value="ready" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { name: "IT & Технологии", count: 23, description: "Каналы о разработке, стартапах, новостях IT", color: "bg-blue-500" },
              { name: "Маркетинг", count: 18, description: "SMM, реклама, аналитика, тренды", color: "bg-green-500" },
              { name: "Дизайн", count: 15, description: "UI/UX, графический дизайн, вдохновение", color: "bg-purple-500" },
              { name: "Бизнес", count: 31, description: "Предпринимательство, инвестиции, финансы", color: "bg-orange-500" },
              { name: "Образование", count: 12, description: "Онлайн-курсы, обучение, развитие", color: "bg-red-500" },
              { name: "Новости", count: 27, description: "Актуальные новости и события", color: "bg-yellow-500" }
            ].map((collection, i) => (
              <Card key={i} className="hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className={`w-4 h-4 rounded ${collection.color}`}></div>
                    <h3 className="font-semibold">{collection.name}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">{collection.description}</p>
                  <div className="flex items-center justify-between">
                    <Badge variant="outline">{collection.count} каналов</Badge>
                    <Button variant="outline" size="sm">
                      Подключить
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="custom" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card className="border-dashed hover:shadow-md transition-shadow cursor-pointer h-48 flex items-center justify-center">
              <div className="text-center">
                <Icon name="Plus" size={32} className="text-muted-foreground mx-auto mb-2" />
                <p className="text-muted-foreground">Создать новую группу</p>
              </div>
            </Card>
            
            {[
              { name: "Конкуренты", count: 12, color: "bg-red-500" },
              { name: "Вдохновение", count: 8, color: "bg-blue-500" },
              { name: "Партнеры", count: 5, color: "bg-green-500" }
            ].map((group, i) => (
              <Card key={i} className="hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className={`w-4 h-4 rounded ${group.color}`}></div>
                    <h3 className="font-semibold">{group.name}</h3>
                  </div>
                  <div className="flex items-center justify-between">
                    <Badge variant="outline">{group.count} каналов</Badge>
                    <Button variant="outline" size="sm">
                      Редактировать
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );

  const renderAI = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">ИИ помощник</h2>
        <p className="text-muted-foreground">Получайте персональные рекомендации для контент-стратегии</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Чат с ИИ</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 mb-4 h-96 overflow-y-auto">
                <div className="flex justify-start">
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 max-w-sm">
                    <div className="flex items-start space-x-2">
                      <Icon name="Bot" size={16} className="text-blue-600 mt-0.5" />
                      <p className="text-sm">Привет! Я проанализировал ваши каналы. Готов дать рекомендации по контент-стратегии. О чем хотите поговорить?</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-end">
                  <div className="bg-primary text-primary-foreground rounded-lg p-3 max-w-sm">
                    <p className="text-sm">Какие темы сейчас в тренде в IT сфере?</p>
                  </div>
                </div>
                
                <div className="flex justify-start">
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 max-w-sm">
                    <div className="flex items-start space-x-2">
                      <Icon name="Bot" size={16} className="text-blue-600 mt-0.5" />
                      <div className="text-sm">
                        <p className="mb-2">По анализу ваших каналов, сейчас популярны:</p>
                        <ul className="list-disc list-inside space-y-1">
                          <li>ИИ инструменты (+45% просмотров)</li>
                          <li>No-code платформы (+32%)</li>
                          <li>Кибербезопасность (+28%)</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex space-x-2">
                <Textarea 
                  placeholder="Задайте вопрос ИИ помощнику..."
                  className="flex-1"
                  rows={2}
                />
                <Button>
                  <Icon name="Send" size={16} />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Тренды недели</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {[
                { topic: "ИИ инструменты", growth: "+45%", color: "text-green-600" },
                { topic: "No-code", growth: "+32%", color: "text-green-600" },
                { topic: "Стартапы", growth: "+18%", color: "text-green-600" },
                { topic: "Криптовалюты", growth: "-12%", color: "text-red-600" }
              ].map((trend, i) => (
                <div key={i} className="flex items-center justify-between">
                  <span className="text-sm">{trend.topic}</span>
                  <Badge variant="outline" className={trend.color}>
                    {trend.growth}
                  </Badge>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Готовые шаблоны</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {[
                "План контента на неделю",
                "Анализ конкурентов",
                "Идеи для постов",
                "Время публикаций"
              ].map((template, i) => (
                <Button key={i} variant="outline" className="w-full justify-start text-sm h-8">
                  {template}
                </Button>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );

  const renderProfile = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">Личный кабинет</h2>
        <p className="text-muted-foreground">Управление аккаунтом и подпиской</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Информация о профиле</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium">Имя</label>
                  <Input defaultValue="Алексей" />
                </div>
                <div>
                  <label className="text-sm font-medium">Email</label>
                  <Input defaultValue="alex@example.com" />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium">Компания</label>
                <Input defaultValue="Digital Agency" />
              </div>
              <Button>Сохранить изменения</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Уведомления</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { label: "Еженедельные отчеты", checked: true },
                { label: "Уведомления о трендах", checked: true },
                { label: "Превышение лимитов", checked: false },
                { label: "Новые функции", checked: true }
              ].map((setting, i) => (
                <div key={i} className="flex items-center justify-between">
                  <span>{setting.label}</span>
                  <input type="checkbox" defaultChecked={setting.checked} className="rounded" />
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Icon name="CreditCard" size={20} className="mr-2" />
                Подписка Pro
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center">
                <p className="text-2xl font-bold">$29</p>
                <p className="text-sm text-muted-foreground">в месяц</p>
              </div>
              
              <div className="space-y-3">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Каналы</span>
                    <span>47 / 100</span>
                  </div>
                  <Progress value={47} className="h-2" />
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>ИИ запросы</span>
                    <span>234 / 1000</span>
                  </div>
                  <Progress value={23.4} className="h-2" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Button variant="outline" className="w-full" onClick={() => setActiveView('pricing')}>
                  <Icon name="Zap" size={16} className="mr-2" />
                  Улучшить план
                </Button>
                <Button variant="outline" className="w-full">
                  <Icon name="Download" size={16} className="mr-2" />
                  Скачать чек
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Статистика использования</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm">Дата регистрации</span>
                <span className="text-sm">15.08.2024</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Последний визит</span>
                <span className="text-sm">Сегодня</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Общее время</span>
                <span className="text-sm">47 часов</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );

  const renderSettings = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">Настройки</h2>
        <p className="text-muted-foreground">Персонализация и конфигурация приложения</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Общие настройки</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Язык интерфейса</label>
              <select className="w-full p-2 border rounded">
                <option>Русский</option>
                <option>English</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Часовой пояс</label>
              <select className="w-full p-2 border rounded">
                <option>MSK (UTC+3)</option>
                <option>UTC</option>
              </select>
            </div>
            <div className="flex items-center justify-between">
              <span>Темная тема</span>
              <input type="checkbox" className="rounded" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Настройки анализа</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Частота обновления данных</label>
              <select className="w-full p-2 border rounded">
                <option>Каждый час</option>
                <option>Каждые 6 часов</option>
                <option>Ежедневно</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Глубина анализа (дней)</label>
              <Input type="number" defaultValue="30" />
            </div>
            <div className="flex items-center justify-between">
              <span>Автообновление графиков</span>
              <input type="checkbox" defaultChecked className="rounded" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>API и интеграции</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">API ключ</label>
              <div className="flex space-x-2">
                <Input value="tg_api_****" readOnly />
                <Button variant="outline" size="sm">Копировать</Button>
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-medium">Подключенные интеграции</p>
              <div className="space-y-2">
                <div className="flex items-center justify-between p-2 border rounded">
                  <span className="text-sm">Telegram Bot API</span>
                  <Badge>Активна</Badge>
                </div>
                <div className="flex items-center justify-between p-2 border rounded">
                  <span className="text-sm">Webhook уведомления</span>
                  <Badge variant="outline">Не настроена</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Безопасность</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button variant="outline" className="w-full">
              Изменить пароль
            </Button>
            <Button variant="outline" className="w-full">
              Настроить 2FA
            </Button>
            <Button variant="destructive" className="w-full">
              Удалить аккаунт
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  const renderPricing = () => (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold">Выберите план</h2>
        <p className="text-muted-foreground">Расширьте возможности анализа каналов</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            name: "Starter",
            price: "$9",
            period: "месяц",
            channels: "10",
            requests: "100",
            features: ["Базовая аналитика", "5 ИИ запросов", "Экспорт CSV"]
          },
          {
            name: "Pro",
            price: "$29",
            period: "месяц",
            channels: "100",
            requests: "1000",
            features: ["Продвинутая аналитика", "Безлимит ИИ", "API доступ", "Приоритетная поддержка"],
            popular: true
          },
          {
            name: "Enterprise",
            price: "$99",
            period: "месяц",
            channels: "Безлимит",
            requests: "Безлимит",
            features: ["Корпоративные функции", "Кастомные интеграции", "Персональный менеджер"]
          }
        ].map((plan, i) => (
          <Card key={i} className={`${plan.popular ? 'border-primary shadow-lg scale-105' : ''} hover:shadow-md transition-all`}>
            {plan.popular && (
              <div className="bg-primary text-primary-foreground text-center py-2 text-sm font-medium">
                Популярный выбор
              </div>
            )}
            <CardContent className="p-6">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold">{plan.name}</h3>
                <div className="mt-2">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">/{plan.period}</span>
                </div>
              </div>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span>Каналов</span>
                  <span className="font-semibold">{plan.channels}</span>
                </div>
                <div className="flex justify-between">
                  <span>ИИ запросов</span>
                  <span className="font-semibold">{plan.requests}</span>
                </div>
              </div>

              <ul className="space-y-2 mb-6">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-center text-sm">
                    <Icon name="Check" size={16} className="text-green-500 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button 
                className={`w-full ${plan.popular ? '' : 'variant-outline'}`}
                variant={plan.popular ? 'default' : 'outline'}
              >
                {plan.name === 'Pro' ? 'Текущий план' : 'Выбрать план'}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  if (isAddingChannel) {
    return (
      <div className="min-h-screen bg-gray-50">
        <header className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Button variant="ghost" size="sm" onClick={() => setIsAddingChannel(false)}>
                <Icon name="ArrowLeft" size={16} className="mr-2" />
                Назад
              </Button>
              <h1 className="text-2xl font-bold text-gray-900">Добавить канал</h1>
            </div>
          </div>
        </header>

        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Card>
            <CardHeader>
              <CardTitle>Новый канал для отслеживания</CardTitle>
              <CardDescription>Добавьте Telegram канал для анализа</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium">Ссылка на канал или username</label>
                <Input placeholder="@channel_name или https://t.me/channel_name" />
              </div>
              <div>
                <label className="text-sm font-medium">Название (опционально)</label>
                <Input placeholder="Красивое название канала" />
              </div>
              <div>
                <label className="text-sm font-medium">Категория</label>
                <select className="w-full p-2 border rounded">
                  <option>IT & Технологии</option>
                  <option>Маркетинг</option>
                  <option>Дизайн</option>
                  <option>Бизнес</option>
                  <option>Другое</option>
                </select>
              </div>
              <div className="flex space-x-3">
                <Button className="flex-1" onClick={() => {
                  alert('Канал добавлен!');
                  setIsAddingChannel(false);
                }}>
                  <Icon name="Plus" size={16} className="mr-2" />
                  Добавить канал
                </Button>
                <Button variant="outline" onClick={() => setIsAddingChannel(false)}>
                  Отмена
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  if (selectedChannel) {
    return (
      <div className="min-h-screen bg-gray-50">
        <header className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Button variant="ghost" size="sm" onClick={() => setSelectedChannel(null)}>
                <Icon name="ArrowLeft" size={16} className="mr-2" />
                Назад
              </Button>
              <h1 className="text-2xl font-bold text-gray-900">{selectedChannel}</h1>
            </div>
            <div className="flex items-center space-x-3">
              <Button variant="outline" size="sm">
                <Icon name="Settings" size={16} className="mr-2" />
                Настройки
              </Button>
              <Button variant="outline" size="sm">
                <Icon name="Download" size={16} className="mr-2" />
                Экспорт
              </Button>
            </div>
          </div>
        </header>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <Card>
              <CardContent className="p-6">
                <div className="text-center">
                  <p className="text-sm text-muted-foreground">Подписчики</p>
                  <p className="text-2xl font-bold">45.2K</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="text-center">
                  <p className="text-sm text-muted-foreground">Постов за месяц</p>
                  <p className="text-2xl font-bold">24</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="text-center">
                  <p className="text-sm text-muted-foreground">Ср. просмотры</p>
                  <p className="text-2xl font-bold">6.5K</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="text-center">
                  <p className="text-sm text-muted-foreground">Вовлеченность</p>
                  <p className="text-2xl font-bold">78%</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Последние посты</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { text: "Новые возможности React 19", views: "8.2K", reactions: 142, time: "2 часа назад" },
                  { text: "Сравнение фреймворков для фронтенда", views: "12.1K", reactions: 203, time: "6 часов назад" },
                  { text: "TypeScript 5.3: что нового?", views: "15.7K", reactions: 284, time: "1 день назад" }
                ].map((post, i) => (
                  <div key={i} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex-1">
                      <h4 className="font-medium">{post.text}</h4>
                      <p className="text-sm text-muted-foreground">{post.time}</p>
                    </div>
                    <div className="text-right space-y-1">
                      <p className="text-sm font-medium">{post.views} просмотров</p>
                      <p className="text-sm text-muted-foreground">{post.reactions} реакций</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with Navigation */}
      <header className="bg-white border-b sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-3">
              <Icon name="MessageSquare" size={32} className="text-primary" />
              <h1 className="text-2xl font-bold text-gray-900 cursor-pointer" onClick={() => setActiveView('dashboard')}>TG Analytics</h1>
            </div>
            
            <nav className="hidden md:flex space-x-1">
              {[
                { key: 'dashboard', label: 'Дашборд', icon: 'Home' },
                { key: 'channels', label: 'Каналы', icon: 'BarChart3' },
                { key: 'collections', label: 'Подборки', icon: 'Folder' },
                { key: 'ai', label: 'ИИ помощник', icon: 'Bot' }
              ].map((item) => (
                <Button
                  key={item.key}
                  variant={activeView === item.key ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setActiveView(item.key as ViewType)}
                  className="flex items-center"
                >
                  <Icon name={item.icon as any} size={16} className="mr-2" />
                  {item.label}
                </Button>
              ))}
            </nav>
          </div>
          
          <div className="flex items-center space-x-4">
            <Badge variant="secondary">Pro Plan</Badge>
            <Button variant="outline" size="sm" onClick={() => setActiveView('settings')}>
              <Icon name="Settings" size={16} className="mr-2" />
              Настройки
            </Button>
            <Button size="sm" onClick={() => setActiveView('profile')}>
              <Icon name="User" size={16} className="mr-2" />
              Профиль
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      <div className="md:hidden bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-2">
          <div className="flex space-x-1 overflow-x-auto">
            {[
              { key: 'dashboard', label: 'Дашборд', icon: 'Home' },
              { key: 'channels', label: 'Каналы', icon: 'BarChart3' },
              { key: 'collections', label: 'Подборки', icon: 'Folder' },
              { key: 'ai', label: 'ИИ', icon: 'Bot' }
            ].map((item) => (
              <Button
                key={item.key}
                variant={activeView === item.key ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setActiveView(item.key as ViewType)}
                className="flex flex-col h-12 px-3 whitespace-nowrap"
              >
                <Icon name={item.icon as any} size={16} />
                <span className="text-xs">{item.label}</span>
              </Button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {activeView === 'dashboard' && renderDashboard()}
        {activeView === 'channels' && renderChannels()}
        {activeView === 'collections' && renderCollections()}
        {activeView === 'ai' && renderAI()}
        {activeView === 'profile' && renderProfile()}
        {activeView === 'settings' && renderSettings()}
        {activeView === 'pricing' && renderPricing()}
      </div>
    </div>
  );
}