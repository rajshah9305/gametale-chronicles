import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, Zap, Shield, Sword } from "lucide-react";

export const FeaturedCharacter = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial opacity-40" />
      
      <div className="container px-4 relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <Badge className="mb-4 glass-effect text-primary border-primary/30 px-4 py-2">
            ⭐ Character Spotlight
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Character of the Week</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Meet our latest featured character with detailed stats, lore, and gameplay insights.
          </p>
        </div>
        
        <Card className="game-card max-w-6xl mx-auto overflow-hidden border-primary/30 animate-scale-in">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="relative h-96 md:h-auto group">
              <img 
                src="/lovable-uploads/90fd66d2-42df-425d-97f9-9b7fa044ffce.png" 
                alt="Featured Character"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-background/30 to-background/90 md:to-background" />
            </div>
            
            <CardContent className="p-8 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-4">
                <Badge className="bg-primary text-primary-foreground">
                  Legendary
                </Badge>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
              </div>
              
              <h3 className="text-3xl font-bold mb-2">Aria Blackthorn</h3>
              <p className="text-primary font-medium mb-4">Shadow Realm Chronicles</p>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                A mysterious warrior from the Shadow Realm, known for her mastery of dark magic and 
                unparalleled combat skills. Aria's journey from fallen noble to legendary assassin 
                is one of redemption and power.
              </p>
              
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center p-3 bg-secondary/50 rounded-lg">
                  <Sword className="h-6 w-6 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-primary">95</div>
                  <div className="text-xs text-muted-foreground">Attack</div>
                </div>
                <div className="text-center p-3 bg-secondary/50 rounded-lg">
                  <Shield className="h-6 w-6 text-game-blue mx-auto mb-2" />
                  <div className="text-2xl font-bold text-game-blue">87</div>
                  <div className="text-xs text-muted-foreground">Defense</div>
                </div>
                <div className="text-center p-3 bg-secondary/50 rounded-lg">
                  <Zap className="h-6 w-6 text-game-purple mx-auto mb-2" />
                  <div className="text-2xl font-bold text-game-purple">92</div>
                  <div className="text-xs text-muted-foreground">Magic</div>
                </div>
              </div>
              
              <div className="flex gap-3">
                <Button className="flex-1" variant="legendary">
                  View Full Profile
                </Button>
                <Button variant="mystical">
                  Add to Collection
                </Button>
              </div>
            </CardContent>
          </div>
        </Card>
      </div>
    </section>
  );
};