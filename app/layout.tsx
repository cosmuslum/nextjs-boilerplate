import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'NederLearn.nl - A0\'dan B1\'e Hollandaca Öğren',
  description: 'Türkçe, İngilizce, İspanyolca, Arapça dillerinden Hollandaca öğrenin. Ücretsiz dersler, interaktif alıştırmalar ve sertifika programı.',
  keywords: 'hollandaca, nederlands, dil öğrenme, online kurs, türkçe hollandaca, learn dutch',
  authors: [{ name: 'NederLearn' }],
  openGraph: {
    type: 'website',
    url: 'https://nederlearn.nl',
    title: 'NederLearn - Hollandaca Öğrenim Platformu',
    description: '5 dilde Hollandaca öğrenin',
    siteName: 'NederLearn',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
