'use client';

import { useTranslations, useLocale } from 'next-intl';
import { ScrollReveal } from '@/components/common/ScrollReveal';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { Star, Quote } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/pagination';

export function Testimonials() {
  const t = useTranslations('Index');
  const locale = useLocale();
  const isRtl = locale === 'ar';

  const testimonials = [
    {
      id: '1',
      name: isRtl ? 'أحمد الخالدي' : 'Ahmed Al-Khaldi',
      role: isRtl ? 'مدير مشروع' : 'Project Manager',
      content: isRtl 
        ? 'مواد بناء عالية الجودة وتوصيل سريع دائماً. نعتمد عليهم في جميع مشاريعنا في المنطقة الشمالية.'
        : 'High quality materials and always fast delivery. We rely on them for all our projects in the Northern region.',
      rating: 5,
    },
    {
      id: '2',
      name: isRtl ? 'سعد الشمري' : 'Saad Al-Shammari',
      role: isRtl ? 'مقاول عام' : 'General Contractor',
      content: isRtl
        ? 'أسعار الجملة لديهم ممتازة جداً وتوفر علينا الكثير. تعامل راقي واحترافي.'
        : 'Their wholesale prices are excellent and save us a lot. Very professional and classy dealing.',
      rating: 5,
    },
    {
      id: '3',
      name: isRtl ? 'م. عبدالله العتيبي' : 'Eng. Abdullah Al-Otaibi',
      role: isRtl ? 'مهندس مدني' : 'Civil Engineer',
      content: isRtl
        ? 'تشكيلة واسعة من الماركات العالمية المعتمدة. فريق المبيعات متعاون جداً في توفير طلباتنا الخاصة.'
        : 'Wide range of approved international brands. The sales team is very helpful in providing our special requests.',
      rating: 4,
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
              {t('testimonials')}
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.2} className="max-w-4xl mx-auto">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            dir={isRtl ? 'rtl' : 'ltr'}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
            breakpoints={{
              768: { slidesPerView: 2 },
            }}
            className="pb-14"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="bg-[#F8F8F8] p-8 rounded-2xl relative h-full">
                  <Quote className="absolute top-6 right-6 w-12 h-12 text-primary/10 rotate-180" />
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-5 h-5 ${i < testimonial.rating ? 'text-primary fill-primary' : 'text-gray-300'}`} 
                      />
                    ))}
                  </div>
                  <p className="text-lg text-secondary/80 mb-6 leading-relaxed italic">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <h4 className="font-bold text-secondary text-lg">{testimonial.name}</h4>
                    <p className="text-primary text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </ScrollReveal>
      </div>
    </section>
  );
}
