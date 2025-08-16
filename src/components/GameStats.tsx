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
    <section className="py-16">
      <div className="container px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="game-card text-center">
              <CardContent className="p-6">
                <stat.icon className={`h-8 w-8 ${stat.color} mx-auto mb-3`} />
                <div className="text-2xl md:text-3xl font-bold mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
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