import { getTranslations } from 'next-intl/server';
import { ProductCard } from '@/components/product/ProductCard';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, Filter } from 'lucide-react';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

// Temporary mock data
const mockProducts = [
  { id: '1', title: 'Portland Cement 50kg', price: 'SAR 15.00', image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=600&auto=format&fit=crop', inStock: true, category: 'cement' },
  { id: '2', title: 'Steel Rebar 12mm', price: 'SAR 2,500/Ton', image: 'https://images.unsplash.com/photo-1533625414321-df6dfa35c596?q=80&w=600&auto=format&fit=crop', inStock: true, category: 'steel' },
  { id: '3', title: 'Concrete Blocks 20x20x40', price: 'SAR 2.50/pc', image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=600&auto=format&fit=crop', inStock: true, category: 'cement' },
  { id: '4', title: 'Dewalt Hammer Drill', price: 'SAR 450.00', image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?q=80&w=600&auto=format&fit=crop', inStock: false, category: 'tools' },
  { id: '5', title: 'PVC Pipe 4 inch', price: 'SAR 45.00', image: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?q=80&w=600&auto=format&fit=crop', inStock: true, category: 'plumbing' },
  { id: '6', title: 'Safety Helmet', price: 'SAR 25.00', image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=600&auto=format&fit=crop', inStock: true, category: 'safety' },
];

export default async function ProductsPage() {
  const tShop = await getTranslations('Shop');

  const FilterSidebar = () => (
    <div className="space-y-6">
      <div>
        <h3 className="font-bold text-lg mb-4 text-secondary">{tShop('filters')}</h3>
        <Button variant="outline" className="w-full justify-start text-muted-foreground border-border">
          {tShop('clearFilters')}
        </Button>
      </div>

      <Accordion className="w-full">
        <AccordionItem value="category" className="border-border">
          <AccordionTrigger className="text-secondary hover:text-primary font-semibold">{tShop('category')}</AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col gap-2">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="rounded border-border text-primary focus:ring-primary" />
                <span className="text-muted-foreground">Cement & Masonry</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="rounded border-border text-primary focus:ring-primary" />
                <span className="text-muted-foreground">Steel & Metals</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="rounded border-border text-primary focus:ring-primary" />
                <span className="text-muted-foreground">Plumbing</span>
              </label>
            </div>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="brand" className="border-border">
          <AccordionTrigger className="text-secondary hover:text-primary font-semibold">{tShop('brand')}</AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col gap-2">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="rounded border-border text-primary focus:ring-primary" />
                <span className="text-muted-foreground">Sika</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="rounded border-border text-primary focus:ring-primary" />
                <span className="text-muted-foreground">Bosch</span>
              </label>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      
      <label className="flex items-center gap-2 cursor-pointer pt-4 border-t border-border">
        <input type="checkbox" className="rounded border-border text-primary focus:ring-primary h-5 w-5" />
        <span className="font-semibold text-secondary">{tShop('inStock')}</span>
      </label>
    </div>
  );

  return (
    <div className="py-12 bg-[#F8F8F8] min-h-screen">
      <div className="container mx-auto px-4">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8 bg-white p-4 rounded-xl border border-border shadow-sm">
          <h1 className="text-2xl font-bold text-secondary">{tShop('allProducts')}</h1>
          
          <div className="flex items-center gap-3 w-full md:w-auto">
            <div className="relative flex-1 md:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input 
                placeholder={tShop('searchPlaceholder')} 
                className="pl-9 bg-[#F4F4F4] border-transparent focus-visible:ring-primary"
              />
            </div>
            
            <Sheet>
              <SheetTrigger className="md:hidden border border-border inline-flex h-9 items-center justify-center whitespace-nowrap rounded-md px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground">
                <Filter className="w-4 h-4 mr-2" />
                {tShop('filters')}
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] overflow-y-auto">
                <div className="mt-8">
                  <FilterSidebar />
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {/* Desktop Sidebar */}
          <aside className="hidden md:block col-span-1 border border-border bg-white rounded-xl p-6 h-fit sticky top-24">
            <FilterSidebar />
          </aside>

          {/* Product Grid */}
          <div className="md:col-span-3 lg:col-span-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {mockProducts.map((product) => (
                <ProductCard 
                  key={product.id}
                  id={product.id}
                  title={product.title}
                  price={product.price}
                  image={product.image}
                  inStock={product.inStock}
                  tShop={tShop}
                />
              ))}
            </div>
            
            {/* Pagination Placeholder */}
            <div className="flex justify-center mt-12">
              <div className="flex gap-2">
                <Button variant="outline" disabled>Previous</Button>
                <Button className="bg-primary text-white">1</Button>
                <Button variant="outline">2</Button>
                <Button variant="outline">3</Button>
                <Button variant="outline">Next</Button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
