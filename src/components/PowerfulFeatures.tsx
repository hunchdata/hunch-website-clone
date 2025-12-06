import { Layers, Search, Terminal, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: <Layers className="w-8 h-8" />,
    title: "Batch",
    description: "Easily run thousands of AI tasks in parallel",
  },
  {
    icon: <Search className="w-8 h-8" />,
    title: "Web scraping",
    description: "Extract data from any website",
  },
  {
    icon: <Terminal className="w-8 h-8" />,
    title: "Run code",
    description: "Run Python and Bash for data processing or external integrations",
  },
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    title: "SOC2 in progress",
    description: "We are working on SOC2 Type 1 certification",
  },
];

const PowerfulFeatures = () => {
  return (
    <section className="py-24 bg-lime relative overflow-hidden">
      {/* Decorative curve */}
      <div className="absolute inset-0 pointer-events-none">
        <svg
          className="absolute left-0 top-0 h-full w-1/2"
          viewBox="0 0 400 600"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            d="M400 0 C200 200, 100 400, 0 600"
            stroke="currentColor"
            strokeWidth="2"
            className="text-foreground/20"
            fill="none"
          />
        </svg>
      </div>

      <div className="container relative">
        <div className="lg:ml-auto lg:w-1/2 lg:pl-12">
          <span className="section-badge mb-6">POWERFUL FEATURES</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Do more, faster
          </h2>
          <p className="text-lg text-muted-foreground mb-12">
            Combine AI models with Hunch's powerful features.
          </p>

          <div className="space-y-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 bg-lime-dark/30 rounded-2xl hover:bg-lime-dark/50 transition-colors"
              >
                <div className="p-3 bg-lime-dark/50 rounded-xl">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PowerfulFeatures;
