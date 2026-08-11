import { HeroSection } from '@/components/home/HeroSection';
import { CategoryGrid } from '@/components/home/CategoryGrid';
import { FeaturedProducts } from '@/components/home/FeaturedProducts';
import { ServicesAndSolutions } from '@/components/home/ServicesAndSolutions';
import { WhyChooseUs } from '@/components/home/WhyChooseUs';
import { BrandSlider } from '@/components/home/BrandSlider';
import { VideoShowcase } from '@/components/home/VideoShowcase';
import { GalleryGrid } from '@/components/home/GalleryGrid';
import { Testimonials } from '@/components/home/Testimonials';
import { FaqAccordion } from '@/components/home/FaqAccordion';
import { CtaBanner } from '@/components/home/CtaBanner';
import { MapEmbed } from '@/components/home/MapEmbed';

// ISR revalidation for homepage
export const revalidate = 60; 

export default function Home() {
  return (
    <>
      <HeroSection />
      <BrandSlider />
      <FeaturedProducts />
      <CategoryGrid />
      <ServicesAndSolutions />
      <WhyChooseUs />
      <VideoShowcase />
      <GalleryGrid />
      <Testimonials />
      <FaqAccordion />
      <CtaBanner />
      <MapEmbed />
    </>
  );
}
