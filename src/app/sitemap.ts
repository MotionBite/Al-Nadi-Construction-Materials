import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://alnadi.sa';
  
  // In a real scenario, fetch dynamic slugs from Sanity here
  const staticRoutes = [
    '',
    '/about',
    '/products',
    '/categories',
    '/brands',
    '/faq',
    '/contact',
    '/quote'
  ];

  const routes = staticRoutes.flatMap((route) => [
    {
      url: `${baseUrl}/en${route}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: route === '' ? 1 : 0.8,
    },
    {
      url: `${baseUrl}/ar${route}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: route === '' ? 1 : 0.8,
    }
  ]);

  return routes;
}
