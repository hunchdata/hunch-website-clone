const features = [
  {
    number: "01 / 04",
    title: "Tackle complex work",
    description:
      "Break down big projects into smaller tasks that AI can do well.",
    video: `${import.meta.env.BASE_URL}videos/why-vid-1.webm`,
  },
  {
    number: "02 / 04",
    title: "All the top AI models",
    description:
      "Use the best AI models to write, code, illustrate, transcribe audio, synthesize speech, and more in one place. Choose the right model for each task or let Auto AI pick for you.",
    video: `${import.meta.env.BASE_URL}videos/why-vid-2.webm`,
  },
  {
    number: "03 / 04",
    title: "Designed for productivity",
    description:
      "Every block is a rich text document. Hunch is your central hub for getting things done.",
    video: `${import.meta.env.BASE_URL}videos/why-vid-3.webm`,
  },
  {
    number: "04 / 04",
    title: "Share reusable AI tools",
    description: "Share your work as easy-to-use tools to level up your team.",
    video: `${import.meta.env.BASE_URL}videos/why-vid-4.webm`,
  },
];

const WhyHunch = () => {
  return (
    <section id="why-hunch" className="py-24 bg-lavender">
      <div className="container">
        <span className="section-badge mb-6">AI-FIRST WORK</span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          Why Hunch?
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mb-16">
          Hunch is not another chatbot. It's a workspace for teams to be more
          creative and productive with AI.
        </p>

        <div className="space-y-24">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <span className="text-sm text-muted-foreground mb-4 block">
                  {feature.number}
                </span>
                <h3 className="text-3xl md:text-4xl font-bold mb-4">
                  {feature.title}
                </h3>
                <p className="text-lg text-muted-foreground">
                  {feature.description}
                </p>
              </div>
              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <div className="bg-background rounded-2xl shadow-xl overflow-hidden border border-border p-4">
                  <div className="bg-muted rounded-xl overflow-hidden">
                    <video
                      src={feature.video}
                      className="w-full h-auto"
                      autoPlay
                      muted
                      loop
                      playsInline
                      onError={(e) => {
                        const target = e.target as HTMLVideoElement;
                        target.style.minHeight = "300px";
                        target.style.backgroundColor = "#f5f5f5";
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyHunch;
