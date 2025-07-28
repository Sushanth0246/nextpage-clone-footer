import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, UserPlus, Star, MapPin } from "lucide-react";

const Collaboration = () => {
  const athletes = [
    {
      name: "Alex Johnson",
      sport: "Basketball",
      level: "Professional",
      location: "New York, USA",
      rating: 4.9,
      specialty: "Point Guard",
      avatar: "/placeholder.svg",
      status: "Online"
    },
    {
      name: "Maria Rodriguez",
      sport: "Tennis",
      level: "Semi-Pro",
      location: "Madrid, Spain",
      rating: 4.8,
      specialty: "Singles",
      avatar: "/placeholder.svg",
      status: "Training"
    },
    {
      name: "David Kim",
      sport: "Swimming",
      level: "Elite",
      location: "Seoul, Korea",
      rating: 5.0,
      specialty: "Freestyle",
      avatar: "/placeholder.svg",
      status: "Competing"
    },
    {
      name: "Sarah Wilson",
      sport: "Track & Field",
      level: "Professional",
      location: "London, UK",
      rating: 4.7,
      specialty: "Sprints",
      avatar: "/placeholder.svg",
      status: "Online"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Online": return "bg-success";
      case "Training": return "bg-secondary";
      case "Competing": return "bg-primary";
      default: return "bg-muted";
    }
  };

  return (
    <section className="py-20 px-4 bg-gradient-card">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Player <span className="text-primary">Collaboration</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Connect with athletes worldwide and build your professional network
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {athletes.map((athlete, index) => (
            <Card key={index} className="group hover:shadow-sports transition-all duration-300 hover:-translate-y-2 bg-background/80 backdrop-blur-sm">
              <CardHeader className="text-center pb-2">
                <div className="relative mx-auto mb-4">
                  <Avatar className="w-20 h-20 border-4 border-primary/20 group-hover:border-primary/40 transition-colors">
                    <AvatarImage src={athlete.avatar} alt={athlete.name} />
                    <AvatarFallback className="text-lg font-semibold bg-primary/10">
                      {athlete.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div className={`absolute -bottom-1 -right-1 w-6 h-6 rounded-full ${getStatusColor(athlete.status)} border-2 border-background`}></div>
                </div>
                
                <CardTitle className="text-lg group-hover:text-primary transition-colors">
                  {athlete.name}
                </CardTitle>
                
                <div className="flex items-center justify-center gap-1 text-sm">
                  <Star className="w-4 h-4 fill-secondary text-secondary" />
                  <span className="font-semibold">{athlete.rating}</span>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-3">
                <div className="flex justify-between items-center">
                  <Badge variant="outline" className="text-xs">
                    {athlete.sport}
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    {athlete.level}
                  </Badge>
                </div>
                
                <div className="text-sm text-muted-foreground">
                  <div className="flex items-center gap-1 mb-1">
                    <MapPin className="w-3 h-3" />
                    {athlete.location}
                  </div>
                  <div className="font-medium text-foreground">
                    {athlete.specialty}
                  </div>
                </div>
                
                <div className="flex gap-2 pt-2">
                  <Button variant="default" size="sm" className="flex-1">
                    <UserPlus className="w-3 h-3 mr-1" />
                    Connect
                  </Button>
                  <Button variant="outline" size="sm" className="px-3">
                    <MessageCircle className="w-3 h-3" />
                  </Button>
                </div>
                
                <div className="text-xs text-center text-muted-foreground">
                  Status: <span className="font-medium">{athlete.status}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Explore More Athletes
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Collaboration;