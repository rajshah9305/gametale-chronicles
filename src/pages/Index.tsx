import { GameHeader } from "@/components/GameHeader";
import { HeroSection } from "@/components/HeroSection";
import { FeaturedCharacter } from "@/components/FeaturedCharacter";
import { CharacterGrid } from "@/components/CharacterGrid";
import { GameStats } from "@/components/GameStats";
import { FeaturedGames } from "@/components/FeaturedGames";
import { CategoryFilter } from "@/components/CategoryFilter";
import { Newsletter } from "@/components/Newsletter";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <GameHeader />
      <main>
        <HeroSection />
        <GameStats />
        <FeaturedGames />
        <CategoryFilter />
        <CharacterGrid />
        <FeaturedCharacter />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
