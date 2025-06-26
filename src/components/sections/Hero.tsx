'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
// import Autoplay from 'embla-carousel-autoplay';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel';
import { Button } from '../ui/button';
import Typewriter from '../Typewriter';

const slides = [
  {
    title: 'STYLEON ART FACTORY',
    description: 'Crafting beauty in glass and stone for the most discerning spaces.',
    image: 'https://images.pexels.com/photos/2251247/pexels-photo-2251247.jpeg',
    hint: 'modern interior',
    buttonLabel: 'Explore Collections',
    buttonLink: '#products',
  },
  {
    title: 'Exquisite Crystal Mosaics',
    description: 'Transform your interiors with our dazzling collection of crystal glass mosaics.',
    image: 'https://images.pexels.com/photos/5570226/pexels-photo-5570226.jpeg',
    hint: 'crystal mosaic tile',
    buttonLabel: 'View Mosaics',
    buttonLink: '#products',
  },
  {
    title: 'Elegant Wash Basins',
    description: 'Discover wash basins and counters that blend artistry with functionality.',
    image: 'https://images.pexels.com/photos/5461586/pexels-photo-5461586.jpeg',
    hint: 'glass wash basin',
    buttonLabel: 'See Basins',
    buttonLink: '#products',
  },
];

const Hero = () => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap());
    api.on('select', () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div className="w-full">
      <Carousel
        setApi={setApi}
        className="w-full"
        opts={{
          loop: true,
        }}
      >
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index}>
              <div className="relative h-[60vh] md:h-[80vh] w-full">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  data-ai-hint={slide.hint}
                  fill
                  style={{ objectFit: 'cover' }}
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-black/60" />
                <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col items-center justify-center text-center text-primary-foreground">
                  {index === current ? (
                    <Typewriter
                      key={current}
                      text={slide.title}
                      className="font-headline text-4xl font-extrabold tracking-tight sm:text-6xl md:text-7xl"
                      as="h1"
                    />
                  ) : (
                    <h1 className="font-headline text-4xl font-extrabold tracking-tight sm:text-6xl md:text-7xl">
                      <span className="min-h-[1.2em] inline-block">{slide.title}</span>
                    </h1>
                  )}
                  <p className="mt-6 max-w-2xl text-lg sm:text-xl text-primary-foreground/80">
                    {slide.description}
                  </p>
                  <div className="mt-10">
                    <Button asChild size="lg" className="font-bold px-10 py-6 text-lg">
                      <Link href={slide.buttonLink}>{slide.buttonLabel}</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="hidden md:block">
            <CarouselPrevious className="absolute left-8 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/40 text-white border-white/50" />
            <CarouselNext className="absolute right-8 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/40 text-white border-white/50" />
        </div>
      </Carousel>
    </div>
  );
};

export default Hero;
