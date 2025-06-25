import AnimatedSection from '../AnimatedSection';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Button } from '../ui/button';
import { Clock, Mail, MapPin, Phone } from 'lucide-react';

const ContactForm = () => {
  return (
    <form className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" placeholder="Your Name" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="your.email@example.com" />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="subject">Subject</Label>
        <Input id="subject" placeholder="Inquiry about..." />
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea id="message" placeholder="Your message or inquiry..." rows={5} />
      </div>
      <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">Send Message</Button>
    </form>
  )
}

const Contact = () => {
  const contactInfo = [
    { icon: <MapPin className="h-6 w-6 text-primary" />, title: "Showroom", lines: ["123 Artistry Ave", "Design City, DC 12345"] },
    { icon: <Clock className="h-6 w-6 text-primary" />, title: "Business Hours", lines: ["Mon - Fri: 9am - 6pm", "Sat: 10am - 4pm"] },
    { icon: <Phone className="h-6 w-6 text-primary" />, title: "Phone", lines: ["Sales: +1 (234) 567-890", "Support: +1 (234) 567-891"] },
    { icon: <Mail className="h-6 w-6 text-primary" />, title: "Email", lines: ["info@styleon.art", "orders@styleon.art"] },
  ];

  return (
    <AnimatedSection id="contact" className="bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Get In Touch</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            We're here to help. Whether you have a question about our products, a custom design request, or need support, our team is ready to assist you.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 space-y-8">
            {contactInfo.map(item => (
              <div key={item.title} className="flex gap-4">
                <div className="flex-shrink-0">{item.icon}</div>
                <div>
                  <h3 className="text-xl font-headline font-semibold">{item.title}</h3>
                  {item.lines.map(line => <p key={line} className="text-muted-foreground">{line}</p>)}
                </div>
              </div>
            ))}
          </div>
          <div className="lg:col-span-3">
            <Card>
              <CardHeader>
                <CardTitle className="font-headline text-2xl">Send us an Inquiry</CardTitle>
                <CardDescription>Fill out the form below and we'll get back to you shortly.</CardDescription>
              </CardHeader>
              <CardContent>
                <ContactForm />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Contact;
