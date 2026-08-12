import { getTranslations } from 'next-intl/server';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, Zap, FileText, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { Link } from '@/i18n/routing';

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const tShop = await getTranslations('Shop');
  const resolvedParams = await params;

  // Mock product data
  const product = {
    id: resolvedParams.slug,
    title: 'Portland Cement 50kg',
    price: 'SAR 15.00',
    description: 'High-quality Portland Cement for general purpose construction. Suitable for all uses where the special properties of other types are not required.',
    brand: 'Yamama Cement',
    category: 'Cement & Masonry',
    inStock: true,
    sku: 'CEM-50-YAM',
    images: [
      'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=800&auto=format&fit=crop',
    ],
    specs: [
      { name: 'Weight', value: '50 kg' },
      { name: 'Type', value: 'OPC (Ordinary Portland Cement)' },
      { name: 'Standard', value: 'ASTM C150 Type I' },
    ]
  };

  const whatsappNumber = '966146628280';
  const whatsappMsg = `Hello, I'm interested in ordering: ${product.title} (SKU: ${product.sku})`;

  return (
    <div className="py-12 bg-white min-h-screen">
      <div className="container mx-auto px-4">
        
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <Link href="/" className="hover:text-primary">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <Link href="/products" className="hover:text-primary">Products</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-secondary font-medium">{product.title}</span>
        </nav>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="relative aspect-square rounded-xl overflow-hidden bg-[#F8F8F8] border border-border">
              <Image 
                src={product.images[0]} 
                alt={product.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((img, i) => (
                <div key={i} className="relative aspect-square rounded-lg overflow-hidden border border-border cursor-pointer hover:border-primary">
                  <Image src={img} alt="" fill className="object-cover" />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <div className="mb-6">
              {product.inStock ? (
                <Badge className="bg-success text-white mb-4">In Stock</Badge>
              ) : (
                <Badge variant="destructive" className="mb-4">Out of Stock</Badge>
              )}
              <h1 className="text-3xl md:text-4xl font-bold text-secondary mb-2">{product.title}</h1>
              <p className="text-sm text-muted-foreground">SKU: {product.sku} | Brand: <span className="text-primary font-semibold">{product.brand}</span></p>
            </div>

            <div className="text-3xl font-bold text-primary mb-6">
              {product.price}
            </div>

            <p className="text-muted-foreground leading-relaxed mb-8">
              {product.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10 pt-8 border-t border-border">
              <Button size="lg" className="flex-1 bg-secondary text-white hover:bg-primary h-14 text-lg">
                <ShoppingCart className="w-5 h-5 mr-2" />
                {tShop('addToQuote')}
              </Button>
              <Link href="/cart" className="flex-1">
                <Button size="lg" variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white h-14 text-lg">
                  <Zap className="w-5 h-5 mr-2" />
                  Buy Now
                </Button>
              </Link>
            </div>

            {/* Specifications */}
            <div>
              <h3 className="text-xl font-bold text-secondary mb-4">{tShop('specifications')}</h3>
              <div className="bg-[#F8F8F8] rounded-lg p-6 border border-border">
                <dl className="divide-y divide-border">
                  {product.specs.map((spec, i) => (
                    <div key={i} className="py-3 flex justify-between">
                      <dt className="text-muted-foreground">{spec.name}</dt>
                      <dd className="font-medium text-secondary text-right">{spec.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>

            {/* Downloads */}
            <div className="mt-8">
              <Button variant="ghost" className="text-primary hover:bg-primary/10">
                <FileText className="w-4 h-4 mr-2" />
                Download Technical Datasheet (PDF)
              </Button>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
