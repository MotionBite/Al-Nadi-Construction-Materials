'use client';

import { useTranslations } from 'next-intl';
import { ScrollReveal } from '@/components/common/ScrollReveal';
import { Link } from '@/i18n/routing';
import { Button } from '@/components/ui/button';
import { ShoppingCart, MessageCircle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';

export function FeaturedProducts() {
  const t = useTranslations('Index');

  // Hardcoded for now
  const products = [
    { id: '1', title: 'Portland Cement 50kg', price: 'SAR 15.00', image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=600&auto=format&fit=crop', stock: true },
    { id: '2', title: 'Steel Rebar 12mm', price: 'SAR 2,500/Ton', image: 'https://images.unsplash.com/photo-1533625414321-df6dfa35c596?q=80&w=600&auto=format&fit=crop', stock: true },
    { id: '3', title: 'Concrete Blocks 20x20x40', price: 'SAR 2.50/pc', image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=600&auto=format&fit=crop', stock: true },
    { id: '4', title: 'Dewalt Hammer Drill', price: 'SAR 450.00', image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?q=80&w=600&auto=format&fit=crop', stock: false },
  ];

  return (
    <section className="py-20 bg-[#F4F4F4]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
                {t('featuredProducts')}
              </h2>
              <div className="w-24 h-1 bg-primary"></div>
            </ScrollReveal>
          </div>
          <ScrollReveal delay={0.2} direction="left">
            <Link href="/products">
              <Button variant="outline" className="mt-4 md:mt-0 border-primary text-primary hover:bg-primary hover:text-white">
                View All Products
              </Button>
            </Link>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <ScrollReveal key={product.id} delay={index * 0.1}>
              <div className="bg-white group rounded-lg overflow-hidden border border-border hover:shadow-xl transition-all duration-300">
                <div className="relative h-64 overflow-hidden bg-gray-100">
                  <Image 
                    src={product.image} 
                    alt={product.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    {product.stock ? (
                      <Badge className="bg-success text-white">In Stock</Badge>
                    ) : (
                      <Badge variant="destructive">Out of Stock</Badge>
                    )}
                  </div>
                </div>
                <div className="p-5">
                  <Link href={`/products/${product.id}`}>
                    <h3 className="font-bold text-lg text-secondary mb-2 hover:text-primary transition-colors line-clamp-2">
                      {product.title}
                    </h3>
                  </Link>
                  <p className="text-primary font-bold text-xl mb-4">{product.price}</p>
                  
                  <div className="flex gap-2">
                    <Button className="flex-1 bg-secondary text-white hover:bg-primary" size="sm">
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Add to Quote
                    </Button>
                    <Button variant="outline" size="icon" className="border-green-500 text-green-500 hover:bg-green-500 hover:text-white shrink-0">
                      <MessageCircle className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
