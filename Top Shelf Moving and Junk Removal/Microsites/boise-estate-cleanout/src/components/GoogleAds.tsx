'use client'

import Script from 'next/script'

interface GoogleAdsProps {
  adsId: string
  conversionId?: string
}

export function GoogleAds({ adsId, conversionId }: GoogleAdsProps) {
  if (!adsId) {
    return null
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${adsId}`}
        strategy="afterInteractive"
      />
      <Script id="google-ads-config" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${adsId}');
          ${conversionId ? `gtag('config', '${conversionId}');` : ''}
        `}
      </Script>
    </>
  )
}
