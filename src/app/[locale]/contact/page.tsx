import { useTranslations } from 'next-intl';
import { ScrollReveal } from '@/components/common/ScrollReveal';
import { MapEmbed } from '@/components/home/MapEmbed';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function ContactPage() {
  const t = useTranslations('Nav');

  return (
    <div className="py-20 bg-background">
      <div className="container mx-auto px-4">
        
        <ScrollReveal>
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-4">{t('contact')}</h1>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          
          {/* Contact Form */}
          <ScrollReveal direction="right">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-border">
              <h2 className="text-2xl font-bold text-secondary mb-6">Send us a message</h2>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-secondary">Name</label>
                    <Input placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-secondary">Phone</label>
                    <Input placeholder="+966 5X XXX XXXX" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-secondary">Email</label>
                  <Input type="email" placeholder="john@example.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-secondary">Message</label>
                  <Textarea placeholder="How can we help you?" rows={5} />
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-12 text-lg">
                  Submit Message
                </Button>
              </form>
            </div>
          </ScrollReveal>

          {/* Contact Details */}
          <ScrollReveal direction="left">
            <div className="space-y-8 h-full flex flex-col justify-center">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-secondary mb-1">Our Location</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Industrial Area, Al-Faisaliyah District<br/>
                    Arar 73311<br/>
                    Northern Borders, Saudi Arabia
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-secondary mb-1">Phone & WhatsApp</h3>
                  <p className="text-muted-foreground" dir="ltr">+966 14 662 8280</p>
                  <p className="text-muted-foreground" dir="ltr">+966 14 662 2166</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-secondary mb-1">Email</h3>
                  <p className="text-muted-foreground">info@alnadi.sa</p>
                  <p className="text-muted-foreground">sales@alnadi.sa</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-secondary mb-1">Working Hours</h3>
                  <p className="text-muted-foreground">Saturday - Thursday: 8:00 AM - 6:00 PM</p>
                  <p className="text-muted-foreground">Friday: Closed</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      <MapEmbed />
    </div>
  );
}
