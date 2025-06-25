import type { Product, Testimonial } from './types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Oceanic Crystal Mosaic',
    category: 'Mosaics',
    color: 'Blue',
    material: 'Crystal',
    image: 'https://images.unsplash.com/photo-1700574064768-cfc4bbb55ca1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMnx8bW9zYWljJTIwdGlsZXN8ZW58MHx8fHwxNzUwODcxMDg4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    hint: 'blue mosaic'
  },
  {
    id: '2',
    name: 'Marble Vein Glass Tile',
    category: 'Tiles',
    color: 'White',
    material: 'Glass',
    image: 'https://images.unsplash.com/photo-1731045521188-5cd9014f88d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw3fHxtb3NhaWMlMjB0aWxlc3xlbnwwfHx8fDE3NTA4NzEwODh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    hint: 'white tile'
  },
  {
    id: '3',
    name: 'Floating Stone Basin',
    category: 'Basins',
    color: 'Gray',
    material: 'Stone',
    image: 'https://images.unsplash.com/photo-1616484341375-d1dfd4fe741a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxzdG9uZSUyMGJhdGhyb29tJTIwc2lua3xlbnwwfHx8fDE3MTkzMzc5ODd8MA&ixlib=rb-4.0.3&q=80&w=1080',
    hint: 'stone sink'
  },
  {
    id: '4',
    name: 'Minimalist Oak Vanity',
    category: 'Furnishings',
    color: 'Brown',
    material: 'Wood',
    image: 'https://images.unsplash.com/photo-1600124896223-7a4cf8a488c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwd29vZCUyMGJhdGhyb29tJTIwdmFuaXR5fGVufDB8fHx8MTcxOTMzODA1MHww&ixlib=rb-4.0.3&q=80&w=1080',
    hint: 'wood vanity'
  },
  {
    id: '5',
    name: 'Emerald Green Subway Tile',
    category: 'Tiles',
    color: 'Green',
    material: 'Glass',
    image: 'https://images.unsplash.com/photo-1617463229838-34f75a698544?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxncmVlbiUyMHN1YndheSUyMHRpbGV8ZW58MHx8fHwxNzE5MzM4MDk5fDA&ixlib=rb-4.0.3&q=80&w=1080',
    hint: 'green tile'
  },
  {
    id: '6',
    name: 'Golden Amber Mosaic Sheet',
    category: 'Mosaics',
    color: 'Gold',
    material: 'Crystal',
    image: 'https://images.unsplash.com/photo-1593322142270-444439798547?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxnb2xkJTIwbW9zYWljJTIwdGlsZXxlbnwwfHx8fDE3MTkzMzgxMzZ8MA&ixlib=rb-4.0.3&q=80&w=1080',
    hint: 'gold mosaic'
  },
  {
    id: '7',
    name: 'Vessel Ceramic Bowl',
    category: 'Basins',
    color: 'Black',
    material: 'Ceramic',
    image: 'https://images.unsplash.com/photo-1590480063595-65a50787a711?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxibGFjayUyMGNlcmFtaWMlMjB2ZXNzZWwlMjBzaW5rfGVufDB8fHx8MTcxOTMzODE4NHww&ixlib=rb-4.0.3&q=80&w=1080',
    hint: 'black sink'
  },
  {
    id: '8',
    name: 'Chrome Finish Faucet',
    category: 'Furnishings',
    color: 'Silver',
    material: 'Metal',
    image: 'https://images.unsplash.com/photo-1617103994320-e6091a1a7c36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjaHJvbWUlMjBmYXVjZXR8ZW58MHx8fHwxNzE5MzM4MjMxfDA&ixlib=rb-4.0.3&q=80&w=1080',
    hint: 'chrome faucet'
  },
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    quote: "The crystal mosaics from STYLEON transformed our hotel lobby into a breathtaking space. The quality and brilliance are unmatched.",
    name: 'Sarah L.',
    company: 'Grand Vista Hotels',
  },
  {
    id: '2',
    quote: "Working with STYLEON's team on a custom tile design was a seamless experience. Their attention to detail and craftsmanship exceeded our expectations.",
    name: 'Michael B.',
    company: 'Prestige Architecture',
  },
  {
    id: '3',
    quote: "The glass wash basins are the centerpiece of our new bathroom designs. Elegant, modern, and incredibly durable. Our clients love them!",
    name: 'Jessica P.',
    company: 'Urban Nest Interiors',
  },
];
