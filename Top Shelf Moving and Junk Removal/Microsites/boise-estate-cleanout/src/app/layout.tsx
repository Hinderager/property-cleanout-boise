import type { Metadata } from 'next'
import { Montserrat, Oswald } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { StructuredData } from '@/components/StructuredData'
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema'
import { VisibleBreadcrumb } from '@/components/VisibleBreadcrumb'
import { QuoteFormProvider } from '@/context/QuoteFormContext'

const oswald = Oswald({
  subsets: ['latin'],
  variable: '--font-oswald',
  weight: ['400', '600', '700'],
  display: 'swap',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['400', '600', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://boise-estate-cleanout.com'),
  title: {
    default: 'Boise Estate Cleanout | Compassionate Service | Top Shelf',
    template: '%s | Boise Estate Cleanout',
  },
  description: 'Professional estate cleanout services in Boise, Meridian, Nampa, Caldwell & Eagle Idaho. Compassionate estate clearing, donation coordination, and complete property cleanouts. Licensed & insured. Call (208) 943-5231.',
  keywords: 'estate cleanout Boise, estate clearing Idaho, property cleanout, probate cleanout, estate sale cleanup, deceased estate cleanout, inheritance cleanout, Meridian estate cleanout, Nampa estate cleanout',
  authors: [{ name: 'Boise Estate Cleanout' }],
  creator: 'Boise Estate Cleanout',
  publisher: 'Boise Estate Cleanout',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://boise-estate-cleanout.com',
    siteName: 'Top Shelf Estate Cleanout',
    title: 'Estate Cleanout Services Boise | Professional Estate Clearing Idaho',
    description: 'Professional estate cleanout services in Boise and the Treasure Valley. Compassionate estate clearing, donation coordination, and complete property cleanouts. Licensed & insured.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Boise Estate Cleanout - Boise Idaho' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Estate Cleanout Services Boise | Professional Estate Clearing Idaho',
    description: 'Professional estate cleanout services in Boise and the Treasure Valley. Compassionate estate clearing and complete property cleanouts.',
    images: ['/og-image.jpg'],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
  alternates: { canonical: 'https://boise-estate-cleanout.com' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${oswald.variable} ${montserrat.variable}`}>
        <StructuredData />
        <BreadcrumbSchema siteName="Top Shelf Estate Cleanout" siteUrl="https://boise-estate-cleanout.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="preconnect" href="https://connect.facebook.net" />
        <link rel="dns-prefetch" href="https://connect.facebook.net" />
        <link rel="dns-prefetch" href="https://www.google.com" />
      <body className="min-h-screen bg-white">
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
          <VisibleBreadcrumb />
          {children}
          <Footer />
        </QuoteFormProvider>
      </body>
    </html>
  )
}
