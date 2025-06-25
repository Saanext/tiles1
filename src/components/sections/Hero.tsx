import { Button } from '../ui/button';
import Link from 'next/link';

const Hero = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('https://placehold.co/1920x1080.png')" }}
      data-ai-hint="modern interior"
    >
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center py-24 md:py-32 lg:py-40">
        <h1 className="font-headline text-4xl font-extrabold tracking-tight sm:text-6xl md:text-7xl text-primary-foreground dark:text-foreground">
          STYLEON ART FACTORY
        </h1>
        <p className="mt-6 max-w-2xl text-lg sm:text-xl text-primary-foreground/80 dark:text-foreground/80">
          Crafting beauty in glass and stone for the most discerning spaces.
        </p>
        <div className="mt-10">
          <Button asChild size="lg" className="font-bold px-10 py-6 text-lg">
            <Link href="#products">Explore Collections</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
