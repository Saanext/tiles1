import type { Product, Testimonial } from './types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Oceanic Crystal Mosaic',
    category: 'Mosaics',
    color: 'Blue',
    material: 'Crystal',
    image: 'https://www.styleonartfactory.com/wp-content/uploads/2018/05/CT01GB-247x296.jpg',
    hint: 'blue mosaic'
  },
  {
    id: '2',
    name: 'Marble Vein Glass Tile',
    category: 'Tiles',
    color: 'White',
    material: 'Glass',
    image: 'https://images.unsplash.com/photo-1602750600155-1970ac3ad999?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxtb3NpYyUyMHRpbGVzfGVufDB8fHx8MTc1MDg3NjczMXww&ixlib=rb-4.1.0&q=80&w=1080',
    hint: 'white tile'
  },
  {
    id: '3',
    name: 'Floating Stone Basin',
    category: 'Basins',
    color: 'Gray',
    material: 'Stone',
    image: 'https://images.unsplash.com/photo-1731045521151-07a0fe502009?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHxtb3NhaWMlMjB0aWxlc3xlbnwwfHx8fDE3NTA4NzEwODh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    hint: 'stone sink'
  },
  {
    id: '4',
    name: 'Minimalist Oak Vanity',
    category: 'Furnishings',
    color: 'Brown',
    material: 'Wood',
    image: 'https://images.unsplash.com/photo-1730835358693-25dc65c50884?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHxtb3NpYyUyMHRpbGVzfGVufDB8fHx8MTc1MDg3NjczMXww&ixlib=rb-4.1.0&q=80&w=1080',
    hint: 'wood vanity'
  },
  {
    id: '5',
    name: 'Emerald Green Subway Tile',
    category: 'Tiles',
    color: 'Green',
    material: 'Glass',
    image: 'https://images.unsplash.com/photo-1672601030056-30eaee99aab7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxOHx8bW9zYWljfGVufDB8fHx8MTc1MDg3NzMwNXww&ixlib=rb-4.1.0&q=80&w=1080',
    hint: 'green tile'
  },
  {
    id: '6',
    name: 'Golden Amber Mosaic Sheet',
    category: 'Mosaics',
    color: 'Gold',
    material: 'Crystal',
    image: 'https://images.unsplash.com/photo-1541471943749-e5976783f6c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHx0aWxlc3xlbnwwfHx8fDE3NTA4NzczNzd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    hint: 'gold mosaic'
  },
  {
    id: '7',
    name: 'Vessel Ceramic Bowl',
    category: 'Basins',
    color: 'Black',
    material: 'Ceramic',
    image: 'https://images.unsplash.com/photo-1582077543465-c48d74d58f7a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxtb3NpYWMlMjB0aWxlc3xlbnwwfHx8fDE3NTA4Nzc0NDR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    hint: 'black sink'
  },
  {
    id: '8',
    name: 'Chrome Finish Faucet',
    category: 'Furnishings',
    color: 'Silver',
    material: 'Metal',
    image: 'https://www.styleonartfactory.com/wp-content/uploads/2018/05/CT01GB-247x296.jpg',
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
