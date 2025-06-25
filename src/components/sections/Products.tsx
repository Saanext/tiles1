"use client";

import { useState, useMemo } from 'react';
import Image from 'next/image';
import { products as allProducts } from '@/lib/data';
import type { Product } from '@/lib/types';
import AnimatedSection from '../AnimatedSection';
import { Card, CardContent } from '../ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { cn } from '@/lib/utils';
import { Badge } from '../ui/badge';
import { Bath, BrickWall, Gem, Palette } from 'lucide-react';

const categories = ['All', 'Mosaics', 'Tiles', 'Basins', 'Furnishings'];
const materials = ['All', 'Glass', 'Crystal', 'Ceramic', 'Stone'];

const categoryIcons = {
  Mosaics: <Gem className="h-4 w-4" />,
  Tiles: <BrickWall className="h-4 w-4" />,
  Basins: <Bath className="h-4 w-4" />,
  Furnishings: <Palette className="h-4 w-4" />,
};


const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedMaterial, setSelectedMaterial] = useState('All');

  const filteredProducts = useMemo(() => {
    return allProducts.filter((product) => {
      const categoryMatch = selectedCategory === 'All' || product.category === selectedCategory;
      const materialMatch = selectedMaterial === 'All' || product.material === selectedMaterial;
      return categoryMatch && materialMatch;
    });
  }, [selectedCategory, selectedMaterial]);

  return (
    <AnimatedSection id="products" className="bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Our Collections</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Discover our curated selection of high-quality products, designed to inspire and elevate any interior.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-full sm:w-[200px]">
              <SelectValue placeholder="Filter by Category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category} value={category}>{category}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select value={selectedMaterial} onValueChange={setSelectedMaterial}>
            <SelectTrigger className="w-full sm:w-[200px]">
              <SelectValue placeholder="Filter by Material" />
            </SelectTrigger>
            <SelectContent>
              {materials.map((material) => (
                <SelectItem key={material} value={material}>{material}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="overflow-hidden group transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <CardContent className="p-0">
                <div className="relative aspect-square">
                  <Image
                    src={product.image}
                    alt={product.name}
                    data-ai-hint={product.hint}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <Badge variant="secondary" className="mb-2 flex items-center gap-1.5 w-fit">
                    {categoryIcons[product.category as keyof typeof categoryIcons]}
                    {product.category}
                  </Badge>
                  <h3 className="font-headline text-lg font-semibold truncate">{product.name}</h3>
                  <p className="text-sm text-muted-foreground">{product.material}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Products;
