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
    <Card className={`game-card group cursor-pointer relative ${rarityCardStyles[character.rarity]}`}>
      {/* Hover glow effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className={`absolute inset-0 ${
          character.rarity === "Legendary" ? "bg-game-gold/5" :
          character.rarity === "Epic" ? "bg-game-purple/5" :
          character.rarity === "Rare" ? "bg-game-blue/5" : ""
        } blur-xl`} />
      </div>
      
      <div className="relative overflow-hidden">
        <div className="relative h-72">
          <img 
            src={character.image} 
            alt={character.name}
            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
          
          {/* Rarity badge */}
          <Badge 
            className={`absolute top-4 right-4 ${rarityColors[character.rarity]} border backdrop-blur-sm transition-transform duration-300 group-hover:scale-110`}
          >
            {character.rarity}
          </Badge>
          
          {/* Character info overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-5 transform transition-transform duration-300 group-hover:-translate-y-1">
            <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
              {character.name}
            </h3>
            <p className="text-sm text-muted-foreground line-clamp-2 group-hover:line-clamp-3 transition-all">
              {character.description}
            </p>
          </div>
        </div>
      </div>
      
      <CardContent className="p-5 space-y-4">
        <div className="flex items-center justify-between">
          <Badge variant="outline" className="text-xs border-primary/30 text-primary font-medium">
            {character.game}
          </Badge>
          <div className="flex items-center gap-4 text-sm">
            <button className="flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors group/stat">
              <Eye className="h-4 w-4 transition-transform group-hover/stat:scale-110" />
              <span className="font-medium">{character.views.toLocaleString()}</span>
            </button>
            <button className="flex items-center gap-1.5 text-muted-foreground hover:text-game-pink transition-colors group/stat">
              <Heart className="h-4 w-4 transition-transform group-hover/stat:scale-110 group-hover/stat:fill-game-pink" />
              <span className="font-medium">{character.likes.toLocaleString()}</span>
            </button>
          </div>
        </div>
        
        <div className="flex gap-2">
          <Button 
            className="flex-1 transition-all" 
            size="sm"
            variant={character.rarity === "Legendary" ? "legendary" : character.rarity === "Epic" ? "mystical" : "default"}
          >
            View Profile
          </Button>
          <Button 
            variant="outline" 
            size="sm"
            className="hover:bg-primary/10 hover:border-primary/50 transition-all"
          >
            <Share2 className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};