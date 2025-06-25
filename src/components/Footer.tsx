import { Mail, Phone, MapPin } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  const socialLinks = [
    { name: 'Facebook', href: '#' },
    { name: 'Instagram', href: '#' },
    { name: 'Pinterest', href: '#' },
  ];

  return (
    <footer className="bg-card text-card-foreground">
      <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="flex flex-col items-center lg:items-start">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-bold font-headline">STYLEON ART FACTORY</span>
            </Link>
            <p className="text-muted-foreground text-center lg:text-left max-w-xs">
              Exquisite crystal mosaics, tiles, and bathroom furnishings to transform your space.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:col-span-2">
            <div className="text-center sm:text-left">
              <p className="font-headline text-lg font-semibold">Products</p>
              <ul className="mt-4 space-y-2">
                <li><Link href="#products" className="hover:text-primary transition-colors">Crystal Mosaics</Link></li>
                <li><Link href="#products" className="hover:text-primary transition-colors">Glass Tiles</Link></li>
                <li><Link href="#products" className="hover:text-primary transition-colors">Wash Basins</Link></li>
                <li><Link href="#products" className="hover:text-primary transition-colors">Bathroom Furnishings</Link></li>
              </ul>
            </div>
            <div className="text-center sm:text-left">
              <p className="font-headline text-lg font-semibold">Contact Us</p>
              <ul className="mt-4 space-y-3">
                <li className="flex items-center justify-center sm:justify-start gap-2">
                  <Phone className="h-4 w-4" />
                  <span>+1 (234) 567-890</span>
                </li>
                <li className="flex items-center justify-center sm:justify-start gap-2">
                  <Mail className="h-4 w-4" />
                  <span>info@styleon.art</span>
                </li>
                <li className="flex items-center justify-center sm:justify-start gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>123 Artistry Ave, Design City</span>
                </li>
              </ul>
            </div>
            <div className="text-center sm:text-left">
              <p className="font-headline text-lg font-semibold">Follow Us</p>
              <ul className="mt-4 space-y-2">
                {socialLinks.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} STYLEON ART FACTORY. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
