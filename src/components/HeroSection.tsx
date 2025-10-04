import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Animated background layers */}
      <div className="absolute inset-0 bg-gradient-radial opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-game-pink/5" />
      
      {/* Floating orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-game-pink/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      
      <div className="relative z-10 container px-4 text-center animate-fade-in">
        <div className="flex items-center justify-center gap-2 mb-8">
          <Sparkles className="h-6 w-6 text-primary animate-glow-pulse" />
          <span className="text-sm font-medium glass-effect px-4 py-2 rounded-full border border-primary/20">
            ✨ New Characters Added Daily
          </span>
          <Sparkles className="h-6 w-6 text-game-pink animate-glow-pulse" style={{ animationDelay: '0.5s' }} />
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-[1.1] tracking-tight">
          Discover the{" "}
          <span className="text-gradient animate-gradient bg-200%">Epic Universe</span>
          <br />
          of{" "}
          <span className="text-gradient-mystical">Legendary Gaming</span>
        </h1>
        
        <p className="text-lg md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed font-light">
          Explore detailed character profiles, legendary stats, and immersive stories from your favorite gaming universes. Join the ultimate gaming encyclopedia.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button variant="legendary" size="lg" className="text-lg px-8 py-6 h-auto">
            Start Exploring
            <ArrowRight className="ml-2 h-6 w-6" />
          </Button>
          <Button variant="mystical" size="lg" className="text-lg px-8 py-6 h-auto">
            Browse Characters
          </Button>
        </div>
        
        <div className="flex items-center justify-center gap-8 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-primary rounded-full animate-glow-pulse" />
            <span className="text-muted-foreground">
              <span className="text-primary font-bold text-lg">100K+</span> Active Gamers
            </span>
          </div>
          <div className="w-px h-6 bg-border" />
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-game-gold rounded-full animate-glow-pulse" style={{ animationDelay: '0.3s' }} />
            <span className="text-muted-foreground">
              <span className="text-game-gold font-bold text-lg">5,000+</span> Characters
            </span>
          </div>
          <div className="w-px h-6 bg-border" />
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-game-pink rounded-full animate-glow-pulse" style={{ animationDelay: '0.6s' }} />
            <span className="text-muted-foreground">
              <span className="text-game-pink font-bold text-lg">150+</span> Games
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};