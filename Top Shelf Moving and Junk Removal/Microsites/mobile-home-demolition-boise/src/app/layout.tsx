import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'
import { QuoteFormProvider } from '@/context/QuoteFormContext'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { StructuredData } from '@/components/StructuredData'

export const metadata: Metadata = {
  metadataBase: new URL('https://mobile-home-demolition-boise.com'),
  title: {
    default: 'Mobile Home Demolition Boise | Manufactured Home Removal Idaho',
    template: '%s | Boise Mobile Home Demolition',
  },
  description: 'Professional mobile home demolition in Boise and the Treasure Valley. Single wides, double wides, manufactured homes. Complete teardown, foundation removal, and site cleanup. Licensed, insured, and locally owned.',
  keywords: [
    'mobile home demolition Boise',
    'manufactured home removal Idaho',
    'trailer demolition Boise',
    'mobile home removal Treasure Valley',
    'single wide demolition Boise',
    'double wide demolition Idaho',
    'mobile home disposal Boise',
    'site clearing Idaho',
    'foundation removal Boise',
    'manufactured home demolition Meridian',
  ],
  authors: [{ name: 'Boise Mobile Home Demolition' }],
  creator: 'Boise Mobile Home Demolition',
  publisher: 'Boise Mobile Home Demolition',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://mobile-home-demolition-boise.com',
    siteName: 'Boise Mobile Home Demolition',
    title: 'Mobile Home Demolition Boise | Manufactured Home Removal Idaho',
    description: 'Professional mobile home demolition in Boise and the Treasure Valley. Single wides, double wides, manufactured homes. Complete teardown, foundation removal, and site cleanup.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Boise Mobile Home Demolition - Professional Removal Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mobile Home Demolition Boise | Manufactured Home Removal Idaho',
    description: 'Professional mobile home demolition in Boise and the Treasure Valley. Single wides, double wides, manufactured homes. Complete teardown, foundation removal, and site cleanup.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://mobile-home-demolition-boise.com',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" sizes="48x48" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
        <StructuredData />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://connect.facebook.net" />
        <link rel="dns-prefetch" href="https://www.google.com" />
      </head>
      <body className="min-h-screen bg-white antialiased">
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-581QKP6ZE5"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-581QKP6ZE5');
            
            gtag('config', 'AW-11134633087');
          `}
        </Script>
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '533217938868618');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{display:'none'}}
            src="https://www.facebook.com/tr?id=533217938868618&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        <QuoteFormProvider>
          <Header />
          <main>
            {children}
          </main>
          <Footer />
        </QuoteFormProvider>
      </body>
    </html>
  )
}
