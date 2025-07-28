import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Bot, MessageSquare, Zap, Brain, Target, TrendingUp } from "lucide-react";

const ChatbotSection = () => {
  const features = [
    {
      icon: Brain,
      title: "Smart Training Tips",
      description: "Get personalized training advice based on your sport and skill level"
    },
    {
      icon: Target,
      title: "Goal Tracking",
      description: "Set and monitor your athletic goals with AI-powered insights"
    },
    {
      icon: TrendingUp,
      title: "Performance Analysis",
      description: "Analyze your performance data and get improvement suggestions"
    },
    {
      icon: Zap,
      title: "Instant Answers",
      description: "Get immediate responses to your sports-related questions 24/7"
    }
  ];

  const chatMessages = [
    {
      type: "user",
      message: "How can I improve my basketball shooting accuracy?",
      time: "2:34 PM"
    },
    {
      type: "bot",
      message: "Great question! Here are 3 key techniques to improve your shooting accuracy: 1. Focus on your follow-through - your wrist should snap down after release. 2. Practice proper foot positioning with your shooting foot slightly ahead. 3. Use consistent shooting rhythm. Would you like me to create a practice routine for you?",
      time: "2:34 PM"
    },
    {
      type: "user",
      message: "Yes, that would be helpful!",
      time: "2:35 PM"
    },
    {
      type: "bot",
      message: "Perfect! I've created a 30-minute shooting practice routine customized for your skill level. It includes warm-up drills, form practice, and game-situation shots. Check your training dashboard for the full plan!",
      time: "2:35 PM"
    }
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            AI Sports <span className="text-primary">Chatbot</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get specialized guidance and tips from our AI chatbot designed specifically for sports
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Chat Interface */}
          <Card className="bg-gradient-card border-2 border-primary/20 shadow-sports">
            <CardHeader className="bg-primary text-primary-foreground rounded-t-lg">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white/20 rounded-full">
                  <Bot className="w-6 h-6" />
                </div>
                <div>
                  <CardTitle className="text-xl">Sports AI Assistant</CardTitle>
                  <div className="flex items-center gap-2 text-sm text-primary-foreground/80">
                    <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                    Online & Ready to Help
                  </div>
                </div>
                <Badge variant="secondary" className="ml-auto">
                  AI Powered
                </Badge>
              </div>
            </CardHeader>
            
            <CardContent className="p-0">
              <div className="h-96 overflow-y-auto p-4 space-y-4">
                {chatMessages.map((msg, index) => (
                  <div key={index} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                      msg.type === 'user' 
                        ? 'bg-primary text-primary-foreground rounded-br-none' 
                        : 'bg-muted text-muted-foreground rounded-bl-none'
                    }`}>
                      <p className="text-sm">{msg.message}</p>
                      <p className="text-xs opacity-70 mt-1">{msg.time}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="p-4 border-t border-border">
                <div className="flex gap-2">
                  <div className="flex-1 bg-muted rounded-lg px-3 py-2 text-sm text-muted-foreground">
                    Ask me anything about sports...
                  </div>
                  <Button size="sm">
                    <MessageSquare className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Features */}
          <div className="space-y-6">
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4">What Our AI Can Do</h3>
              <p className="text-muted-foreground">
                Our specialized sports AI assistant is trained on years of athletic knowledge 
                and can help you with training, technique, nutrition, and career guidance.
              </p>
            </div>
            
            <div className="grid gap-4">
              {features.map((feature, index) => (
                <Card key={index} className="group hover:shadow-md transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-primary/50 hover:border-l-primary">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-primary/10 rounded-lg text-primary group-hover:scale-110 transition-transform duration-300">
                        <feature.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1 group-hover:text-primary transition-colors">
                          {feature.title}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <Button variant="hero" size="lg" className="w-full mt-6">
              Start Chatting with AI
              <Bot className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatbotSection;