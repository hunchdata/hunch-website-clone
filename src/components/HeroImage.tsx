const HeroImage = () => {
  return (
    <section className="pb-20 bg-background">
      <div className="container">
        <div className="rounded-xl overflow-hidden shadow-2xl border border-border/50">
          <video
            src={`${import.meta.env.BASE_URL}videos/hero-video.webm`}
            autoPlay
            loop
            preload="auto"
            muted
            playsInline
            className="w-full h-full cursor-auto object-cover object-center bg-transparent"
            style={{ borderRadius: "14px", display: "block" }}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroImage;
