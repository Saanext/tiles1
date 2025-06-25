import Image from 'next/image';
import AnimatedSection from '../AnimatedSection';
import { Card, CardContent } from '../ui/card';
import { Gem, Palette, ShieldCheck, Truck } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Gem className="h-8 w-8 text-primary" />,
      title: 'Premium Quality',
      description: 'We use the finest materials to ensure durability and a luxurious finish for all our products.',
    },
    {
      icon: <Palette className="h-8 w-8 text-primary" />,
      title: 'Custom Designs',
      description: 'Our team collaborates with you to create bespoke designs that perfectly match your vision.',
    },
    {
      icon: <ShieldCheck className="h-8 w-8 text-primary" />,
      title: 'Expert Craftsmanship',
      description: 'Our artisans possess decades of experience, blending traditional techniques with modern innovation.',
    },
    {
      icon: <Truck className="h-8 w-8 text-primary" />,
      title: 'Global Distribution',
      description: 'We deliver our exquisite products worldwide, ensuring safe and timely arrival.',
    },
  ];

  return (
    <AnimatedSection id="about" className="bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              A Legacy of Elegance & Innovation
            </h2>
            <p className="text-muted-foreground text-lg">
              At STYLEON ART FACTORY, we are dedicated to manufacturing and distributing a wide range of Crystal glass mosaics, Glass tiles, Glass wash basin counters & bowls, and bathroom furnishing products. Our mission is to blend artistic expression with functional design, transforming spaces into works of art.
            </p>
            <p className="text-muted-foreground">
              With a commitment to quality and an eye for the latest trends, we provide products that are not only beautiful but also built to last. Explore our collections and discover the perfect elements to elevate your home or project.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="shadow-none hover:bg-accent transition-colors">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  {feature.icon}
                  <h3 className="mt-4 mb-2 font-headline text-xl font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default About;
