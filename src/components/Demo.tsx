const Demo = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container">
        <span className="section-badge mb-6">DEMO</span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          10X your impact
        </h2>
        <p className="text-lg text-muted-foreground mb-12">
          Watch as we do hours of work in &lt;5 minutes.
        </p>

        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border bg-card aspect-video">
            <iframe
              src="https://www.youtube.com/embed/oLmMNIK7fCE"
              title="Hunch Demo Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demo;
