import type { Metadata } from 'next'
import { Inter, Oswald } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { StructuredData } from '@/components/StructuredData'
import { QuoteFormProvider } from '@/context/QuoteFormContext'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const oswald = Oswald({ subsets: ['latin'], variable: '--font-oswald' })

export const metadata: Metadata = {
  metadataBase: new URL('https://boise-movers.com'),
  title: {
    default: 'Boise Movers | Professional Moving Services Idaho',
    template: '%s | Boise Movers',
  },
  description: 'Professional local and long-distance moving services in Boise, Meridian, Nampa, Caldwell & Eagle Idaho. Licensed, insured movers with careful handling and competitive rates. Free quotes!',
  keywords: ['Boise movers', 'moving company Boise', 'local movers Idaho', 'residential moving Boise', 'apartment movers', 'house moving service', 'Meridian movers', 'Nampa movers', 'Treasure Valley moving'],
  authors: [{ name: 'Boise Moving Pros' }],
  openGraph: {
    title: 'Boise Movers | Professional Moving Services Idaho',
    description: 'Professional local and long-distance moving services in Boise and the Treasure Valley. Licensed, insured, and trusted by the community.',
    url: 'https://boise-movers.com',
    siteName: 'Boise Moving Pros',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Boise Movers | Professional Moving Services Idaho',
    description: 'Professional local and long-distance moving services in Boise and the Treasure Valley.',
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
    canonical: 'https://boise-movers.com',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
      </head>
      <body className={`${inter.variable} ${oswald.variable} font-sans antialiased`}>
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
          <main>{children}</main>
          <Footer />
        </QuoteFormProvider>
      </body>
    </html>
  )
}
