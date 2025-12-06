import { Brain, Youtube, Globe, FileSearch, Mic, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const templates = [
  {
    icon: <Brain className="w-8 h-8 text-purple-600" />,
    title: "Solve problems like McKinsey",
    description: "Tackle complex challenges using structured thinking.",
    category: "BUSINESS STRATEGY",
    link: "https://app.hunch.tools/app/canvas/new/2xR31?invitationCode=wtd",
  },
  {
    icon: <Youtube className="w-8 h-8 text-red-500" />,
    title: "Summarize YouTube video",
    description: "Download, transcribe & summarize a YouTube video.",
    category: "WRITING & CONTENT",
    link: "https://app.hunch.tools/app/canvas/new/vyg7V?invitationCode=wtd",
  },
  {
    icon: <Globe className="w-8 h-8 text-green-600" />,
    title: "Research the web",
    description: "Efficiently gather and synthesize information from online sources.",
    category: "ANALYSIS & RESEARCH",
    link: "https://app.hunch.tools/app/canvas/new/rNLg4?invitationCode=wtd",
  },
  {
    icon: <span className="text-2xl text-blue-500 font-bold">SEO</span>,
    title: "Optimize post for SEO",
    description: "Rewrite a blog post to improve SEO.",
    category: "WRITING & CONTENT",
    link: "https://app.hunch.tools/app/canvas/new/lyz25?invitationCode=wtd",
  },
  {
    icon: <Mic className="w-8 h-8 text-cyan-500" />,
    title: "Extract actions from call",
    description: "Document key decisions and action items from a meeting or informal chat.",
    category: "MARKETING & SALES",
    link: "https://app.hunch.tools/app/canvas/new/Rmx4V?invitationCode=wtd",
  },
  {
    icon: <Sparkles className="w-8 h-8 text-orange-500" />,
    title: "Use the top AI models",
    description: "Prompt all the top AI models at once to compare outputs.",
    category: "PROMPT ENGINEERING",
    link: "https://app.hunch.tools/app/canvas/new/3gWwM?invitationCode=wtd",
  },
];

const Templates = () => {
  return (
    <section id="templates" className="py-24 bg-background">
      <div className="container">
        <span className="section-badge mb-6">TEMPLATES</span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          Your cheat code
          <br />
          for work
        </h2>
        <p className="text-lg text-muted-foreground max-w-lg mb-12">
          Get started now with one of dozens of templates. No sign in needed.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {templates.map((template, index) => (
            <a
              key={index}
              href={template.link}
              className="group bg-card rounded-2xl p-6 border border-transparent hover:border-border transition-all hover:shadow-lg"
            >
              <div className="mb-4">{template.icon}</div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-foreground/80 transition-colors">
                {template.title}
              </h3>
              <p className="text-muted-foreground mb-4">{template.description}</p>
              <span className="inline-block px-3 py-1 text-xs font-medium bg-secondary rounded-full">
                {template.category}
              </span>
            </a>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="rounded-full px-8 h-12 text-base">
            <a href="https://app.hunch.tools/app/library" className="flex items-center gap-2">
              View all Tools & Templates
              <ArrowRight className="w-4 h-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Templates;
