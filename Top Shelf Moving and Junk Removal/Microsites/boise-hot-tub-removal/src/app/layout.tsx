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
  metadataBase: new URL('https://boise-hot-tub-removal.com'),
  title: 'Hot Tub Removal Boise | Same-Day Spa Removal | Boise Hot Tub Removal',
  description: 'Professional hot tub removal in Boise, Idaho. Safe disconnection, full demolition, and eco-friendly disposal. Same-day service available. Call (208) 361-1982 for a free quote.',
  keywords: 'hot tub removal Boise, spa removal Boise, jacuzzi removal, hot tub disposal, hot tub demolition, deck hot tub removal, Boise Idaho, Meridian, Nampa, Caldwell, Eagle',
  openGraph: {
    title: 'Hot Tub Removal Boise | Same-Day Spa Removal | Boise Hot Tub Removal',
    description: 'Professional hot tub removal in Boise and the Treasure Valley. Safe disconnection, demolition, and eco-friendly disposal.',
    url: 'https://boise-hot-tub-removal.com',
    siteName: 'Boise Hot Tub Removal',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hot Tub Removal Boise | Same-Day Spa Removal',
    description: 'Professional hot tub removal in Boise and the Treasure Valley. Safe disconnection, demolition, and eco-friendly disposal.',
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
    canonical: 'https://boise-hot-tub-removal.com',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${oswald.variable} ${openSans.variable}`}>
      <body className="font-body antialiased">
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-46RY05JDNS"
          strategy="afterInteractive"
        />
        <Script id="google-ads" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-46RY05JDNS');
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
