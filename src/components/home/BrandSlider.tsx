'use client';

import { useTranslations } from 'next-intl';
import { ScrollReveal } from '@/components/common/ScrollReveal';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

export function BrandSlider() {
  const t = useTranslations('Index');

  // Hardcoded placeholders
  const brands = [
    { id: '1', name: 'Sika', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Sika-logo.svg' },
    { id: '2', name: 'Bosch', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/16/Bosch-Logo.svg' },
    { id: '3', name: 'Makita', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/17/Makita_Logo.svg' },
    { id: '4', name: 'Stanley', logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Stanley_logo.svg' },
    { id: '5', name: 'DeWalt', logo: 'https://upload.wikimedia.org/wikipedia/commons/e/ec/DeWalt_Logo.svg' },
    { id: '6', name: 'National Paints', logo: 'https://nationalpaints.com/wp-content/uploads/2021/04/national-paints-logo.png' },
  ];

  return (
    <section className="py-16 bg-white border-y border-border">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-2xl md:text-3xl font-bold text-center text-secondary mb-12">
            {t('ourBrands')}
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={2}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
              1024: { slidesPerView: 5 },
            }}
            className="w-full"
          >
            {brands.map((brand) => (
              <SwiperSlide key={brand.id}>
                <div className="h-24 px-4 flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                  {/* Note: In a real app we would use next/image here */}
                  <img 
                    src={brand.logo} 
                    alt={brand.name} 
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </ScrollReveal>
      </div>
    </section>
  );
}
