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
    default: 'Dumpster Rental Boise | Roll-Off Dumpsters Idaho',
    template: '%s | Dumpster Rental Boise',
  },
  description: 'Affordable dumpster rental in Boise, Idaho. Same-day delivery available. 10, 15, 20, and 30 yard roll-off dumpsters for construction, cleanouts, and renovation projects. Call (208) 361-1982 for a free quote.',
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
  ],
  authors: [{ name: 'Dumpster Rental Pros' }],
  creator: 'Dumpster Rental Pros',
  publisher: 'Dumpster Rental Pros',
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
    siteName: 'Dumpster Rental Pros',
    title: 'Dumpster Rental Boise | Affordable Roll-Off Dumpsters',
    description: 'Same-day dumpster delivery in Boise and the Treasure Valley. Multiple sizes available for any project. Licensed and insured.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Dumpster Rental Pros - Boise Idaho',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dumpster Rental Boise | Affordable Roll-Off Dumpsters',
    description: 'Same-day dumpster delivery in Boise and the Treasure Valley. Multiple sizes available for any project.',
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
        <StructuredData />
      </body>
    </html>
  )
}
