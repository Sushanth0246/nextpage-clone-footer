import { Button } from "@/components/ui/button";
import { Play, ArrowRight } from "lucide-react";
import heroImage from "@/assets/sports-hero.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Sports athletes in action" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-purple-900/60 to-primary/70"></div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-secondary/30 rounded-full animate-float"></div>
      <div className="absolute bottom-32 right-16 w-16 h-16 bg-accent/30 rounded-full animate-float delay-700"></div>
      <div className="absolute top-1/3 right-20 w-12 h-12 bg-success/30 rounded-full animate-float delay-1000"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          BUILDING THE
          <span className="block bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
            FUTURE
          </span>
          FOR SPORTS PLAYERS
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
          One stop solution for your sports career. Connect, compete, and collaborate with athletes worldwide.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="hero" size="lg" className="min-w-48">
            Get Started
            <ArrowRight className="ml-2" />
          </Button>
          
          <Button variant="demo" size="lg" className="min-w-48">
            <Play className="mr-2" />
            Watch a Demo
          </Button>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-secondary">10K+</div>
            <div className="text-white/80">Active Athletes</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-accent">500+</div>
            <div className="text-white/80">Competitions</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-success">50+</div>
            <div className="text-white/80">Sports</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;