import { Link } from '@/i18n/routing';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, MessageCircle } from 'lucide-react';
import Image from 'next/image';

interface ProductCardProps {
  id: string;
  title: string;
  price: string;
  image: string;
  inStock: boolean;
  tShop: any; // Translation function
}

export function ProductCard({ id, title, price, image, inStock, tShop }: ProductCardProps) {
  const whatsappNumber = '966146628280';
  const whatsappMsg = `Hello, I'm interested in ordering: ${title}`;

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
        
        <p className="text-[#ff6b00] font-bold text-xl mt-2 mb-8 flex-grow">
          {price}
        </p>

        {/* Buttons */}
        <div className="flex gap-2 w-full mt-auto">
          <Button className="flex-1 bg-[#1e293b] text-white hover:bg-[#ff6b00] uppercase tracking-wider text-[11px] font-bold h-11 rounded-none" size="sm">
            <ShoppingCart className="w-4 h-4 mr-2 hidden sm:inline-block" />
            {tShop('addToQuote')}
          </Button>
          <a 
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMsg)}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex-shrink-0"
          >
            <Button variant="outline" size="icon" className="h-11 w-11 border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white rounded-none">
              <MessageCircle className="w-4 h-4" />
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
