import HeroSection from "@/components/HeroSection/HeroSection";
import NewesSection from "@/components/NewsSection/NewsSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <section className="mb-10">
        <NewesSection />
      </section>
    </>
  );
}
