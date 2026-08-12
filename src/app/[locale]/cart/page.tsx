'use client';

import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { Link } from '@/i18n/routing';
import { Trash2, ShoppingCart, MessageCircle, ArrowLeft } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function CartPage() {
  const { items, removeItem, clearCart } = useCart();
  const tShop = useTranslations('Shop');

  const whatsappNumber = '966146628280';
  const cartItemsText = items.map(item => `- ${item.title}`).join('%0A');
  const whatsappMsg = `Hello, I am interested in ordering the following items from my cart:%0A${cartItemsText}`;

  return (
    <div className="py-16 bg-[#F8F8F8] min-h-[70vh]">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold text-secondary mb-8 flex items-center gap-3">
          <ShoppingCart className="w-8 h-8 text-[#ff6b00]" />
          Your Shopping Cart
        </h1>

        {items.length === 0 ? (
          <div className="bg-white rounded-xl shadow-sm border border-border p-12 text-center">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <ShoppingCart className="w-10 h-10 text-gray-400" />
            </div>
            <h2 className="text-2xl font-semibold text-secondary mb-4">Your cart is empty</h2>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              Looks like you haven't added any products to your cart yet. Browse our catalog to find what you need.
            </p>
            <Link href="/products">
              <Button className="bg-[#ff6b00] text-white hover:bg-[#e65c00] font-bold px-8 h-12">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Continue Shopping
              </Button>
            </Link>
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-sm border border-border overflow-hidden">
            <div className="p-6 sm:p-8">
              <div className="flex justify-between items-center mb-6 pb-4 border-b border-border">
                <h3 className="text-lg font-semibold text-secondary">
                  {items.length} {items.length === 1 ? 'Item' : 'Items'}
                </h3>
                <Button 
                  variant="ghost" 
                  onClick={clearCart}
                  className="text-red-500 hover:text-red-600 hover:bg-red-50"
                >
                  Clear Cart
                </Button>
              </div>

              <div className="space-y-4 mb-8">
                {items.map((item, index) => (
                  <div 
                    key={`${item.id}-${index}`} 
                    className="flex justify-between items-center p-4 border border-border rounded-lg hover:border-[#ff6b00] transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gray-100 rounded-md flex items-center justify-center text-primary font-bold">
                        {index + 1}
                      </div>
                      <div>
                        <h4 className="font-bold text-secondary text-lg">{item.title}</h4>
                      </div>
                    </div>
                    
                    <Button 
                      variant="ghost" 
                      size="icon"
                      onClick={() => removeItem(item.id)}
                      className="text-gray-400 hover:text-red-500 hover:bg-red-50"
                    >
                      <Trash2 className="w-5 h-5" />
                    </Button>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-6 border-t border-border">
                <Link href="/products">
                  <Button variant="outline" className="w-full sm:w-auto">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Continue Shopping
                  </Button>
                </Link>
                
                <a 
                  href={`https://wa.me/${whatsappNumber}?text=${whatsappMsg}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                >
                  <Button className="w-full sm:w-auto bg-[#25D366] text-white hover:bg-[#20b858] font-bold px-8 h-12">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Send Order via WhatsApp
                  </Button>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
