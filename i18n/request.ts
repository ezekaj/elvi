import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';
import { notFound } from 'next/navigation';

export default getRequestConfig(async ({ requestLocale }) => {
  // Use requestLocale to get locale from the URL path (not from headers)
  let locale = await requestLocale;

  // Validate locale
  if (!locale || !routing.locales.includes(locale as any)) {
    notFound();
  }

  return {
    messages: (await import(`@/messages/${locale}.json`)).default,
  };
});
