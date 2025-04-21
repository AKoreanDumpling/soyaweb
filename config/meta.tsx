export const meta = {
  metadataBase: new URL('https://hoseproject.vercel.app'),
  title: 'The hOSe Project',
  description: 'Humane Operating System for the Elderly',
  authors: [{ name: 'Nathan Mah' }],
  keywords: ['hOSe'],
  publisher: 'Nathan Mah',
  creator: 'Nathan Mah',
  openGraph: {
    type: 'website',
    title: 'hOSe',
    description: 'The hOSe Project',
    images: [
      {
        url: 'https://hoseproject.vercel.app/logos/hose.svg',
        width: 1200,
        height: 1200,
        alt: 'The hOSe Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image', // Type of Twitter card
    title: 'Pinexio - Documentation Template', // Twitter card title
    description:
      'A customizable open-source documentation template built with Next.js.', // Twitter card description
    images: ['/og_image.png'], // Image used in the Twitter card
    creator: '@sanjayrajeev', // Twitter handle of the content creator (optional)
  },
  // SEO Enhancements
  alternates: {
    canonical: 'https://hoseproject.vercel.app', // Set the canonical URL
  },
  robots: 'index, follow', // Allows search engines to index and follow links
  // Optional: Hreflang for multilingual content (if applicable)
  hreflang: {
    en: 'https://hoseproject.vercel.app', // English version URL
    // Add more hreflang if you have other languages (example: Spanish)
    // "es": "https://pinexio.vercel.app/es",
  },
};
