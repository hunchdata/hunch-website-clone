const testimonials = [
  {
    quote: "I love the visual canvas type of interface and how one block leads to the next block. It's intuitive and feels like how my brain actually works.",
    name: "Jonathan",
    title: "Creative Program Manager, Walt Disney Imagineering",
  },
  {
    quote: "Hunch has been a game-changer in enabling anyone to effortlessly create agentic LLM AI-based workflows.",
    name: "Sam",
    title: "Product Leader, Turing",
  },
  {
    quote: "I now use Hunch basically daily. Hunch let me build a tool to analyze mountains of recordings I need to process and share.",
    name: "Michael",
    title: "Community Manager, Sudowrite",
  },
  {
    quote: "I just replicated something in 10 minutes with Hunch that usually takes my business partner and me 20 hours.",
    name: "John",
    title: "Strategy Consultant",
  },
  {
    quote: "Hunch has fundamentally shifted how my team works – people are LOVING IT!!",
    name: "Maggie",
    title: "Community Product Manager, Acryl Data",
  },
  {
    quote: "Hunch has made my work life so much easier. I'm able to use it every single day. The biggest difference? The ability to break down complex thoughts and processes to enable AI to assist you.",
    name: "Sam",
    title: "Business Analyst, PlusOneX",
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container">
        <span className="section-badge mb-6">TESTIMONIALS</span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          People love Hunch
        </h2>
        <p className="text-lg text-muted-foreground mb-12">
          Here's what our users say.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-6 border border-border hover:border-foreground/20 transition-colors"
            >
              <p className="font-medium mb-8 leading-relaxed">
                {testimonial.quote}
              </p>
              <div>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
