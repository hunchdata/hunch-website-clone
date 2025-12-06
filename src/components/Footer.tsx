import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground py-20">
      <div className="container">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 max-w-xl">
            Join the growing community of AI-first workers on Hunch.
          </h2>
          <Button
            asChild
            size="lg"
            className="rounded-full px-8 h-12 text-base bg-accent text-accent-foreground hover:bg-accent/90"
          >
            <a href="https://app.hunch.tools/">Try Hunch for free</a>
          </Button>
        </div>

        <div className="grid md:grid-cols-4 gap-12 pt-12 border-t border-primary-foreground/10">
          <div>
            <span className="inline-block px-3 py-1.5 text-sm font-bold bg-accent text-accent-foreground rounded-md mb-4">
              HUNCH
            </span>
            <p className="text-primary-foreground/70 text-sm mb-4">
              Hunch is an AI-first workspace for teams to use all the top AI models, tackle complex projects, and be more productive.
            </p>
            <p className="text-primary-foreground/50 text-sm mb-2">
              © 2025 Neon Data, Inc.
            </p>
            <p className="text-primary-foreground/50 text-sm">
              Neon Data develops Hunch and{" "}
              <a href="https://overclock.work/" className="hover:text-primary-foreground transition-colors underline">
                Overclock
              </a>
            </p>
          </div>

          <div>
            <ul className="space-y-3">
              <li>
                <a href="https://hnch.link/videos" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  YouTube
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/hunchtools" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://x.com/hunchtools" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  X
                </a>
              </li>
            </ul>
          </div>

          <div>
            <ul className="space-y-3">
              <li>
                <a href="https://hunch.tools/community" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Community
                </a>
              </li>
              <li>
                <a href="https://hunch.tools/docs" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="https://hunch.tools/blog" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          <div>
            <ul className="space-y-3">
              <li>
                <a href="https://static.hunch.tools/terms.pdf" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Terms of service
                </a>
              </li>
              <li>
                <a href="https://static.hunch.tools/privacy.pdf" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Privacy policy
                </a>
              </li>
              <li>
                <a href="mailto:security@hunch.tools" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Security Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
