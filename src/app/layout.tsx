import { Geist } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { Metadata } from 'next';
import { meta } from '../../config/meta';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/next';
import Script from 'next/script';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = meta;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta
          name="google-site-verification"
          content="zeS-k-BkwcPh8gEE_589FN8va84BJonUTZNjRE67T2U"
        />
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-WKB0BSSBY0"
        ></Script>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6653194747464530"
          crossorigin="anonymous"
        ></Script>
      </head>

      <body
        className={`
          ${geistSans.className}
          text-sm
          font-regular tracking-wide antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <SpeedInsights />
          <Analytics />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
