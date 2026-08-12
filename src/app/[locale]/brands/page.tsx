'use client';

import { useTranslations } from 'next-intl';
import { ScrollReveal } from '@/components/common/ScrollReveal';

export default function BrandsPage() {
  const t = useTranslations('Index');

  const brands = [
    { id: '1', name: 'Sika', logo: '/images/brands/sika.png' },
    { id: '2', name: 'Bosch', logo: '/images/brands/bosch.png' },
    { id: '3', name: 'Makita', logo: '/images/brands/makita.png' },
    { id: '4', name: 'Stanley', logo: '/images/brands/stanley.png' },
    { id: '5', name: 'DeWalt', logo: '/images/brands/dewalt.png' },
    { id: '6', name: 'Caterpillar', logo: '/images/brands/caterpillar.png' },
  ];

  return (
    <div className="py-20 bg-background">
      <div className="container mx-auto px-4">
        
        <ScrollReveal>
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-4">{t('ourBrands')}</h1>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {brands.map((brand, index) => (
            <ScrollReveal key={brand.id} delay={index * 0.1}>
              <div className="bg-white border border-black/5 rounded-2xl p-2 h-40 flex items-center justify-center hover:border-primary/20 transition-all duration-300 overflow-hidden">
                <img 
                  src={brand.logo} 
                  alt={brand.name} 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </div>
  );
}
