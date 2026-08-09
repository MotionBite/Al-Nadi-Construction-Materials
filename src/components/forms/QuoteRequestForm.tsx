'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Plus, Trash2, Upload, CheckCircle2 } from 'lucide-react';

export function QuoteRequestForm() {
  const tShop = useTranslations('Shop');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const [materials, setMaterials] = useState([{ name: '', quantity: '', unit: '' }]);

  const addMaterial = () => {
    setMaterials([...materials, { name: '', quantity: '', unit: '' }]);
  };

  const removeMaterial = (index: number) => {
    const newMaterials = materials.filter((_, i) => i !== index);
    setMaterials(newMaterials);
  };

  const updateMaterial = (index: number, field: string, value: string) => {
    const newMaterials = [...materials];
    newMaterials[index] = { ...newMaterials[index], [field]: value };
    setMaterials(newMaterials);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  if (isSuccess) {
    return (
      <div className="bg-white p-10 rounded-xl shadow-lg border border-border text-center">
        <div className="w-20 h-20 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-10 h-10 text-success" />
        </div>
        <h2 className="text-2xl font-bold text-secondary mb-4">Request Submitted!</h2>
        <p className="text-muted-foreground mb-8">
          {tShop('quoteSuccess')}
        </p>
        <Button onClick={() => setIsSuccess(false)} variant="outline" className="border-primary text-primary">
          Submit Another Request
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg border border-border">
      <h2 className="text-2xl font-bold text-secondary mb-8">{tShop('requestQuoteForm')}</h2>
      
      <form onSubmit={handleSubmit} className="space-y-8">
        
        {/* Contact Info */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-secondary border-b border-border pb-2">1. Contact Information</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-secondary">{tShop('companyName')}</label>
              <Input required />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-secondary">{tShop('contactName')}</label>
              <Input required />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-secondary">{tShop('phone')}</label>
              <Input required dir="ltr" className="text-left" placeholder="+966 5X XXX XXXX" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-secondary">{tShop('email')}</label>
              <Input type="email" required />
            </div>
          </div>
        </div>

        {/* Project Info */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-secondary border-b border-border pb-2">2. Project Details</h3>
          <div className="space-y-2">
            <label className="text-sm font-medium text-secondary">{tShop('projectName')}</label>
            <Input required />
          </div>
        </div>

        {/* Materials List */}
        <div className="space-y-4">
          <div className="flex justify-between items-center border-b border-border pb-2">
            <h3 className="text-lg font-semibold text-secondary">3. {tShop('requiredMaterials')}</h3>
          </div>
          
          <div className="space-y-3">
            {materials.map((mat, idx) => (
              <div key={idx} className="flex gap-2 items-start">
                <Input 
                  placeholder="Material name / Description" 
                  className="flex-grow"
                  value={mat.name}
                  onChange={(e) => updateMaterial(idx, 'name', e.target.value)}
                  required
                />
                <Input 
                  placeholder="Qty" 
                  className="w-24 shrink-0"
                  value={mat.quantity}
                  onChange={(e) => updateMaterial(idx, 'quantity', e.target.value)}
                  required
                />
                <Input 
                  placeholder="Unit (e.g. Ton, Bag, Pc)" 
                  className="w-32 shrink-0"
                  value={mat.unit}
                  onChange={(e) => updateMaterial(idx, 'unit', e.target.value)}
                  required
                />
                <Button 
                  type="button"
                  variant="ghost" 
                  size="icon"
                  className="text-destructive hover:text-destructive hover:bg-destructive/10 shrink-0"
                  onClick={() => removeMaterial(idx)}
                  disabled={materials.length === 1}
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            ))}
          </div>
          
          <Button type="button" variant="outline" size="sm" onClick={addMaterial} className="text-primary border-primary">
            <Plus className="w-4 h-4 mr-2" /> Add Material
          </Button>
        </div>

        {/* File Upload */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-secondary border-b border-border pb-2">4. {tShop('uploadBOQ')}</h3>
          <div className="border-2 border-dashed border-border rounded-lg p-8 flex flex-col items-center justify-center text-center cursor-pointer hover:border-primary hover:bg-primary/5 transition-colors">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <Upload className="w-6 h-6 text-primary" />
            </div>
            <p className="font-medium text-secondary mb-1">Click to upload or drag and drop</p>
            <p className="text-sm text-muted-foreground">PDF, Excel, or Word (Max 10MB)</p>
            <input type="file" className="hidden" accept=".pdf,.doc,.docx,.xls,.xlsx" />
          </div>
        </div>

        <Button type="submit" disabled={isSubmitting} className="w-full bg-primary hover:bg-primary/90 text-white h-14 text-lg mt-8">
          {isSubmitting ? 'Submitting...' : tShop('submitQuote')}
        </Button>

      </form>
    </div>
  );
}
