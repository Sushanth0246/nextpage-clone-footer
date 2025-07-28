import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Users, Calendar, MessageSquare, Star, Target } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Trophy,
      title: "Highlights & Achievements",
      description: "Showcase your best moments and track your progress with our comprehensive achievement system.",
      badge: "Popular",
      color: "text-secondary"
    },
    {
      icon: Calendar,
      title: "Upcoming Competitions",
      description: "Discover and participate in competitions without cost. Never miss an opportunity to compete.",
      badge: "Free",
      color: "text-success"
    },
    {
      icon: Users,
      title: "Player Collaboration",
      description: "Connect and collaborate with athletes from around the world. Build your network.",
      badge: "New",
      color: "text-accent"
    },
    {
      icon: MessageSquare,
      title: "AI Sports Chatbot",
      description: "Get specialized guidance and tips from our AI chatbot designed specifically for sports.",
      badge: "AI Powered",
      color: "text-primary"
    },
    {
      icon: Star,
      title: "Performance Analytics",
      description: "Track your performance with detailed analytics and insights to improve your game.",
      badge: "Pro",
      color: "text-secondary"
    },
    {
      icon: Target,
      title: "Goal Setting",
      description: "Set and achieve your sports goals with our structured goal-setting framework.",
      badge: "Essential",
      color: "text-success"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-card">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Main <span className="text-primary">Features</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to take your sports career to the next level
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-sports transition-all duration-300 hover:-translate-y-2 border-0 bg-background/60 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-full bg-primary/10 ${feature.color} group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;