import { Pencil, TrendingUp, LayoutGrid, Code, Search, Sparkles, Star } from "lucide-react";
import { useState } from "react";

const categories = [
  { id: "writing", label: "Writing & Content", icon: Pencil },
  { id: "marketing", label: "Marketing & Sales", icon: TrendingUp },
  { id: "product", label: "Product Management", icon: LayoutGrid },
  { id: "software", label: "Software Development", icon: Code },
  { id: "analysis", label: "Analysis & Research", icon: Search },
  { id: "prompt", label: "Prompt Engineering", icon: Sparkles },
  { id: "more", label: "And More...", icon: Star },
];

const useCaseContent: Record<string, { items: { title: string; icon: React.ReactNode }[] }> = {
  writing: {
    items: [
      { title: "Blog posts & SEO ...", icon: <span className="text-pink-dark text-2xl">✎</span> },
      { title: "Technical writing ...", icon: <span className="text-pink-dark text-2xl">📝</span> },
      { title: "Podcasts & video ...", icon: <span className="text-pink-dark text-2xl">🎙</span> },
      { title: "Video scripts ...", icon: <span className="text-pink-dark text-2xl">▶</span> },
      { title: "Email newsletters ...", icon: <span className="text-pink-dark text-2xl">✉</span> },
      { title: "Fiction ...", icon: <span className="text-pink-dark text-2xl">📖</span> },
    ],
  },
  marketing: {
    items: [
      { title: "Campaign planning ...", icon: <span className="text-pink-dark text-2xl">📊</span> },
      { title: "Lead generation ...", icon: <span className="text-pink-dark text-2xl">🎯</span> },
      { title: "Sales emails ...", icon: <span className="text-pink-dark text-2xl">✉</span> },
      { title: "Market analysis ...", icon: <span className="text-pink-dark text-2xl">📈</span> },
      { title: "Social media ...", icon: <span className="text-pink-dark text-2xl">📱</span> },
      { title: "Ad copy ...", icon: <span className="text-pink-dark text-2xl">✨</span> },
    ],
  },
  product: {
    items: [
      { title: "Product briefs ...", icon: <span className="text-pink-dark text-2xl">📋</span> },
      { title: "User research ...", icon: <span className="text-pink-dark text-2xl">👥</span> },
      { title: "Feature specs ...", icon: <span className="text-pink-dark text-2xl">📐</span> },
      { title: "Roadmapping ...", icon: <span className="text-pink-dark text-2xl">🗺</span> },
      { title: "Competitive analysis ...", icon: <span className="text-pink-dark text-2xl">🔍</span> },
      { title: "Metrics tracking ...", icon: <span className="text-pink-dark text-2xl">📉</span> },
    ],
  },
  software: {
    items: [
      { title: "Code review ...", icon: <span className="text-pink-dark text-2xl">💻</span> },
      { title: "Documentation ...", icon: <span className="text-pink-dark text-2xl">📚</span> },
      { title: "API design ...", icon: <span className="text-pink-dark text-2xl">🔌</span> },
      { title: "Debugging ...", icon: <span className="text-pink-dark text-2xl">🐛</span> },
      { title: "Architecture ...", icon: <span className="text-pink-dark text-2xl">🏗</span> },
      { title: "Testing ...", icon: <span className="text-pink-dark text-2xl">✅</span> },
    ],
  },
  analysis: {
    items: [
      { title: "Data analysis ...", icon: <span className="text-pink-dark text-2xl">📊</span> },
      { title: "Research synthesis ...", icon: <span className="text-pink-dark text-2xl">🔬</span> },
      { title: "Report writing ...", icon: <span className="text-pink-dark text-2xl">📄</span> },
      { title: "Survey analysis ...", icon: <span className="text-pink-dark text-2xl">📋</span> },
      { title: "Trend spotting ...", icon: <span className="text-pink-dark text-2xl">📈</span> },
      { title: "Insights generation ...", icon: <span className="text-pink-dark text-2xl">💡</span> },
    ],
  },
  prompt: {
    items: [
      { title: "Prompt testing ...", icon: <span className="text-pink-dark text-2xl">🧪</span> },
      { title: "Model comparison ...", icon: <span className="text-pink-dark text-2xl">⚖</span> },
      { title: "Chain building ...", icon: <span className="text-pink-dark text-2xl">🔗</span> },
      { title: "Optimization ...", icon: <span className="text-pink-dark text-2xl">⚡</span> },
      { title: "Template creation ...", icon: <span className="text-pink-dark text-2xl">📝</span> },
      { title: "Output analysis ...", icon: <span className="text-pink-dark text-2xl">🎯</span> },
    ],
  },
  more: {
    items: [
      { title: "And much more ...", icon: <span className="text-pink-dark text-2xl">✨</span> },
      { title: "Custom workflows ...", icon: <span className="text-pink-dark text-2xl">🔧</span> },
      { title: "Team collaboration ...", icon: <span className="text-pink-dark text-2xl">👥</span> },
      { title: "Automation ...", icon: <span className="text-pink-dark text-2xl">🤖</span> },
      { title: "Integration ...", icon: <span className="text-pink-dark text-2xl">🔌</span> },
      { title: "Scaling ...", icon: <span className="text-pink-dark text-2xl">📈</span> },
    ],
  },
};

const UseCases = () => {
  const [activeCategory, setActiveCategory] = useState("writing");

  return (
    <section className="py-24 bg-pink">
      <div className="container">
        <span className="section-badge mb-6">USE CASES</span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          The right tool
          <br />
          for any job
        </h2>
        <p className="text-lg text-muted-foreground max-w-lg mb-12">
          People spend 35+ hours per week in Hunch brainstorming, executing, and everything in between.
        </p>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-1">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`w-full flex items-center gap-3 py-4 px-2 border-b border-foreground/10 text-left transition-colors hover:bg-pink-dark/30 ${
                    activeCategory === category.id ? "font-semibold" : ""
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="text-lg">{category.label}</span>
                </button>
              );
            })}
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {useCaseContent[activeCategory]?.items.map((item, index) => (
              <div
                key={index}
                className="bg-pink-dark/20 rounded-2xl p-6 h-40 flex flex-col justify-between transition-all hover:bg-pink-dark/30"
              >
                <span className="text-lg font-medium">{item.title}</span>
                <div className="self-end opacity-30">{item.icon}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCases;
