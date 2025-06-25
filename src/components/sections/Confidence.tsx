import Image from 'next/image';
import AnimatedSection from '../AnimatedSection';

const confidenceItems = [
  {
    src: 'https://placehold.co/400x500.png',
    alt: 'A modern kitchen with green tiles.',
    hint: 'modern kitchen',
  },
  {
    src: 'https://placehold.co/400x500.png',
    alt: 'The storefront of a tile shop.',
    hint: 'tile storefront',
  },
  {
    src: 'https://placehold.co/400x500.png',
    alt: 'Two designers collaborating over tile samples.',
    hint: 'designers collaboration',
  },
  {
    src: 'https://placehold.co/400x500.png',
    alt: 'Planning a design with tile samples on a blueprint.',
    hint: 'design blueprint',
  },
];

const Confidence = () => {
  return (
    <AnimatedSection id="confidence" className="bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Create with Confidence
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {confidenceItems.map((item, index) => (
            <div key={index} className="relative aspect-[4/5] w-full overflow-hidden rounded-lg group">
              <Image
                src={item.src}
                alt={item.alt}
                data-ai-hint={item.hint}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Confidence;
