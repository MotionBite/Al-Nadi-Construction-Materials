'use client';

import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { Link } from '@/i18n/routing';
import { ScrollReveal } from '@/components/common/ScrollReveal';
import { ArrowRight, ArrowLeft, Truck, PackageCheck, ShieldCheck, Clock } from 'lucide-react';
import { useLocale } from 'next-intl';
export function HeroSection() {
  const t = useTranslations('Index');
  const locale = useLocale();
  const isRtl = locale === 'ar';
  
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  const features = [
    { icon: Truck, label: t('delivery') },
    { icon: PackageCheck, label: t('inventory') },
    { icon: ShieldCheck, label: t('trusted') },
    { icon: Clock, label: t('experience') },
  ];

  return (
    <section className="relative h-[85vh] min-h-[600px] flex items-center overflow-hidden">
      {/* Background Video & Overlay */}
      <div className="absolute inset-0 z-0 bg-black">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-3xl">
          <ScrollReveal delay={0.1}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
              {t('title')}
            </h1>
          </ScrollReveal>
          
          <ScrollReveal delay={0.3}>
            <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-2xl font-light">
              {t('subtitle')}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.5} className="flex flex-wrap gap-4 mb-16">
            <Link href="/products">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground h-14 px-8 text-lg rounded-none">
                {t('shopNow')} <ArrowIcon className="ml-2 mr-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/quote">
              <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white/20 h-14 px-8 text-lg rounded-none backdrop-blur-sm">
                {t('requestQuote')}
              </Button>
            </Link>
          </ScrollReveal>

          {/* Features Strip */}
          <ScrollReveal delay={0.7} className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 pt-8 border-t border-white/20">
            {features.map((feature, idx) => (
              <div key={idx} className="flex items-center gap-3 text-white">
                <feature.icon className="h-6 w-6 text-primary shrink-0" />
                <span className="font-medium text-sm md:text-base">{feature.label}</span>
              </div>
            ))}
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
