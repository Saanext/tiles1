import Image from 'next/image';
import AnimatedSection from '../AnimatedSection';

const collageItems = [
  {
    src: 'https://images.unsplash.com/photo-1559474499-677ff6a22e31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxN3x8bW9zYWljJTIwdHxlbnwwfHx8fDE3NTA4NzY1Mzh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    alt: 'Large mosaic installation in a luxury hotel lobby.',
    hint: 'mosaic art',
    className: 'md:col-span-2 md:row-span-2',
  },
  {
    src: 'https://images.unsplash.com/photo-1702275787549-cd7c28ab061d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyMHx8bW9zaWMlMjB0aWxlc3xlbnwwfHx8fDE3NTA4NzY3MzF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    alt: 'Close-up detail of iridescent glass tiles.',
    hint: 'glass tiles',
    className: 'col-span-1 row-span-1',
  },
  {
    src: 'https://placehold.co/400x400.png',
    alt: 'A modern bathroom featuring a sleek stone wash basin.',
    hint: 'modern bathroom',
    className: 'col-span-1 row-span-1',
  },
  {
    src: 'https://placehold.co/800x400.png',
    alt: 'A wide shot of luxury bathroom furnishings.',
    hint: 'luxury furnishing',
    className: 'col-span-2 row-span-1',
  },
];

const ImageCollage = () => {
  return (
    <AnimatedSection id="inspiration-collage" className="bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            A Gallery of Inspiration
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Witness the transformative power of our collections in a variety of stunning applications.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-[300px] md:h-[600px]">
          {collageItems.map((item, index) => (
            <div key={index} className={`relative w-full h-full overflow-hidden rounded-lg group ${item.className}`}>
              <Image
                src={item.src}
                alt={item.alt}
                data-ai-hint={item.hint}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default ImageCollage;
