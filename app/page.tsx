import Features from '@/components/Features';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import Pricing from '@/components/Pricing';
import STA from '@/components/STA';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-blue-50">
      <Header />
      <main>
        <Hero />
        <Features />
        <Pricing />
        <STA />
      </main>
      <Footer />
    </div>
  );
}
