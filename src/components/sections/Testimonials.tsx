import AnimatedSection from '../AnimatedSection';
import { testimonials } from '@/lib/data';
import { Card, CardContent } from '../ui/card';
import { Star } from 'lucide-react';

const Testimonials = () => {
  return (
    <AnimatedSection id="testimonials" className="bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">What Our Clients Say</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            We take pride in our work, but don't just take our word for it. Here's what our valued clients have to say about their experience with STYLEON.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="flex flex-col">
              <CardContent className="p-6 flex-grow flex flex-col justify-between">
                <div>
                    <div className="flex text-accent mb-4">
                        {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" className="w-5 h-5" />)}
                    </div>
                    <blockquote className="text-lg text-card-foreground italic border-l-4 border-primary pl-4">
                    "{testimonial.quote}"
                    </blockquote>
                </div>
                <footer className="mt-6">
                  <p className="font-headline text-base font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                </footer>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Testimonials;
