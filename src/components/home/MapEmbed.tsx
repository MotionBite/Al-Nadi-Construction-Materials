'use client';

import { ScrollReveal } from '@/components/common/ScrollReveal';

export function MapEmbed() {
  return (
    <section className="h-[400px] w-full relative">
      <ScrollReveal className="w-full h-full">
        {/* Placeholder for Google Maps Embed - using Arar coordinates */}
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110189.70248466657!2d41.0186981!3d30.9833333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x153de5a89fbdae39%3A0x6b2b6ab0c1154e15!2sArar%20Saudi%20Arabia!5e0!3m2!1sen!2s!4v1684829283726!5m2!1sen!2s" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          className="grayscale hover:grayscale-0 transition-all duration-700"
        />
      </ScrollReveal>
    </section>
  );
}
