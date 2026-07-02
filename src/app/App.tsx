import { HeroSection } from './components/HeroSection';
import { ResearchSection } from './components/ResearchSection';
import { FaqSection } from './components/FaqSection';
import { CtaSection } from './components/CtaSection';
import { SiteFooter } from './components/SiteFooter';
import { ScrollNav } from './components/ScrollNav';
import { Navigation } from './components/Navigation';
import { StickyFeatureSection, STICKY_STEPS } from './components/StickyFeatureSection';

export default function App() {
  return (
    <div
      style={{
        fontFamily:      "'EB Garamond', Georgia, serif",
        backgroundColor: '#dddbd3',
        color:           '#1c1a15',
      }}
    >
      <Navigation />
      <HeroSection />
      <ResearchSection />
      <StickyFeatureSection steps={STICKY_STEPS} />
      <FaqSection />
      <CtaSection />
      <SiteFooter />
      <ScrollNav />
    </div>
  );
}
