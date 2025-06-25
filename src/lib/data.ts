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
    image: 'https://www.styleonartfactory.com/wp-content/uploads/2018/05/CT01GB-247x296.jpg',
    hint: 'white tile'
  },
  {
    id: '3',
    name: 'Floating Stone Basin',
    category: 'Basins',
    color: 'Gray',
    material: 'Stone',
    image: 'https://www.styleonartfactory.com/wp-content/uploads/2018/05/CT01GB-247x296.jpg',
    hint: 'stone sink'
  },
  {
    id: '4',
    name: 'Minimalist Oak Vanity',
    category: 'Furnishings',
    color: 'Brown',
    material: 'Wood',
    image: 'https://www.styleonartfactory.com/wp-content/uploads/2018/05/CT01GB-247x296.jpg',
    hint: 'wood vanity'
  },
  {
    id: '5',
    name: 'Emerald Green Subway Tile',
    category: 'Tiles',
    color: 'Green',
    material: 'Glass',
    image: 'https://www.styleonartfactory.com/wp-content/uploads/2018/05/CT01GB-247x296.jpg',
    hint: 'green tile'
  },
  {
    id: '6',
    name: 'Golden Amber Mosaic Sheet',
    category: 'Mosaics',
    color: 'Gold',
    material: 'Crystal',
    image: 'https://www.styleonartfactory.com/wp-content/uploads/2018/05/CT01GB-247x296.jpg',
    hint: 'gold mosaic'
  },
  {
    id: '7',
    name: 'Vessel Ceramic Bowl',
    category: 'Basins',
    color: 'Black',
    material: 'Ceramic',
    image: 'https://www.styleonartfactory.com/wp-content/uploads/2018/05/CT01GB-247x296.jpg',
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
