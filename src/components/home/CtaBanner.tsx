'use client';

import { useTranslations } from 'next-intl';
import { ScrollReveal } from '@/components/common/ScrollReveal';
import { Button } from '@/components/ui/button';
import { Phone, MessageCircle } from 'lucide-react';
import { Link } from '@/i18n/routing';

export function CtaBanner() {
  const t = useTranslations('Index');

  return (
    <section className="py-20 relative overflow-hidden bg-primary text-primary-foreground">
      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="brickPattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M0,0 h60 v30 h-60 Z M30,30 h60 v30 h-60 Z" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#brickPattern)" />
        </svg>
      </div>

      <div className="container relative z-10 mx-auto px-4 text-center">
        <ScrollReveal>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white drop-shadow-md">
            {t('ctaTitle')}
          </h2>
          <p className="text-xl md:text-2xl mb-10 text-white/90 max-w-2xl mx-auto font-light">
            {t('ctaSubtitle')}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/quote" className="w-full sm:w-auto">
            <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-lg bg-secondary text-white hover:bg-secondary/90 shadow-xl">
              {t('requestQuote')}
            </Button>
          </Link>
          <a href="https://wa.me/966146628280" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
            <Button size="lg" variant="outline" className="w-full sm:w-auto h-14 px-8 text-lg border-white text-white hover:bg-white hover:text-primary shadow-xl">
              <MessageCircle className="w-5 h-5 mr-2" />
              {t('whatsapp')}
            </Button>
          </a>
          <a href="tel:+966146628280" className="w-full sm:w-auto">
            <Button size="lg" variant="ghost" className="w-full sm:w-auto h-14 px-8 text-lg text-white hover:bg-white/20">
              <Phone className="w-5 h-5 mr-2" />
              {t('callNow')}
            </Button>
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
