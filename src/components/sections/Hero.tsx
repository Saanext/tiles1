import Image from 'next/image';
import { Button } from '../ui/button';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="relative h-[80vh] min-h-[500px] flex items-center justify-center text-center text-white">
      <div className="absolute inset-0 bg-black/50 z-10"></div>
      <Image
        src="https://placehold.co/1920x1080"
        alt="Stylish bathroom with mosaic tiles"
        data-ai-hint="elegant bathroom"
        layout="fill"
        objectFit="cover"
        className="z-0"
        priority
      />
      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl md:text-7xl drop-shadow-lg">
          STYLEON ART FACTORY
        </h1>
        <p className="mt-6 max-w-2xl text-lg sm:text-xl md:text-2xl drop-shadow-md">
          Crafting beauty in glass and stone for the most discerning spaces.
        </p>
        <div className="mt-10">
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold px-10 py-6 text-lg">
            <Link href="#products">Explore Collections</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
