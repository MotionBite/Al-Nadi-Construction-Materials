import { getTranslations } from 'next-intl/server';
import { QuoteRequestForm } from '@/components/forms/QuoteRequestForm';
import { FileSpreadsheet, Headset, Clock, FileCheck } from 'lucide-react';

export default async function QuotePage() {
  const tNav = await getTranslations('Nav');

  return (
    <div className="py-16 bg-[#F8F8F8] min-h-screen">
      <div className="container mx-auto px-4 max-w-6xl">
        
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-bold text-secondary mb-4">{tNav('quote')}</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get competitive wholesale pricing for your project. Submit your required materials or upload your BOQ directly.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          
          <div className="lg:col-span-2">
            <QuoteRequestForm />
          </div>

          {/* Info Sidebar */}
          <div className="space-y-6">
            
            <div className="bg-white p-6 rounded-xl border border-border shadow-sm">
              <h3 className="font-bold text-lg text-secondary mb-6 border-b border-border pb-2">How it works</h3>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <FileSpreadsheet className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-secondary text-sm mb-1">1. Submit Details</h4>
                    <p className="text-sm text-muted-foreground">List your materials or upload your BOQ Excel/PDF.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <FileCheck className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-secondary text-sm mb-1">2. Review & Pricing</h4>
                    <p className="text-sm text-muted-foreground">Our engineers review your requirements and apply best discounts.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-secondary text-sm mb-1">3. Receive Quotation</h4>
                    <p className="text-sm text-muted-foreground">Get your official quotation within 24 working hours.</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-secondary text-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <Headset className="w-6 h-6 text-primary" />
                <h3 className="font-bold text-lg">Need help?</h3>
              </div>
              <p className="text-white/80 text-sm leading-relaxed mb-4">
                Our sales team is ready to assist you with your project requirements.
              </p>
              <div className="space-y-2 text-sm font-medium">
                <p>Call: <span dir="ltr">+966 14 662 8280</span></p>
                <p>Email: sales@alnadi.sa</p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
