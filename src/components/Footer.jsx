import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-primary/90 to-purple-900/90 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
            Sports Career Platform
          </h3>
          <p className="text-lg text-white/90 italic max-w-2xl mx-auto">
            "Success is where preparation and opportunity meet. Your sports journey starts here."
          </p>
        </div>
        
        <div className="border-t border-white/20 pt-8">
          <p className="flex items-center justify-center gap-2 text-white/80">
            Made with <Heart className="w-4 h-4 text-red-400" /> for athletes worldwide
          </p>
          <p className="text-sm text-white/60 mt-2">
            © 2024 Sports Career Platform. Empowering athletes to reach their full potential.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;