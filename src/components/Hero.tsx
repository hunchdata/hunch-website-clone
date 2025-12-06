import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="pt-32 pb-16 bg-background">
      <div className="container">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
            Hunch is the{" "}
            <span className="text-muted-foreground italic font-normal">workspace</span>
            <br />
            for <span className="text-[hsl(260,80%,60%)] italic">AI-first teams.</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mb-8">
            Use all the top AI models, tackle complex projects, and be more productive—in one place.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="rounded-full px-8 h-12 text-base">
              <a href="https://app.hunch.tools/">Use Hunch for free</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full px-8 h-12 text-base">
              <a href="https://hnch.link/dw">Book a demo</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
