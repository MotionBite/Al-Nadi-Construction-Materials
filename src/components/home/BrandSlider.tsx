'use client';

import { useTranslations, useLocale } from 'next-intl';
import { ScrollReveal } from '@/components/common/ScrollReveal';

export function BrandSlider() {
  const t = useTranslations('Index');
  const locale = useLocale();
  const isRTL = locale === 'ar';

  // Hardcoded placeholders
  const brands = [
    { id: '1', name: 'Sika', logo: 'https://placehold.co/400x200?text=Sika' },
    { id: '2', name: 'Bosch', logo: 'https://placehold.co/400x200?text=Bosch' },
    { id: '3', name: 'Makita', logo: 'https://placehold.co/400x200?text=Makita' },
    { id: '4', name: 'Stanley', logo: 'https://placehold.co/400x200?text=Stanley' },
    { id: '5', name: 'DeWalt', logo: 'https://placehold.co/400x200?text=DeWalt' },
    { id: '6', name: 'National Paints', logo: 'https://placehold.co/400x200?text=National+Paints' },
  ];

  return (
    <section className="py-16 bg-white border-y border-border overflow-hidden">
      <div className="container mx-auto px-4 mb-12">
        <ScrollReveal>
          <h2 className="text-2xl md:text-3xl font-bold text-center text-secondary">
            {t('ourBrands')}
          </h2>
        </ScrollReveal>
      </div>

      <ScrollReveal delay={0.2}>
        <div className="flex overflow-hidden relative group w-full">
          <div 
            className={`flex w-max ${isRTL ? 'animate-marquee-rtl' : 'animate-marquee'} group-hover:[animation-play-state:paused]`}
          >
            {/* Double the array for smooth infinite loop */}
            {[...brands, ...brands].map((brand, index) => (
              <div 
                key={`${brand.id}-${index}`} 
                className="h-24 w-[200px] sm:w-[250px] mx-8 flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 shrink-0"
              >
                <img 
                  src={brand.logo} 
                  alt={brand.name} 
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
