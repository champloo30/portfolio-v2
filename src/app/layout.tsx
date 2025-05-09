import { space } from 'postcss/lib/list'
import './globals.css'
import { Playfair_Display, Nanum_Gothic, Share_Tech_Mono, Space_Mono } from 'next/font/google'
import { Providers } from './providers'

const playfair_display = Playfair_Display({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair-display'
})

const nanum_gothic = Nanum_Gothic({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-nanum-gothic',
  weight: ['400', '700', '800']
})

const share_tech = Share_Tech_Mono({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-share-tech-mono',
  weight: ['400']
})

const space_mono = Space_Mono({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-mono',
  weight: ['400', '700']
})

export const metadata = {
  title: 'Dalyn J. L. Dunn',
  description: 'Version 2 of the portfolio for Dalyn J. L. Dunn.'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${playfair_display.variable} ${nanum_gothic.variable} ${share_tech.variable} ${space_mono.variable} w-screen font-light_display dark:font-dark_display bg-light dark:bg-dark container text-light_display dark:text-dark_display`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
