'use client';

import { useLocale, useTranslations } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/routing';
import { useTransition } from 'react';
import { Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function LocaleSwitcher() {
  const t = useTranslations('Index'); // using index just as fallback if needed
  const [isPending, startTransition] = useTransition();
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  function onSelectChange() {
    const nextLocale = locale === 'ar' ? 'en' : 'ar';
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  }

  return (
    <Button 
      variant="ghost" 
      size="sm" 
      onClick={onSelectChange}
      disabled={isPending}
      className="gap-2"
    >
      <Globe className="h-4 w-4" />
      <span>{locale === 'ar' ? 'English' : 'العربية'}</span>
    </Button>
  );
}
