import type { Metadata } from 'next'
import Script from 'next/script'
import { Montserrat, Open_Sans } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { StructuredData } from '@/components/StructuredData'
import { QuoteFormProvider } from '@/context/QuoteFormContext'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
})

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://boise-dumpster-rental.com'),
  title: {
    default: 'Boise Dumpster Rental | Roll-Off Containers Idaho | (208) 505-9352',
    template: '%s | Boise Dumpster Rental',
  },
  description: 'Need a dumpster in Boise? Same-day delivery on 10, 15, 20, 30, and 40 yard roll-off containers. Fair pricing, no hidden fees. Perfect for construction, cleanouts, and remodels. Call (208) 505-9352 today.',
  keywords: [
    'dumpster rental Boise',
    'roll-off dumpster Boise',
    'construction dumpster Idaho',
    'debris container rental',
    'waste removal Boise',
    'dumpster rental near me',
    'affordable dumpster rental',
    'same day dumpster delivery',
    'residential dumpster rental',
    'commercial dumpster rental',
    'Treasure Valley dumpster',
    '10 yard dumpster',
    '20 yard dumpster',
    '30 yard dumpster',
    '40 yard dumpster',
  ],
  authors: [{ name: 'Boise Dumpster Rental' }],
  creator: 'Boise Dumpster Rental',
  publisher: 'Boise Dumpster Rental',
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
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://boise-dumpster-rental.com',
    siteName: 'Boise Dumpster Rental',
    title: 'Boise Dumpster Rental | Roll-Off Containers for Any Project',
    description: 'Same-day delivery on roll-off dumpsters throughout Boise and the Treasure Valley. 10 to 40 yard sizes available. Fair pricing, no surprises. Licensed and insured.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Boise Dumpster Rental - Roll-Off Containers Idaho',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Boise Dumpster Rental | Roll-Off Containers for Any Project',
    description: 'Same-day delivery on roll-off dumpsters throughout Boise and the Treasure Valley. 10 to 40 yard sizes available.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://boise-dumpster-rental.com',
  },
  verification: {
    google: 'verification-code-here',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${openSans.variable}`}>
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
          <main>{children}</main>
          <Footer />
        </QuoteFormProvider>
        <StructuredData />
      </body>
    </html>
  )
}
