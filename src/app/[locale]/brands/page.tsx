'use client';

import { useTranslations } from 'next-intl';
import { ScrollReveal } from '@/components/common/ScrollReveal';

export default function BrandsPage() {
  const t = useTranslations('Index');

  const brands = [
    { id: '1', name: 'Sika', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Sika-logo.svg' },
    { id: '2', name: 'Bosch', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/16/Bosch-Logo.svg' },
    { id: '3', name: 'Makita', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/17/Makita_Logo.svg' },
    { id: '4', name: 'Stanley', logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Stanley_logo.svg' },
    { id: '5', name: 'DeWalt', logo: 'https://upload.wikimedia.org/wikipedia/commons/e/ec/DeWalt_Logo.svg' },
    { id: '6', name: 'National Paints', logo: 'https://nationalpaints.com/wp-content/uploads/2021/04/national-paints-logo.png' },
  ];

  return (
    <div className="py-20 bg-background">
      <div className="container mx-auto px-4">
        
        <ScrollReveal>
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-4">{t('ourBrands')}</h1>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {brands.map((brand, index) => (
            <ScrollReveal key={brand.id} delay={index * 0.1}>
              <div className="bg-white border border-border rounded-xl p-8 h-40 flex items-center justify-center hover:shadow-lg transition-shadow">
                <img 
                  src={brand.logo} 
                  alt={brand.name} 
                  className="max-h-full max-w-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </div>
  );
}
