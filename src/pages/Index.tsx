import { GameHeader } from "@/components/GameHeader";
import { HeroSection } from "@/components/HeroSection";
import { FeaturedCharacter } from "@/components/FeaturedCharacter";
import { CharacterGrid } from "@/components/CharacterGrid";
import { GameStats } from "@/components/GameStats";

const Index = () => {
  return (
    <div className="min-h-screen">
      <GameHeader />
      <main>
        <HeroSection />
        <GameStats />
        <FeaturedCharacter />
        <CharacterGrid />
      </main>
    </div>
  );
};

export default Index;
