'use client';

import { useTranslations, useLocale } from 'next-intl';
import { ScrollReveal } from '@/components/common/ScrollReveal';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FaqAccordion() {
  const t = useTranslations('Index');
  const locale = useLocale();
  const isRtl = locale === 'ar';

  const faqs = [
    {
      q: isRtl ? 'هل توفرون خدمة التوصيل لمواقع المشاريع؟' : 'Do you provide delivery to project sites?',
      a: isRtl 
        ? 'نعم، نوفر خدمة التوصيل السريع لجميع المواقع داخل عرعر والمناطق المجاورة بأسطول سياراتنا الخاص.' 
        : 'Yes, we provide fast delivery to all sites within Arar and surrounding areas using our own fleet.'
    },
    {
      q: isRtl ? 'كيف يمكنني طلب تسعيرة (BOQ) لمشروعي؟' : 'How can I request a quote (BOQ) for my project?',
      a: isRtl 
        ? 'يمكنك إرسال جدول الكميات (BOQ) عبر صفحة "طلب تسعيرة" أو التواصل معنا مباشرة عبر الواتساب، وسيقوم فريق المبيعات بالرد عليك في أسرع وقت.' 
        : 'You can submit your Bill of Quantities (BOQ) via the "Request Quote" page or contact us directly on WhatsApp, and our sales team will respond promptly.'
    },
    {
      q: isRtl ? 'هل تبيعون للأفراد أم للمقاولين فقط؟' : 'Do you sell to individuals or just contractors?',
      a: isRtl 
        ? 'نخدم الجميع! نوفر أسعار التجزئة للأفراد وأصحاب المنازل، وأسعار جملة خاصة للمقاولين والشركات الإنشائية.' 
        : 'We serve everyone! We offer retail prices for individuals and homeowners, and special wholesale prices for contractors and construction companies.'
    },
    {
      q: isRtl ? 'ما هي طرق الدفع المتاحة؟' : 'What payment methods are available?',
      a: isRtl 
        ? 'نقبل الدفع النقدي، التحويل البنكي، ونقاط البيع (مدى، فيزا، ماستركارد) في الفرع، بالإضافة لتسهيلات ائتمانية للشركات المعتمدة.' 
        : 'We accept cash, bank transfers, and POS (Mada, Visa, Mastercard) in-store, in addition to credit facilities for approved companies.'
    }
  ];

  return (
    <section className="py-20 bg-[#F4F4F4]">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
              {t('faq')}
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.2}>
          <Accordion className="w-full bg-white rounded-xl shadow-sm p-6 border border-border">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-border last:border-0">
                <AccordionTrigger className="text-right text-lg font-bold text-secondary hover:text-primary transition-colors py-4">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-4">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </ScrollReveal>
      </div>
    </section>
  );
}
