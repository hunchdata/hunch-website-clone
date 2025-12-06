import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container flex items-center justify-between h-16">
        <a href="/" className="flex items-center">
          <span className="px-3 py-1.5 text-sm font-bold bg-accent text-accent-foreground rounded-md">
            HUNCH
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#why-hunch" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Why Hunch
          </a>
          <a href="#templates" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Templates
          </a>
          <a href="https://hunch.tools/blog/" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Blog
          </a>
          <a href="https://hunch.tools/docs" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Docs
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <a href="https://app.hunch.tools/signin" className="hidden sm:block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Sign In
          </a>
          <Button asChild size="sm" className="rounded-full px-5">
            <a href="https://app.hunch.tools/">Try Hunch</a>
          </Button>
          <button 
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <nav className="container py-4 flex flex-col gap-4">
            <a href="#why-hunch" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Why Hunch
            </a>
            <a href="#templates" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Templates
            </a>
            <a href="https://hunch.tools/blog/" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Blog
            </a>
            <a href="https://hunch.tools/docs" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Docs
            </a>
            <a href="https://app.hunch.tools/signin" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Sign In
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
