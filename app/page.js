import HeroSection from "../components/HeroSection";
import SectionWhatWeDo from "../components/SectionWhatWeDo";
import SectionProductShowcase from "../components/SectionProductShowcase";
import SectionAIMosaic from "../components/SectionAIMosaic";
import SectionMarquee from "../components/SectionMarquee";
import SectionScrollPin from "../components/SectionScrollPin";
import SectionFAQ from "../components/SectionFAQ";
import SiteFooter from "../components/SiteFooter";
import SectionDotMatrix from "../components/SectionDotMatrix";

export default function Home() {
  return (
    <main>
      <HeroSection />

      <SectionWhatWeDo />

      <SectionProductShowcase />

      <SectionAIMosaic />

      <SectionMarquee />

      <SectionScrollPin />

      <SectionFAQ />

      <SiteFooter />

      <SectionDotMatrix />
    </main>
  );
}
