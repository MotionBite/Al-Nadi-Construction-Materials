'use client';

import { useTranslations } from 'next-intl';
import { ScrollReveal } from '@/components/common/ScrollReveal';
import { Button } from '@/components/ui/button';
import { Trophy } from 'lucide-react';
import { Link } from '@/i18n/routing';

export function CtaBanner() {
  const t = useTranslations('Index');

  return (
    <section className="relative bg-background pb-32">
      {/* Top Dark Banner */}
      <div className="relative pt-32 pb-40 bg-[#0f172a] text-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 opacity-30">
          <img 
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop" 
            alt="Industrial Background" 
            className="w-full h-full object-cover mix-blend-luminosity grayscale" 
          />
        </div>
        <div className="absolute inset-0 bg-[#0f172a]/80"></div>

        <div className="container relative z-10 mx-auto px-4 text-center flex flex-col items-center">
          <ScrollReveal>
            <h2 className="text-xl md:text-2xl font-bold mb-4 text-white drop-shadow-md">
              Get Free Quote Or Can Call us At Our <span className="text-primary italic">Emergency Services</span>
            </h2>
            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="block text-5xl md:text-7xl font-black text-primary mb-10 tracking-wider drop-shadow-lg hover:opacity-80 transition-opacity">
              123-4567-890
            </a>
            
            <div className="flex justify-center">
              <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="h-14 px-8 text-lg bg-[#25D366] text-white hover:bg-[#20b858] font-bold uppercase tracking-wider rounded-sm shadow-xl flex items-center gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  Chat on WhatsApp
                </Button>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Overlapping Card Section */}
      <div className="container relative mx-auto px-4 -mt-24 z-20 max-w-5xl">
        <div className="flex flex-col md:flex-row shadow-2xl overflow-hidden rounded-sm">
          
          {/* Left Side: White Background */}
          <div className="flex-1 bg-white p-10 md:p-14">
            <ScrollReveal delay={0.2}>
              <p className="text-secondary font-medium leading-relaxed mb-8 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              
              <div className="flex items-center gap-6 mb-8">
                <div className="w-12 h-12 flex items-center justify-center">
                  <Trophy className="w-12 h-12 text-secondary" strokeWidth={2} />
                </div>
                <div>
                  <div className="text-4xl font-black text-primary mb-1">80+</div>
                  <div className="text-lg font-bold text-secondary">Certified Engineers</div>
                </div>
              </div>
              
              <p className="text-secondary font-medium leading-relaxed text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </ScrollReveal>
          </div>

          {/* Right Side: Yellow/Primary Background */}
          <div className="flex-1 bg-primary p-10 md:p-14 text-secondary">
            <ScrollReveal delay={0.4}>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-[3px] bg-secondary"></div>
                <span className="font-bold uppercase tracking-widest text-xs">
                  Need Help?
                </span>
              </div>
              <h3 className="text-3xl md:text-4xl font-black mb-8">
                Schedule A Services
              </h3>
              
              <form className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Name *" 
                  className="w-full p-4 bg-white border-none rounded-sm placeholder:text-muted-foreground focus:ring-2 focus:ring-secondary focus:outline-none text-foreground font-medium"
                  required
                />
                <input 
                  type="email" 
                  placeholder="Email *" 
                  className="w-full p-4 bg-white border-none rounded-sm placeholder:text-muted-foreground focus:ring-2 focus:ring-secondary focus:outline-none text-foreground font-medium"
                  required
                />
                <select className="w-full p-4 bg-white border-none rounded-sm focus:ring-2 focus:ring-secondary focus:outline-none text-foreground font-medium appearance-none">
                  <option>Select Service</option>
                  <option>Bulk Material Supply</option>
                  <option>Project Estimation</option>
                  <option>Engineering Support</option>
                </select>
                <Button className="w-full h-14 mt-4 bg-transparent border-2 border-secondary text-secondary hover:bg-secondary hover:text-primary font-bold uppercase tracking-widest rounded-sm">
                  Submit Request
                </Button>
              </form>
            </ScrollReveal>
          </div>
          
        </div>
      </div>
    </section>
  );
}
