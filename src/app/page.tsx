import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/sections/Hero';
import Products from '@/components/sections/Products';
import DesignTool from '@/components/sections/DesignTool';
import Testimonials from '@/components/sections/Testimonials';
import Contact from '@/components/sections/Contact';
import About from '@/components/sections/About';

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Products />
        <DesignTool />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
