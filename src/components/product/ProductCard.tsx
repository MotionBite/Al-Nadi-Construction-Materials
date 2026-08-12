'use client';

import { Link, useRouter } from '@/i18n/routing';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, Zap } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import { useCart } from '@/context/CartContext';

interface ProductCardProps {
  id: string;
  title: string;
  price: string;
  description?: string;
  image: string;
  inStock: boolean;
}

export function ProductCard({ id, title, price, description, image, inStock }: ProductCardProps) {
  const { items, addItem } = useCart();
  const [showError, setShowError] = useState(false);
  const isInCart = items.some(item => item.id === id);
  const router = useRouter();

  const handleAddToCart = () => {
    if (isInCart) {
      setShowError(true);
      setTimeout(() => setShowError(false), 3000);
    } else {
      addItem({ id, title });
    }
  };

  const handleBuyNow = () => {
    if (!isInCart) {
      addItem({ id, title });
    }
    router.push('/cart');
  };

  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-shadow duration-300 h-full flex flex-col group overflow-hidden border-none">
      {/* Top Image with concave curve */}
      <div className="relative h-60 w-full mb-6 bg-gray-100 shrink-0">
        <div className="absolute inset-0 overflow-hidden rounded-t-xl">
          <Image 
            src={image} 
            alt={title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
        
        {/* In Stock Badge */}
        <div className="absolute top-4 right-4 z-20">
          {inStock ? (
            <Badge className="bg-success text-white">In Stock</Badge>
          ) : (
            <Badge variant="destructive">Out of Stock</Badge>
          )}
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
          <ShoppingCart className="w-6 h-6" strokeWidth={2} />
        </div>
      </div>

      {/* Content Area */}
      <div className="flex flex-col flex-grow px-8 pb-8 pt-4 text-center items-center">
        <Link href={`/products/${id}`} className="mb-2">
          <h3 className="text-[#1e293b] text-xl font-bold hover:text-[#ff6b00] transition-colors line-clamp-2">
            {title}
          </h3>
        </Link>
        
        {description && (
          <p className="text-[#64748b] text-[13px] leading-relaxed mb-4 flex-grow px-2 line-clamp-3">
            {description}
          </p>
        )}

        <p className="text-[#ff6b00] font-bold text-xl mt-2 mb-8">
          {price}
        </p>

        {/* Buttons */}
        <div className="flex flex-col items-center w-full mt-auto relative">
          {showError && (
            <div className="absolute -top-8 text-red-500 text-xs font-semibold bg-red-50 px-3 py-1 rounded-full animate-bounce">
              Already in your cart
            </div>
          )}
          <div className="flex items-center justify-center gap-4 w-full">
            <button 
              onClick={handleAddToCart}
              className={`flex-1 flex items-center justify-center font-bold text-[11px] sm:text-xs uppercase tracking-widest transition-colors cursor-pointer px-3 py-3 rounded-md shadow-sm ${isInCart ? 'bg-green-500 text-white hover:bg-green-600' : 'bg-[#ff6b00] text-white hover:bg-[#e65c00]'}`}
            >
              <ShoppingCart className="w-4 h-4 mr-1.5" />
              {isInCart ? 'Added to Cart' : 'Add to Cart'}
            </button>
          <button 
            onClick={handleBuyNow}
            className="flex-1 flex items-center justify-center font-bold text-[11px] sm:text-xs uppercase tracking-widest transition-colors cursor-pointer px-3 py-3 rounded-md shadow-sm bg-[#ff6b00] text-white hover:bg-[#e65c00]"
          >
            Buy Now
          </button>
          </div>
        </div>
      </div>
    </div>
  );
}
