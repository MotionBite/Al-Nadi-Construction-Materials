'use client';

import { ScrollReveal } from '@/components/common/ScrollReveal';
import { Droplets, Lightbulb, Bath, Wrench } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Link } from '@/i18n/routing';
import { useCart } from '@/context/CartContext';
import { useState } from 'react';
import { useRouter } from '@/i18n/routing';

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

  const router = useRouter();

  const handleBuyNow = (item: { id: string; title: string }) => {
    const isInCart = cartItems.some(cartItem => cartItem.id === item.id);
    if (!isInCart) {
      addItem({ id: item.id, title: item.title });
    }
    router.push('/cart');
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
                            className={`flex items-center font-bold text-xs uppercase tracking-widest transition-colors cursor-pointer ${isInCart ? 'text-[#ff6b00]' : 'text-gray-900 hover:text-[#ff6b00]'}`}
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
                    <button 
                      onClick={() => handleBuyNow(item)}
                      className="flex items-center text-gray-900 font-bold text-xs uppercase tracking-widest hover:text-[#ff6b00] transition-colors cursor-pointer"
                    >
                      Buy Now
                    </button>
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
