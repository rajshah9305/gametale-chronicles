import { Card, CardContent } from "@/components/ui/card";
import { Users, BookOpen, Trophy, Star } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "100K+",
    label: "Active Gamers",
    color: "text-game-blue",
  },
  {
    icon: BookOpen,
    value: "5,000+",
    label: "Character Profiles",
    color: "text-primary",
  },
  {
    icon: Trophy,
    value: "150+",
    label: "Games Featured",
    color: "text-game-purple",
  },
  {
    icon: Star,
    value: "4.9",
    label: "User Rating",
    color: "text-game-orange",
  },
];

export const GameStats = () => {
  return (
    <section className="py-16 relative">
      <div className="container px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card 
              key={index} 
              className="game-card text-center group animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8">
                <div className="relative inline-block mb-4">
                  <div className={`absolute inset-0 ${stat.color} opacity-20 blur-xl group-hover:opacity-30 transition-opacity`} />
                  <stat.icon className={`h-10 w-10 ${stat.color} relative z-10 transition-transform group-hover:scale-110 duration-300`} />
                </div>
                <div className={`text-3xl md:text-4xl font-bold mb-2 ${stat.color} transition-all group-hover:scale-105`}>
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};