'use client';

import { useTranslations } from 'next-intl';
import { ScrollReveal } from '@/components/common/ScrollReveal';
import { Link } from '@/i18n/routing';
import { 
  Building2, 
  Hammer, 
  Wrench, 
  Droplets, 
  HardHat, 
  Zap, 
  Trees, 
  PaintBucket 
} from 'lucide-react';

export function CategoryGrid() {
  const t = useTranslations('Index');

  // Hardcoded for now, will come from DB later
  const categories = [
    { id: '1', title: 'Cement & Masonry', icon: Building2, slug: 'cement' },
    { id: '2', title: 'Steel & Metals', icon: Hammer, slug: 'steel' },
    { id: '3', title: 'Hardware', icon: Wrench, slug: 'hardware' },
    { id: '4', title: 'Plumbing', icon: Droplets, slug: 'plumbing' },
    { id: '5', title: 'Safety Gear', icon: HardHat, slug: 'safety' },
    { id: '6', title: 'Power Tools', icon: Zap, slug: 'tools' },
    { id: '7', title: 'Timber & Wood', icon: Trees, slug: 'timber' },
    { id: '8', title: 'Chemicals', icon: PaintBucket, slug: 'chemicals' },
  ];

  return (
    <section 
      className="py-20 relative bg-cover bg-center bg-fixed"
      style={{ backgroundImage: "url('/images/hero-bg.png')" }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-slate-900/80 z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {t('categoriesTitle')}
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {categories.map((category, index) => (
            <ScrollReveal key={category.id} delay={index * 0.1} direction="up">
              <Link href={`/categories/${category.slug}`}>
                <div className="group relative bg-white border border-border p-6 h-48 flex flex-col items-center justify-center text-center transition-all duration-300 hover:border-primary hover:shadow-lg hover:-translate-y-1">
                  <div className="w-16 h-16 bg-background rounded-full flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <category.icon className="w-8 h-8 text-secondary group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-semibold text-secondary group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>
                  {/* Decorative corner accent */}
                  <div className="absolute top-0 right-0 w-8 h-8 bg-primary/10 rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
