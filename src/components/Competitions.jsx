import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users, Clock } from "lucide-react";

const Competitions = () => {
  const competitions = [
    {
      title: "Summer Basketball League",
      date: "March 15 - April 20",
      location: "Sports Complex Arena",
      participants: "156 teams",
      status: "Open",
      statusColor: "bg-success",
      prize: "$5,000",
      category: "Basketball"
    },
    {
      title: "Marathon Championship",
      date: "April 5, 2025",
      location: "City Center",
      participants: "2,300 runners",
      status: "Filling Fast",
      statusColor: "bg-secondary",
      prize: "$10,000",
      category: "Running"
    },
    {
      title: "Tennis Open Tournament",
      date: "May 10 - May 15",
      location: "Grand Tennis Club",
      participants: "64 players",
      status: "Open",
      statusColor: "bg-success",
      prize: "$7,500",
      category: "Tennis"
    },
    {
      title: "Swimming Championships",
      date: "June 1 - June 3",
      location: "Aquatic Center",
      participants: "240 swimmers",
      status: "Coming Soon",
      statusColor: "bg-muted",
      prize: "$15,000",
      category: "Swimming"
    }
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Upcoming <span className="text-primary">Competitions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join competitions without cost and compete with athletes at your level
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {competitions.map((competition, index) => (
            <Card key={index} className="group hover:shadow-sports transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-primary">
              <CardHeader>
                <div className="flex justify-between items-start mb-4">
                  <Badge variant="outline" className="text-xs">
                    {competition.category}
                  </Badge>
                  <Badge 
                    className={`text-white text-xs ${competition.statusColor}`}
                  >
                    {competition.status}
                  </Badge>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {competition.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-primary" />
                    {competition.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-primary" />
                    {competition.location}
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-primary" />
                    {competition.participants}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-primary" />
                    Prize: {competition.prize}
                  </div>
                </div>
                
                <div className="flex gap-3 pt-4">
                  <Button variant="default" size="sm" className="flex-1">
                    Register Now
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All Competitions
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Competitions;