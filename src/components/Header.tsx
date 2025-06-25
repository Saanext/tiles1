'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Gem, Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#products', label: 'Products' },
    { href: '#design-tool', label: 'AI Designer' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header
      className={cn(
        'sticky top-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-card shadow-md' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <Gem className="h-8 w-8 text-primary" />
          <span className="text-xl font-bold font-headline tracking-wider">STYLEON</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-medium hover:text-primary transition-colors">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="md:hidden">
          <Button onClick={() => setIsMenuOpen(true)} variant="ghost" size="icon">
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm md:hidden" onClick={() => setIsMenuOpen(false)}>
            <div className="fixed top-0 right-0 h-full w-4/5 max-w-xs bg-card p-6 shadow-xl" onClick={(e) => e.stopPropagation()}>
                <div className="flex justify-between items-center mb-8">
                    <Link href="/" className="flex items-center gap-2">
                        <Gem className="h-8 w-8 text-primary" />
                        <span className="text-xl font-bold font-headline">STYLEON</span>
                    </Link>
                    <Button onClick={() => setIsMenuOpen(false)} variant="ghost" size="icon">
                        <X className="h-6 w-6" />
                    </Button>
                </div>
                <nav className="flex flex-col gap-6">
                    {navLinks.map((link) => (
                    <Link key={link.href} href={link.href} onClick={() => setIsMenuOpen(false)} className="text-lg font-medium hover:text-primary transition-colors">
                        {link.label}
                    </Link>
                    ))}
                </nav>
            </div>
        </div>
      )}
    </header>
  );
};

export default Header;
