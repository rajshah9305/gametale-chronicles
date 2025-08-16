import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye, Heart, Share2 } from "lucide-react";

interface CharacterCardProps {
  character: {
    id: string;
    name: string;
    description: string;
    image: string;
    game: string;
    rarity: "Common" | "Rare" | "Epic" | "Legendary";
    views: number;
    likes: number;
  };
}

const rarityColors = {
  Common: "bg-muted text-muted-foreground border-muted",
  Rare: "bg-game-blue text-white border-game-blue shadow-lg",
  Epic: "bg-game-purple text-white border-game-purple glow-magical",
  Legendary: "bg-game-gold text-white border-game-gold glow-legendary",
};

const rarityCardStyles = {
  Common: "",
  Rare: "border-game-blue/30",
  Epic: "border-game-purple/30 glow-magical",
  Legendary: "border-game-gold/30 glow-legendary",
};

export const CharacterCard = ({ character }: CharacterCardProps) => {
  return (
    <Card className={`game-card group cursor-pointer ${rarityCardStyles[character.rarity]}`}>
      <div className="relative overflow-hidden">
        <img 
          src={character.image} 
          alt={character.name}
          className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
        <Badge 
          className={`absolute top-4 right-4 ${rarityColors[character.rarity]} border`}
        >
          {character.rarity}
        </Badge>
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-xl font-bold text-foreground mb-1">{character.name}</h3>
          <p className="text-sm text-muted-foreground line-clamp-2">{character.description}</p>
        </div>
      </div>
      
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-medium text-primary">{character.game}</span>
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <div className="flex items-center gap-1 hover:text-primary transition-colors">
              <Eye className="h-4 w-4" />
              <span>{character.views.toLocaleString()}</span>
            </div>
            <div className="flex items-center gap-1 hover:text-game-pink transition-colors">
              <Heart className="h-4 w-4" />
              <span>{character.likes.toLocaleString()}</span>
            </div>
          </div>
        </div>
        
        <div className="flex gap-2">
          <Button 
            className="flex-1" 
            size="sm"
            variant={character.rarity === "Legendary" ? "legendary" : character.rarity === "Epic" ? "mystical" : "default"}
          >
            View Profile
          </Button>
          <Button variant="outline" size="sm">
            <Share2 className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};