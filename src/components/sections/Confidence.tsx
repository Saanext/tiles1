import Image from 'next/image';
import AnimatedSection from '../AnimatedSection';

const confidenceItems = [
  {
    src: 'https://images.unsplash.com/photo-1641220171683-c19c23a901b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxtb3NhaWMlMjB0aWxlc3xlbnwwfHx8fDE3NTA4NzEwODh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    alt: 'A modern kitchen with green tiles.',
    hint: 'modern kitchen',
    title: 'Residential Elegance',
    description: 'Transform your home with our exquisite materials. From kitchen backsplashes to bathroom floors, our products add a touch of timeless luxury.',
  },
  {
    src: 'https://images.unsplash.com/photo-1731045521151-07a0fe502009?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHxtb3NhaWMlMjB0aWxlc3xlbnwwfHx8fDE3NTA4NzEwODh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    alt: 'Two designers collaborating over tile samples.',
    hint: 'designers collaboration',
    title: 'Commercial Brilliance',
    description: 'Our durable and stylish solutions are perfect for hotels, restaurants, and retail spaces, creating unforgettable first impressions.',
  },
];

const Confidence = () => {
  return (
    <AnimatedSection id="confidence" className="bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Create with Confidence
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Explore the possibilities. Our products elevate both residential and commercial environments with unparalleled style and quality.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {confidenceItems.map((item, index) => (
            <div key={index} className="relative aspect-[4/3] w-full overflow-hidden rounded-lg group">
              <Image
                src={item.src}
                alt={item.alt}
                data-ai-hint={item.hint}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <h3 className="text-primary-foreground font-headline text-2xl font-bold">{item.title}</h3>
                <p className="text-primary-foreground/90 mt-2 text-base">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Confidence;
