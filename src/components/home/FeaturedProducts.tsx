'use client';

import { ScrollReveal } from '@/components/common/ScrollReveal';
import { Droplets, Lightbulb, Bath, Wrench } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Link } from '@/i18n/routing';
import { useCart } from '@/context/CartContext';
import { useState } from 'react';

export function FeaturedProducts() {
  const { items: cartItems, addItem } = useCart();
  const [errorId, setErrorId] = useState<string | null>(null);
  
  const handleAddToCart = (item: { id: string; title: string }) => {
    const isInCart = cartItems.some(cartItem => cartItem.id === item.id);
    if (isInCart) {
      setErrorId(item.id);
      setTimeout(() => setErrorId(null), 3000);
    } else {
      addItem({ id: item.id, title: item.title });
    }
  };

  const items = [
    {
      id: '1',
      title: 'Plumbing',
      description: 'Top-quality plumbing materials and fixtures for residential and commercial projects. Ensure durable water systems.',
      price: 'SAR 150.00',
      image: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?q=80&w=800&auto=format&fit=crop',
      icon: Droplets,
    },
    {
      id: '2',
      title: 'Light colourful',
      description: 'Bright, energy-efficient, and colourful lighting solutions to illuminate and beautify any interior space.',
      price: 'SAR 250.00',
      image: 'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?q=80&w=800&auto=format&fit=crop',
      icon: Lightbulb,
    },
    {
      id: '3',
      title: 'Sanitary',
      description: 'Premium sanitary wares, ceramics, and bathroom fittings combining hygiene, durability, and elegant design.',
      price: 'SAR 1,200.00',
      image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop',
      icon: Bath,
    }
  ];

  return (
    <section className="py-24 bg-[#f4f7fb] relative overflow-hidden">
      {/* Optional faint wavy background pattern can be added via CSS or SVG here */}
      
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-black text-[#1e293b] tracking-tight">
                Building Your Dream Projects
              </h2>
            </ScrollReveal>
          </div>
          <ScrollReveal delay={0.2}>
            <Link href="/products">
              <Button className="mt-4 md:mt-0 bg-[#ff6b00] text-white hover:bg-[#e65c00] font-bold px-8 h-12 uppercase tracking-wider rounded-none">
                All Products
              </Button>
            </Link>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <ScrollReveal key={item.id} delay={index * 0.1}>
              <div className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-shadow duration-300 h-full flex flex-col group overflow-hidden">
                {/* Top Image with concave curve */}
                <div className="relative h-60 w-full mb-6 bg-gray-100">
                  <div className="absolute inset-0 overflow-hidden rounded-t-xl">
                    <Image 
                      src={item.image} 
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  {/* White curve overlay at the bottom */}
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 100 100" 
                    preserveAspectRatio="none" 
                    className="absolute bottom-0 left-0 w-full h-8 text-white z-10" 
                    fill="currentColor"
                  >
                    <path d="M0 100 Q 50 0 100 100 Z" />
                  </svg>

                  {/* Orange Icon */}
                  <div className="absolute -bottom-6 right-8 w-16 h-16 bg-[#ff6b00] group-hover:bg-[#e65c00] rounded-full flex items-center justify-center text-white border-[4px] border-white shadow-sm z-20 transition-all duration-300 group-hover:-translate-y-2">
                    <item.icon className="w-6 h-6" strokeWidth={2} />
                  </div>
                </div>

                {/* Content Area */}
                <div className="flex flex-col flex-grow px-8 pb-10 pt-4 text-center items-center">
                  <h3 className="text-[#1e293b] text-xl font-bold mb-4">
                    {item.title}
                  </h3>
                  <p className="text-[#64748b] text-[15px] leading-relaxed mb-4 flex-grow px-2">
                    {item.description}
                  </p>

                  <p className="text-[#ff6b00] font-bold text-xl mb-8">
                    {item.price}
                  </p>

                  <div className="flex flex-col items-center w-full mt-auto relative">
                    {errorId === item.id && (
                      <div className="absolute -top-8 text-red-500 text-xs font-semibold bg-red-50 px-3 py-1 rounded-full animate-bounce">
                        Already in your cart
                      </div>
                    )}
                    <div className="flex items-center justify-center gap-4 w-full">
                      {(() => {
                        const isInCart = cartItems.some(cartItem => cartItem.id === item.id);
                        return (
                          <button 
                            onClick={() => handleAddToCart(item)}
                            className={`flex items-center font-bold text-xs uppercase tracking-widest transition-colors ${isInCart ? 'text-[#ff6b00]' : 'text-gray-900 hover:text-[#ff6b00]'}`}
                          >
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 mr-1.5">
                            <circle cx="9" cy="21" r="1"></circle>
                            <circle cx="20" cy="21" r="1"></circle>
                            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                          </svg>
                          {isInCart ? 'Added to Cart' : 'Add to Cart'}
                        </button>
                      );
                    })()}
                    <a 
                      href="https://wa.me/1234567890" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-900 font-bold text-xs uppercase tracking-widest hover:text-[#ff6b00] transition-colors"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 mr-1.5">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                      </svg>
                      WhatsApp
                    </a>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
