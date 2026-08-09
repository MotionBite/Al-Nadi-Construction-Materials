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
    <div className="bg-white group rounded-lg overflow-hidden border border-border hover:shadow-xl transition-all duration-300 flex flex-col h-full">
      <div className="relative h-64 overflow-hidden bg-gray-100 shrink-0">
        <Image 
          src={image} 
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4">
          {inStock ? (
            <Badge className="bg-success text-white">In Stock</Badge>
          ) : (
            <Badge variant="destructive">Out of Stock</Badge>
          )}
        </div>
      </div>
      <div className="p-5 flex flex-col flex-1">
        <Link href={`/products/${id}`} className="mb-2">
          <h3 className="font-bold text-lg text-secondary hover:text-primary transition-colors line-clamp-2">
            {title}
          </h3>
        </Link>
        <div className="flex-1"></div>
        <p className="text-primary font-bold text-xl mb-4">{price}</p>
        
        <div className="flex gap-2 mt-auto">
          <Button className="flex-1 bg-secondary text-white hover:bg-primary" size="sm">
            <ShoppingCart className="w-4 h-4 mr-2 hidden sm:inline-block" />
            {tShop('addToQuote')}
          </Button>
          <a 
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMsg)}`} 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button variant="outline" size="icon" className="border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white shrink-0">
              <MessageCircle className="w-4 h-4" />
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
