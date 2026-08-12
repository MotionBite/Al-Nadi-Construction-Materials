import { useTranslations } from 'next-intl';
import { ScrollReveal } from '@/components/common/ScrollReveal';
import Image from 'next/image';

export default function AboutPage() {
  const t = useTranslations('Nav');

  return (
    <div className="py-20 bg-background">
      <div className="container mx-auto px-4">
        
        <ScrollReveal>
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-4">{t('about')}</h1>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <ScrollReveal direction="right">
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
              <Image 
                src="/images/warehouse.png" 
                alt="Al-Nadi Construction Materials Warehouse" 
                fill 
                className="object-cover"
              />
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="left">
            <h2 className="text-3xl font-bold text-secondary mb-6">Our Story</h2>
            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              Founded over 20 years ago in Arar, Saudi Arabia, Al-Nadi Construction Materials has grown from a local supplier to a regional leader in the construction sector.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We specialize in providing high-quality building materials for both mega-projects and individual home builders. Our extensive network allows us to offer competitive wholesale pricing without compromising on quality or delivery speed.
            </p>
          </ScrollReveal>
        </div>

      </div>
    </div>
  );
}
