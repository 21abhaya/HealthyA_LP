import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import Header from './components/layouts/header/HeaderComponent'
import Footer from './components/layouts/footer/FooterComonenets'
import GoToTop from './components/layouts/gototop/GoToTop'
import Script from 'next/script'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.ajnalab.com'),
  title: 'Healthy Ayush',
  description: 'Healthy Ayush is a complete healthcare management system that enables local governments to deliver accessible, efficient, and data-driven healthcare for their citizens.',
  keywords: [
    'Healthy Ayush',
    'Municipal Health',
    'Healthcare',
    'HealthTech',
    'Public Health',
    'Digital Healthcare',
    'Health Management System',
    'Local Government Health',
  ],
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
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'Ajna Lab',
    description: 'Your Partner for HealthTech Innovation',
    url: 'https://www.ajnalab.com',
    siteName: 'Ajna Lab',
    images: [
      {
        url: '/assets/images/logo.png',
        width: 1200,
        height: 630,
        alt: 'Ajna Lab Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ajna Lab',
    description: 'Your Partner for HealthTech Innovation',
    images: ['/assets/images/logo.png'],
    site: '@AjnaLab',
    creator: '@AjnaLab',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1.0,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-NDV8S5LVRB"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-NDV8S5LVRB');
          `}
        </Script>
        <Header />
        <main className="grow">{children}</main>
        <Footer />
        <GoToTop />
      </body>
    </html>
  )
}
