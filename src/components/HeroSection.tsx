import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background/50" />
      
      <div className="relative z-10 container px-4 text-center">
        <div className="flex items-center justify-center gap-2 mb-6">
          <Sparkles className="h-6 w-6 text-primary animate-pulse" />
          <span className="text-sm font-medium text-muted-foreground bg-secondary/50 px-3 py-1 rounded-full border border-border">
            New Characters Added Daily
          </span>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          Discover the{" "}
          <span className="text-gradient">thrilling world</span>
          <br />
          of gaming with our{" "}
          <span className="text-gradient">Encyclopedia</span>
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
          Explore detailed character profiles, game guides, and immersive stories from your favorite gaming universes.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="hero" size="lg" className="text-base">
            Start Exploring
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button variant="outline" size="lg" className="text-base">
            Browse Characters
          </Button>
        </div>
        
        <div className="mt-12 text-sm text-muted-foreground">
          Join over <span className="text-primary font-semibold">100K+</span> gamers exploring our universe
        </div>
      </div>
    </section>
  );
};