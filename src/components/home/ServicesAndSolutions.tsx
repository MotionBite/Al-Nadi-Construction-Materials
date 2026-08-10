'use client';

import React, { useState } from 'react';
import { ScrollReveal } from '@/components/common/ScrollReveal';
import { 
  Building2,
  HardHat,
  Paintbrush,
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from '@/i18n/routing';

export function ServicesAndSolutions() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const services = [
    {
      title: 'General Construction',
      description: 'Quisque dignissim enim diam, eget pulvinar ex consequat ac. Vivamus id interdum elit, non varius augue.',
      icon: Building2,
      image: '/images/hero-bg.png'
    },
    {
      title: 'Architecture & Building',
      description: 'Sed leo nisl, posuere vitae risus id, egestas porttitor felis. Nullam sed aliquam enim, non eleifend leo.',
      icon: HardHat,
      image: '/images/hero-bg-2.png'
    },
    {
      title: 'Interior Design',
      description: 'Praesent aliquet ut dolor sit amet molestie. Suspendisse non eleifend vulputate dui vehicula sed turpis ac.',
      icon: Paintbrush,
      image: '/images/hero-bg-3.png'
    }
  ];

  return (
    <section className="relative py-24 bg-[#f8f9fa]">
      <div className="container relative z-10 mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-black text-secondary tracking-tight">
              Our Services & Solutions
            </h2>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const isHighlighted = hoveredIndex === index || (hoveredIndex === null && index === 0);
            
            return (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div 
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="group relative flex flex-col h-full overflow-hidden transition-all duration-300"
                >
                  {/* Top Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300" />
                  </div>

                  {/* Content Area */}
                  <div className={`relative flex-grow px-8 pt-12 pb-10 transition-colors duration-300 ${
                    isHighlighted ? 'bg-[#ff6b00]' : 'bg-white'
                  }`}>
                    {/* Floating Circle Icon */}
                    <div className={`absolute -top-10 left-8 w-20 h-20 rounded-full flex items-center justify-center border-4 border-white transition-colors duration-300 ${
                      isHighlighted ? 'bg-[#ff6b00]' : 'bg-white'
                    }`}>
                      <div className={`w-16 h-16 rounded-full flex items-center justify-center border-2 border-dashed ${
                        isHighlighted ? 'border-white/50' : 'border-[#ff6b00]/50'
                      }`}>
                        <service.icon className={`w-7 h-7 ${
                          isHighlighted ? 'text-white' : 'text-[#ff6b00]'
                        }`} />
                      </div>
                    </div>
                    
                    <h3 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
                      isHighlighted ? 'text-white' : 'text-secondary'
                    }`}>
                      {service.title}
                    </h3>
                    
                    <p className={`leading-relaxed text-[15px] mb-8 transition-colors duration-300 ${
                      isHighlighted ? 'text-white/90' : 'text-muted-foreground'
                    }`}>
                      {service.description}
                    </p>

                    <Button 
                      variant="outline" 
                      className={`h-12 px-6 rounded-none font-bold uppercase tracking-wider text-sm transition-colors duration-300 ${
                        isHighlighted 
                          ? 'bg-white border-white text-[#ff6b00] hover:bg-transparent hover:text-white' 
                          : 'border-border text-secondary hover:bg-[#ff6b00] hover:text-white hover:border-[#ff6b00]'
                      }`}
                    >
                      Read More <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

