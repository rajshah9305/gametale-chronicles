import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Sparkles } from "lucide-react";

export const Newsletter = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-game-purple/5 to-game-pink/5" />
      <div className="absolute inset-0 bg-gradient-radial" />
      
      <div className="container px-4 relative z-10">
        <Card className="max-w-4xl mx-auto glass-effect border-primary/20 animate-scale-in">
          <CardContent className="p-8 md:p-12 text-center">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <Mail className="h-16 w-16 text-primary" />
                <Sparkles className="h-6 w-6 text-game-gold absolute -top-2 -right-2 animate-float" />
              </div>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Stay in the <span className="text-gradient">Game Loop</span>
            </h2>
            
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Get exclusive character reveals, game updates, and special events delivered to your inbox weekly
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input 
                type="email"
                placeholder="Enter your email..."
                className="flex-1 bg-background/50 border-border h-12"
              />
              <Button variant="legendary" size="lg" className="sm:w-auto">
                Subscribe
              </Button>
            </div>
            
            <p className="text-xs text-muted-foreground mt-4">
              Join 50,000+ gamers already subscribed. Unsubscribe anytime.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
