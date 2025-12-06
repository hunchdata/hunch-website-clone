import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LogoMarquee from "@/components/LogoMarquee";
import HeroImage from "@/components/HeroImage";
import UseCases from "@/components/UseCases";
import Templates from "@/components/Templates";
import WhyHunch from "@/components/WhyHunch";
import PowerfulFeatures from "@/components/PowerfulFeatures";
import Demo from "@/components/Demo";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <LogoMarquee />
        <HeroImage />
        <UseCases />
        <Templates />
        <WhyHunch />
        <PowerfulFeatures />
        <Demo />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
