import { Button } from "@/components/ui/button";
import { Sword, Wand2, Shield, Zap, Crown, Flame } from "lucide-react";
import { useState } from "react";

const categories = [
  { id: "all", label: "All Characters", icon: Crown },
  { id: "warrior", label: "Warriors", icon: Sword },
  { id: "mage", label: "Mages", icon: Wand2 },
  { id: "tank", label: "Tanks", icon: Shield },
  { id: "assassin", label: "Assassins", icon: Zap },
  { id: "elemental", label: "Elementals", icon: Flame },
];

export const CategoryFilter = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  return (
    <section className="py-8 sticky top-16 z-40 bg-background/95 backdrop-blur-lg border-b border-border">
      <div className="container px-4">
        <div className="flex items-center gap-3 overflow-x-auto scrollbar-hide pb-2">
          {categories.map((category) => {
            const Icon = category.icon;
            const isActive = activeCategory === category.id;
            
            return (
              <Button
                key={category.id}
                variant={isActive ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveCategory(category.id)}
                className={`flex-shrink-0 gap-2 transition-all duration-300 ${
                  isActive 
                    ? "glow-effect" 
                    : "hover:border-primary/50"
                }`}
              >
                <Icon className="h-4 w-4" />
                {category.label}
              </Button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
