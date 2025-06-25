import Image from 'next/image';
import AnimatedSection from '../AnimatedSection';

const collageItems = [
  {
    src: 'https://placehold.co/800x800.png',
    alt: 'Large mosaic installation in a luxury hotel lobby.',
    hint: 'mosaic art',
    className: 'md:col-span-2 md:row-span-2',
  },
  {
    src: 'https://placehold.co/400x400.png',
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
