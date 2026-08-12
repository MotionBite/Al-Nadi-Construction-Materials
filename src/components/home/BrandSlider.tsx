'use client';

import { useTranslations, useLocale } from 'next-intl';
import { ScrollReveal } from '@/components/common/ScrollReveal';

export function BrandSlider() {
  const t = useTranslations('Index');
  const locale = useLocale();
  const isRTL = locale === 'ar';

  // Hardcoded placeholders
  const brands = [
    { id: '1', name: 'Sika', logo: '/images/brands/sika.png' },
    { id: '2', name: 'Bosch', logo: '/images/brands/bosch.png' },
    { id: '3', name: 'Makita', logo: '/images/brands/makita.png' },
    { id: '4', name: 'Stanley', logo: '/images/brands/stanley.png' },
    { id: '5', name: 'DeWalt', logo: '/images/brands/dewalt.png' },
    { id: '6', name: 'Caterpillar', logo: '/images/brands/caterpillar.png' },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-secondary/5 border-y border-border overflow-hidden relative">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
      
      <div className="container mx-auto px-4 mb-14 relative z-10">
        <ScrollReveal>
          <div className="text-center">
            <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">Trusted Partners</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-secondary">
              {t('ourBrands')}
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mt-6 rounded-full"></div>
          </div>
        </ScrollReveal>
      </div>

      <ScrollReveal delay={0.2}>
        <div className="flex overflow-hidden relative group w-full before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-[100px] before:bg-gradient-to-r before:from-white before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-[100px] after:bg-gradient-to-l after:from-secondary/5 after:to-transparent sm:before:w-[200px] sm:after:w-[200px]">
          <div 
            className={`flex w-max ${isRTL ? 'animate-marquee-rtl' : 'animate-marquee'} group-hover:[animation-play-state:paused]`}
          >
            {/* Double the array for smooth infinite loop */}
            {[...brands, ...brands, ...brands].map((brand, index) => (
              <div 
                key={`${brand.id}-${index}`} 
                className="h-28 w-[160px] sm:h-32 sm:w-[180px] mx-3 sm:mx-4 flex items-center justify-center bg-white rounded-2xl border border-black/5 hover:border-primary/20 transition-all duration-300 shrink-0 overflow-hidden p-1"
              >
                <img 
                  src={brand.logo} 
                  alt={brand.name} 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
