'use client';

import { useTranslations } from 'next-intl';
import { ScrollReveal } from '@/components/common/ScrollReveal';
import Image from 'next/image';
import { Maximize2 } from 'lucide-react';

export function GalleryGrid() {
  const t = useTranslations('Index');

  const images = [
    { id: '1', src: '/images/gallery/1.png', colSpan: 'md:col-span-2', rowSpan: 'md:row-span-2' },
    { id: '2', src: '/images/gallery/2.png', colSpan: 'md:col-span-1', rowSpan: 'md:row-span-1' },
    { id: '3', src: '/images/gallery/3.png', colSpan: 'md:col-span-1', rowSpan: 'md:row-span-1' },
    { id: '4', src: '/images/gallery/4.png', colSpan: 'md:col-span-1', rowSpan: 'md:row-span-1' },
    { id: '5', src: '/images/gallery/5.png', colSpan: 'md:col-span-1', rowSpan: 'md:row-span-1' },
  ];

  return (
    <section className="py-20 bg-[#F4F4F4]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
              {t('gallery')}
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
          {images.map((image, index) => (
            <ScrollReveal 
              key={image.id} 
              delay={index * 0.1}
              className={`relative group rounded-xl overflow-hidden cursor-pointer ${image.colSpan} ${image.rowSpan}`}
            >
              <Image 
                src={image.src} 
                alt="Gallery image" 
                fill 
                className="object-cover group-hover:scale-110 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-secondary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Maximize2 className="w-8 h-8 text-white" />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
