export type Product = {
  id: string;
  name: string;
  category: 'Mosaics' | 'Tiles' | 'Basins' | 'Furnishings';
  color: string;
  material: string;
  image: string;
  hint: string;
};

export type Testimonial = {
  id:string;
  quote: string;
  name: string;
  company: string;
};
