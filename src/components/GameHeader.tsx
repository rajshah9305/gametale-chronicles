import { Search, Menu, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const GameHeader = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border glass-effect">
      <div className="container flex h-20 items-center justify-between px-4">
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" className="md:hidden hover:bg-primary/10">
            <Menu className="h-5 w-5" />
          </Button>
          <h1 className="text-2xl font-black text-gradient cursor-pointer hover:scale-105 transition-transform">
            GamePedia
          </h1>
        </div>
        
        <div className="flex-1 max-w-xl mx-4 hidden md:block">
          <div className="relative group">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
            <Input 
              placeholder="Search characters, games, guides..." 
              className="pl-12 h-12 bg-secondary/50 border-border focus:border-primary/50 transition-colors"
            />
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" className="relative hover:bg-primary/10">
            <Bell className="h-5 w-5" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full animate-glow-pulse" />
          </Button>
          <Button variant="legendary" size="sm" className="hidden sm:flex">
            Play Now
          </Button>
        </div>
      </div>
    </header>
  );
};