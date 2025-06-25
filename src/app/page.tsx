import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/sections/Hero';
import Products from '@/components/sections/Products';
import Testimonials from '@/components/sections/Testimonials';
import Contact from '@/components/sections/Contact';
import About from '@/components/sections/About';
import Confidence from '@/components/sections/Confidence';

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Products />
        <Confidence />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
