import { CharacterCard } from "./CharacterCard";

const mockCharacters = [
  {
    id: "1",
    name: "Elena Stormwind",
    description: "A powerful mage wielding the forces of lightning and storm. Master of elemental magic with decades of experience.",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=400",
    game: "Mystic Realms",
    rarity: "Epic" as const,
    views: 15420,
    likes: 892,
  },
  {
    id: "2", 
    name: "Kai Shadowblade",
    description: "Silent assassin from the Eastern kingdoms. Known for his swift strikes and mastery of shadow techniques.",
    image: "https://images.unsplash.com/photo-1566492031773-4f4e44671d66?q=80&w=400",
    game: "Shadow Dynasty",
    rarity: "Legendary" as const,
    views: 23107,
    likes: 1347,
  },
  {
    id: "3",
    name: "Luna Frostborn",
    description: "Ice queen of the northern territories. Her frost magic can freeze entire armies in their tracks.",
    image: "https://images.unsplash.com/photo-1594736797933-d0401ba6fe65?q=80&w=400",
    game: "Frozen Kingdoms",
    rarity: "Rare" as const,
    views: 8943,
    likes: 567,
  },
  {
    id: "4",
    name: "Marcus Ironforge",
    description: "Legendary blacksmith and warrior. His enchanted weapons have turned the tide of countless battles.",
    image: "https://images.unsplash.com/photo-1583743089695-4b816a340f82?q=80&w=400",
    game: "Forge of Heroes",
    rarity: "Epic" as const,
    views: 12356,
    likes: 743,
  },
  {
    id: "5",
    name: "Zara Nightwhisper",
    description: "Mysterious sorceress who communicates with spirits. Her necromantic abilities are both feared and revered.",
    image: "https://images.unsplash.com/photo-1609199496589-52e7b6b72fbc?q=80&w=400",
    game: "Spirit Realm",
    rarity: "Legendary" as const,
    views: 19872,
    likes: 1156,
  },
  {
    id: "6",
    name: "Rex Thunderstrike",
    description: "Champion gladiator with unmatched strength. His thunder hammer has never met its equal in combat.",
    image: "https://images.unsplash.com/photo-1566555203457-4b5b62e2aeb9?q=80&w=400",
    game: "Arena of Champions",
    rarity: "Rare" as const,
    views: 11234,
    likes: 672,
  },
];

export const CharacterGrid = () => {
  return (
    <section className="py-16 bg-secondary/20">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Popular Characters
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover the most beloved characters from various gaming universes. Each with unique abilities and captivating backstories.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockCharacters.map((character) => (
            <CharacterCard key={character.id} character={character} />
          ))}
        </div>
      </div>
    </section>
  );
};