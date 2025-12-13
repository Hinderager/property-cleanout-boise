import type { Metadata } from 'next'
import { Oswald, Open_Sans } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { StructuredData } from '@/components/StructuredData'
import { QuoteFormProvider } from '@/context/QuoteFormContext'

const oswald = Oswald({
  subsets: ['latin'],
  variable: '--font-oswald',
  display: 'swap',
})

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://boise-tire-removal.com'),
  title: 'Tire Removal Boise | Same-Day Tire Pickup | Tire Removal Pros',
  description: 'Professional tire removal in Boise, Idaho. We haul away old tires from homes, businesses, and properties. Any quantity, proper disposal. Call (208) 361-1982 for a free quote.',
  keywords: 'tire removal Boise, tire disposal, tire hauling, old tire pickup, Boise Idaho, Meridian, Nampa, Caldwell, Eagle, tire recycling',
  openGraph: {
    title: 'Tire Removal Boise | Same-Day Tire Pickup | Tire Removal Pros',
    description: 'Professional tire removal in Boise and the Treasure Valley. We haul away any quantity of tires with proper eco-friendly disposal.',
    url: 'https://boise-tire-removal.com',
    siteName: 'Tire Removal Pros',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tire Removal Boise | Same-Day Tire Pickup',
    description: 'Professional tire removal in Boise and the Treasure Valley. We haul away any quantity of tires with proper eco-friendly disposal.',
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
    canonical: 'https://boise-tire-removal.com',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${oswald.variable} ${openSans.variable}`}>
      <body className="font-body antialiased">
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-11134633087"
          strategy="afterInteractive"
        />
        <Script id="google-ads" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
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
          {children}
          <Footer />
        </QuoteFormProvider>
        <StructuredData />
      </body>
    </html>
  )
}
