import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

export default function Index() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Icon name="MessageSquare" size={32} className="text-primary" />
            <h1 className="text-2xl font-bold text-gray-900">TG Analytics</h1>
          </div>
          <div className="flex items-center space-x-4">
            <Badge variant="secondary">Pro Plan</Badge>
            <Button variant="outline" size="sm">
              <Icon name="Settings" size={16} className="mr-2" />
              Настройки
            </Button>
            <Button size="sm">
              <Icon name="User" size={16} className="mr-2" />
              Профиль
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
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
          
          <Card>
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
          
          <Card>
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
          
          <Card>
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
            {/* Channel Analytics */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="TrendingUp" size={20} className="mr-2" />
                  Аналитика каналов
                </CardTitle>
                <CardDescription>
                  Активность и статистика отслеживаемых каналов
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { name: "Tech News RU", posts: 24, views: "156K", engagement: 78, growth: "+12%" },
                    { name: "Marketing Pro", posts: 18, views: "89K", engagement: 65, growth: "+8%" },
                    { name: "Design Daily", posts: 31, views: "234K", engagement: 82, growth: "+15%" },
                    { name: "Startup Insider", posts: 12, views: "67K", engagement: 59, growth: "+5%" }
                  ].map((channel, i) => (
                    <div key={i} className="flex items-center justify-between p-4 border rounded-lg">
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

            {/* Channel Collections */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="Folder" size={20} className="mr-2" />
                  Подборки каналов
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="ready" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="ready">Готовые подборки</TabsTrigger>
                    <TabsTrigger value="custom">Мои группы</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="ready" className="mt-4 space-y-3">
                    {[
                      { name: "IT & Технологии", count: 23, description: "Каналы о разработке, стартапах, новостях IT" },
                      { name: "Маркетинг", count: 18, description: "SMM, реклама, аналитика, тренды" },
                      { name: "Дизайн", count: 15, description: "UI/UX, графический дизайн, вдохновение" },
                      { name: "Бизнес", count: 31, description: "Предпринимательство, инвестиции, финансы" }
                    ].map((collection, i) => (
                      <div key={i} className="p-4 border rounded-lg hover:bg-gray-50 cursor-pointer">
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="font-medium">{collection.name}</h3>
                            <p className="text-sm text-muted-foreground">{collection.description}</p>
                          </div>
                          <div className="text-right">
                            <Badge variant="outline">{collection.count} каналов</Badge>
                          </div>
                        </div>
                      </div>
                    ))}
                  </TabsContent>
                  
                  <TabsContent value="custom" className="mt-4 space-y-3">
                    <Button variant="outline" className="w-full h-16 border-dashed">
                      <Icon name="Plus" size={20} className="mr-2" />
                      Создать новую группу каналов
                    </Button>
                    
                    {[
                      { name: "Конкуренты", count: 12, color: "bg-red-100 text-red-800" },
                      { name: "Вдохновение", count: 8, color: "bg-blue-100 text-blue-800" }
                    ].map((group, i) => (
                      <div key={i} className="p-4 border rounded-lg">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className={`w-3 h-3 rounded-full ${group.color.split(' ')[0]}`}></div>
                            <h3 className="font-medium">{group.name}</h3>
                          </div>
                          <Badge variant="outline">{group.count} каналов</Badge>
                        </div>
                      </div>
                    ))}
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>

          {/* AI Assistant & Profile */}
          <div className="space-y-6">
            {/* AI Content Suggestions */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="Bot" size={20} className="mr-2" />
                  ИИ помощник
                </CardTitle>
                <CardDescription>
                  Предложения контента на основе анализа
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  {[
                    "Тренд: посты о новых ИИ инструментах набирают +45% просмотров",
                    "Рекомендуем: видео-формат показывает лучшую вовлеченность",
                    "Оптимальное время публикации: 09:00-11:00, 18:00-20:00"
                  ].map((suggestion, i) => (
                    <div key={i} className="p-3 bg-blue-50 border border-blue-200 rounded-lg text-sm">
                      <Icon name="Lightbulb" size={16} className="inline mr-2 text-blue-600" />
                      {suggestion}
                    </div>
                  ))}
                </div>
                
                <div className="border-t pt-4">
                  <h4 className="font-medium mb-2">Запросить план контента</h4>
                  <Textarea 
                    placeholder="Опишите вашу тематику или задачу..."
                    className="mb-3"
                    rows={3}
                  />
                  <Button className="w-full">
                    <Icon name="Send" size={16} className="mr-2" />
                    Создать план
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Subscription Info */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="CreditCard" size={20} className="mr-2" />
                  Подписка
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Текущий план</span>
                  <Badge>Pro</Badge>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Использовано каналов</span>
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
                
                <Button variant="outline" className="w-full">
                  <Icon name="Zap" size={16} className="mr-2" />
                  Улучшить план
                </Button>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="Zap" size={20} className="mr-2" />
                  Быстрые действия
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <Icon name="Plus" size={16} className="mr-2" />
                  Добавить канал
                </Button>
                
                <Button variant="outline" className="w-full justify-start">
                  <Icon name="Download" size={16} className="mr-2" />
                  Экспорт данных
                </Button>
                
                <Button variant="outline" className="w-full justify-start">
                  <Icon name="FileText" size={16} className="mr-2" />
                  Создать отчет
                </Button>
                
                <Button variant="outline" className="w-full justify-start">
                  <Icon name="Bell" size={16} className="mr-2" />
                  Настроить уведомления
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}