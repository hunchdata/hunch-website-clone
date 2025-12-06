import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container flex items-center justify-between h-16">
        {/* <a href="/" className="flex items-center">
          <span className="px-3 py-1.5 text-sm font-bold bg-accent text-accent-foreground rounded-md">
            HUNCH
          </span>
        </a> */}
        <a
          href="./#top"
          style={{
            imageRendering: "pixelated",
            flexShrink: 0,
            backgroundSize: "100% 100%",
            opacity: 1,
          }}
          aria-hidden="true"
        >
          <svg viewBox="0 0 130 40" className="h-10">
            <g id="ss10847426642_1">
              <path
                d="M 0 0 L 130 0 L 130 40 L 0 40 Z"
                fill="transparent"
              ></path>
              <path
                d="M 109.573 0.143 L 20.361 0.143 C 9.274 0.143 0.286 9.033 0.286 20 C 0.286 30.967 9.274 39.857 20.361 39.857 L 109.573 39.857 C 120.66 39.857 129.647 30.967 129.647 20 C 129.647 9.033 120.66 0.143 109.573 0.143 Z"
                fill="rgb(235,255,4)"
              ></path>
              <path
                d="M 14.726 29.257 L 14.726 10.714 L 17.243 10.714 L 17.243 18.657 L 29.241 18.657 L 29.241 10.714 L 31.758 10.714 L 31.758 29.251 L 29.241 29.251 L 29.241 20.871 L 17.243 20.871 L 17.243 29.251 L 14.726 29.251 Z M 35.202 10.587 L 37.719 10.587 L 37.719 22.317 C 37.719 25.747 40.295 27.269 43.762 27.269 C 47.229 27.269 49.776 25.747 49.776 22.317 L 49.776 10.587 L 52.293 10.587 L 52.293 22.07 C 52.293 27.137 48.599 29.489 43.763 29.489 C 38.926 29.489 35.203 27.137 35.203 22.07 L 35.203 10.587 Z M 55.504 29.257 L 55.504 10.714 L 59.728 10.714 L 65.281 19.389 L 70.217 27.096 L 70.497 27.096 L 70.497 10.714 L 73.014 10.714 L 73.014 29.251 L 68.789 29.251 L 63.312 20.859 L 58.301 12.869 L 58.021 12.869 L 58.021 29.251 L 55.504 29.251 Z M 85.606 10.386 C 90.862 10.386 94.696 13.486 95.506 18.132 L 92.878 18.132 C 92.15 14.755 89.464 12.599 85.606 12.599 C 81.102 12.599 78.136 15.562 78.136 19.989 C 78.136 24.415 81.073 27.378 85.63 27.378 C 89.627 27.378 92.313 25.136 92.99 21.678 L 95.617 21.678 C 94.86 26.41 91.031 29.591 85.63 29.591 C 79.645 29.591 75.56 25.637 75.56 19.988 C 75.56 14.34 79.674 10.386 85.6 10.386 Z M 98.17 29.257 L 98.17 10.714 L 100.687 10.714 L 100.687 18.657 L 112.685 18.657 L 112.685 10.714 L 115.202 10.714 L 115.202 29.251 L 112.685 29.251 L 112.685 20.871 L 100.687 20.871 L 100.687 29.251 L 98.169 29.251 L 98.169 29.257 Z"
                fill="rgb(23,23,28)"
              ></path>
            </g>
          </svg>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#why-hunch"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Why Hunch
          </a>
          <a
            href="#templates"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Templates
          </a>
          <a
            href="https://hunch.tools/blog/"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Blog
          </a>
          <a
            href="https://hunch.tools/docs"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Docs
          </a>
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="https://app.hunch.tools/signin"
            className="hidden sm:block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
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
            <a
              href="#why-hunch"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Why Hunch
            </a>
            <a
              href="#templates"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Templates
            </a>
            <a
              href="https://hunch.tools/blog/"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Blog
            </a>
            <a
              href="https://hunch.tools/docs"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Docs
            </a>
            <a
              href="https://app.hunch.tools/signin"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Sign In
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
