import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Competitions from "@/components/Competitions";
import Collaboration from "@/components/Collaboration";
import ChatbotSection from "@/components/ChatbotSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <Competitions />
      <Collaboration />
      <ChatbotSection />
      <Footer />
    </div>
  );
};

export default Index;