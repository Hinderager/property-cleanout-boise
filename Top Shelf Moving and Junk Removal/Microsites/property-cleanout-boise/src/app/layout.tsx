import type { Metadata } from 'next'
import Script from 'next/script'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { StructuredData } from '@/components/StructuredData'
import { QuoteFormProvider } from '@/context/QuoteFormContext'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://property-cleanout-boise.com'),
  title: {
    default: 'Property Cleanout Services Boise | Professional Property Clearing Idaho',
    template: '%s | Property Cleanout Boise',
  },
  description: 'Professional property cleanout services in Boise, Meridian, Nampa, Caldwell & Eagle Idaho. Foreclosure cleanouts, rental turnovers, and complete property clearing. Licensed & insured. Call (208) 361-1982.',
  keywords: 'property cleanout Boise, foreclosure cleanout Idaho, rental cleanout, property clearing, eviction cleanout, Meridian property cleanout, Nampa property cleanout',
  authors: [{ name: 'Property Cleanout Pros' }],
  creator: 'Property Cleanout Pros',
  publisher: 'Property Cleanout Pros',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://property-cleanout-boise.com',
    siteName: 'Property Cleanout Pros - Boise Idaho',
    title: 'Property Cleanout Services Boise | Professional Property Clearing Idaho',
    description: 'Professional property cleanout services in Boise and the Treasure Valley. Foreclosure cleanouts, rental turnovers, and complete property clearing. Licensed & insured.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Property Cleanout Pros - Boise Idaho' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Property Cleanout Services Boise | Professional Property Clearing Idaho',
    description: 'Professional property cleanout services in Boise and the Treasure Valley. Foreclosure cleanouts and complete property clearing.',
    images: ['/og-image.jpg'],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
  alternates: { canonical: 'https://property-cleanout-boise.com' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
      </head>
      <body className="min-h-screen bg-white">
        <Script src="https://www.googletagmanager.com/gtag/js?id=AW-11134633087" strategy="afterInteractive" />
        <Script id="google-ads" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'AW-11134633087');`}
        </Script>
        <Script id="meta-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','533217938868618');fbq('track','PageView');`}
        </Script>
        <noscript><img height="1" width="1" style={{display:'none'}} src="https://www.facebook.com/tr?id=533217938868618&ev=PageView&noscript=1" alt="" /></noscript>
        <QuoteFormProvider>
          <Header />
          {children}
          <Footer />
        </QuoteFormProvider>
      </body>
    </html>
  )
}
