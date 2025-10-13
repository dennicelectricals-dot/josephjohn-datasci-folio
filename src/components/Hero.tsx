import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
      </div>

      {/* Animated Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-glow-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: '1.5s' }} />

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-foreground to-secondary">
            Joseph John
          </span>
        </h1>
        
        <p className="text-2xl md:text-4xl font-semibold text-foreground mb-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Data Science Engineer
        </p>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          Turning complex data into actionable insights with AI and Machine Learning
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <Button 
            size="lg"
            className="group bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg shadow-neon-blue hover:shadow-neon-blue transition-all"
            onClick={() => scrollToSection('projects')}
          >
            View My Work
          </Button>
          
          <Button 
            size="lg"
            variant="outline"
            className="group border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-8 py-6 text-lg transition-all"
            onClick={() => window.open('#', '_blank')}
          >
            Download Resume
          </Button>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <Button
            variant="ghost"
            size="icon"
            className="text-primary hover:text-primary/80"
            onClick={() => scrollToSection('about')}
          >
            <ArrowDown className="w-8 h-8" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
