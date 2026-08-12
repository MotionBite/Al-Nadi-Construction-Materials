import type { Metadata } from "next";
import { Inter, Cairo, Tajawal } from "next/font/google";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { WhatsAppButton } from '@/components/common/WhatsAppButton';
import { CartProvider } from '@/context/CartContext';
import "../globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const cairo = Cairo({
  subsets: ["arabic"],
  variable: "--font-cairo",
});

const tajawal = Tajawal({
  subsets: ["arabic"],
  weight: ["200", "300", "400", "500", "700", "800", "900"],
  variable: "--font-tajawal",
});

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const resolvedParams = await params;
  const isAr = resolvedParams.locale === 'ar';

  return {
    title: {
      template: isAr ? '%s | شركة النادي لمواد البناء' : '%s | Al-Nadi Construction Materials',
      default: isAr ? 'شركة النادي لمواد البناء | عرعر' : 'Al-Nadi Construction Materials | Arar',
    },
    description: isAr 
      ? 'المورد الرائد لمواد البناء في الحدود الشمالية، عرعر. أسعار جملة، توصيل سريع للمشاريع، جودة عالية.'
      : 'Leading supplier of construction materials in Northern Borders, Arar. Wholesale prices, fast site delivery, high quality.',
    keywords: ['Construction Materials', 'Arar', 'Saudi Arabia', 'Cement', 'Steel', 'Building', 'مواد بناء', 'عرعر', 'مقاولات', 'اسمنت'],
    openGraph: {
      title: isAr ? 'شركة النادي لمواد البناء' : 'Al-Nadi Construction Materials',
      description: isAr 
        ? 'مواد بناء عالية الجودة وتوصيل سريع لموقع مشروعك.'
        : 'Premium construction materials delivered fast to your site.',
      url: 'https://alnadi.sa',
      siteName: 'Al-Nadi',
      locale: isAr ? 'ar_SA' : 'en_US',
      type: 'website',
    },
  };
}

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();

  const isRtl = locale === 'ar';
  const dir = isRtl ? 'rtl' : 'ltr';

  return (
    <html
      lang={locale}
      dir={dir}
      className={`${inter.variable} ${cairo.variable} ${tajawal.variable} antialiased h-full`}
    >
      <body className={`min-h-full flex flex-col font-sans`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Al-Nadi Construction Materials",
              "image": "https://alnadi.sa/logo.png",
              "url": "https://alnadi.sa",
              "telephone": "+966146628280",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Arar",
                "addressRegion": "Northern Borders",
                "addressCountry": "SA"
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
                  "opens": "08:00",
                  "closes": "18:00"
                }
              ]
            })
          }}
        />
        <CartProvider>
          <NextIntlClientProvider messages={messages}>
            <Navbar />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
            <WhatsAppButton />
          </NextIntlClientProvider>
        </CartProvider>
      </body>
    </html>
  );
}
