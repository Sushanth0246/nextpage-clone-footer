import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube, 
  Mail, 
  Phone, 
  MapPin,
  Heart
} from "lucide-react";

const Footer = () => {
  const footerLinks = {
    platform: [
      { name: "Features", href: "#features" },
      { name: "Competitions", href: "#competitions" },
      { name: "Athletes", href: "#athletes" },
      { name: "AI Assistant", href: "#ai" },
    ],
    sports: [
      { name: "Basketball", href: "#" },
      { name: "Football", href: "#" },
      { name: "Tennis", href: "#" },
      { name: "Swimming", href: "#" },
      { name: "Track & Field", href: "#" },
      { name: "More Sports", href: "#" },
    ],
    company: [
      { name: "About Us", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Press", href: "#" },
      { name: "Blog", href: "#" },
    ],
    support: [
      { name: "Help Center", href: "#" },
      { name: "Contact Us", href: "#" },
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  return (
    <footer className="bg-gradient-to-br from-primary/5 to-accent/5 border-t border-border">
      {/* Inspirational Quote Section */}
      <div className="py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <blockquote className="text-2xl md:text-3xl font-light text-foreground/80 italic leading-relaxed">
            "We could never learn to be brave and patient, if there were only joy in the world."
          </blockquote>
          <cite className="block mt-4 text-lg text-muted-foreground font-medium">
            — Helen Keller
          </cite>
        </div>
      </div>
      
      <Separator />
      
      {/* Main Footer Content */}
      <div className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <h3 className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent">
                  SportsCareer
                </h3>
                <p className="text-muted-foreground mt-2 leading-relaxed">
                  Building the future for sports players worldwide. Your one-stop solution 
                  for athletic career development and networking.
                </p>
              </div>
              
              {/* Contact Info */}
              <div className="space-y-3 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-primary" />
                  hello@sportscareer.com
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-primary" />
                  +1 (555) 123-4567
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  San Francisco, CA
                </div>
              </div>
              
              {/* Social Links */}
              <div className="flex gap-3 mt-6">
                {socialLinks.map((social, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    size="icon"
                    className="hover:bg-primary/10 hover:text-primary transition-colors"
                    asChild
                  >
                    <a href={social.href} aria-label={social.label}>
                      <social.icon className="w-4 h-4" />
                    </a>
                  </Button>
                ))}
              </div>
            </div>
            
            {/* Platform Links */}
            <div>
              <h4 className="font-semibold mb-4 text-foreground">Platform</h4>
              <ul className="space-y-3">
                {footerLinks.platform.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href} 
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Sports Links */}
            <div>
              <h4 className="font-semibold mb-4 text-foreground">Sports</h4>
              <ul className="space-y-3">
                {footerLinks.sports.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href} 
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Company Links */}
            <div>
              <h4 className="font-semibold mb-4 text-foreground">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href} 
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Support Links */}
            <div>
              <h4 className="font-semibold mb-4 text-foreground">Support</h4>
              <ul className="space-y-3">
                {footerLinks.support.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href} 
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <Separator />
      
      {/* Bottom Section */}
      <div className="py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground">
            © 2025 SportsCareer. All rights reserved.
          </div>
          
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            Made with 
            <Heart className="w-4 h-4 text-red-500 fill-current mx-1" />
            for athletes worldwide
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;