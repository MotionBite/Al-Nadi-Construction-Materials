'use client';

import { useTranslations } from 'next-intl';
import { ScrollReveal } from '@/components/common/ScrollReveal';
import { ShieldCheck, Truck, Percent, Award, Headset, HardHat } from 'lucide-react';

export function WhyChooseUs() {
  const t = useTranslations('Index');

  const reasons = [
    { icon: Award, title: 'High Quality', desc: 'Premium materials sourced from certified manufacturers.' },
    { icon: Truck, title: 'Fast Delivery', desc: 'Reliable logistics network ensuring on-time site delivery.' },
    { icon: Percent, title: 'Wholesale Prices', desc: 'Competitive pricing structure for contractors and bulk orders.' },
    { icon: ShieldCheck, title: 'Trusted Brands', desc: 'Authorized distributor for major global and local brands.' },
    { icon: Headset, title: 'Local Support', desc: 'Dedicated customer service team based in Arar.' },
    { icon: HardHat, title: 'Engineering Assistance', desc: 'Technical guidance for material selection and BOQs.' },
  ];

  return (
    <section className="py-20 bg-secondary text-white relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/20 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3"></div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="text-center mb-16">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('whyChooseUs')}
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <ScrollReveal key={index} delay={index * 0.1} className="h-full">
              <div className="bg-white/5 border border-white/10 p-8 rounded-lg hover:bg-white/10 transition-colors h-full flex flex-col">
                <div className="w-14 h-14 bg-primary/20 rounded-lg flex items-center justify-center mb-6">
                  <reason.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{reason.title}</h3>
                <p className="text-white/70 leading-relaxed flex-grow">
                  {reason.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
