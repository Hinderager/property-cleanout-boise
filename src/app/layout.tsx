import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Property Cleanout Boise | Coming Soon',
  description: 'Complete property cleanout services in Boise, Idaho. Foreclosure cleanouts, rental turnovers, and hoarding cleanup.',
  keywords: 'property cleanout, Boise, Idaho, foreclosure cleanout, rental cleanout, hoarding cleanup',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
