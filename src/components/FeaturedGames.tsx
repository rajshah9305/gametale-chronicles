import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, Users, TrendingUp } from "lucide-react";

const games = [
  {
    id: 1,
    title: "Mystic Realms",
    category: "MMORPG",
    players: "2.5M+",
    rating: 4.8,
    trending: true,
    image: "/lovable-uploads/artbreeder-image-2025-03-01T02_54_36.073Z.JPEG",
    gradient: "from-game-purple to-game-pink"
  },
  {
    id: 2,
    title: "Shadow Dynasty",
    category: "Action RPG",
    players: "1.8M+",
    rating: 4.9,
    trending: true,
    image: "/lovable-uploads/artbreeder-image-2025-03-01T02_54_43.037Z.JPEG",
    gradient: "from-game-blue to-game-cyan"
  },
  {
    id: 3,
    title: "Frozen Kingdoms",
    category: "Strategy",
    players: "1.2M+",
    rating: 4.7,
    trending: false,
    image: "/lovable-uploads/artbreeder-image-2025-03-01T02_54_48.419Z.JPEG",
    gradient: "from-game-cyan to-game-blue"
  },
  {
    id: 4,
    title: "Spirit Realm",
    category: "Adventure",
    players: "980K+",
    rating: 4.6,
    trending: false,
    image: "/lovable-uploads/artbreeder-image-2025-03-01T02_54_57.436Z.JPEG",
    gradient: "from-game-purple to-game-blue"
  }
];

export const FeaturedGames = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial opacity-50" />
      
      <div className="container px-4 relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            Top Rated Games
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Gaming Universes</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Dive into the most popular and critically acclaimed games in our collection
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {games.map((game, index) => (
            <Card 
              key={game.id} 
              className="group game-card overflow-hidden relative animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-64 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${game.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                <img 
                  src={game.image}
                  alt={game.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {game.trending && (
                  <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground border-0">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    Trending
                  </Badge>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60" />
              </div>

              <CardContent className="p-5 relative">
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="outline" className="text-xs border-primary/30 text-primary">
                    {game.category}
                  </Badge>
                  <div className="flex items-center gap-1 ml-auto">
                    <Star className="h-4 w-4 fill-game-gold text-game-gold" />
                    <span className="text-sm font-semibold">{game.rating}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {game.title}
                </h3>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Users className="h-4 w-4" />
                    <span>{game.players} Active</span>
                  </div>
                </div>

                <Button className="w-full" variant="outline">
                  Explore Game
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
