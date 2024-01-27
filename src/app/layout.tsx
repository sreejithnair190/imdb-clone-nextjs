import Header from '@/components/header'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Providers from './providers'
import Navbar from '@/components/navbar'
import SearchBox from '@/components/searchBox'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'IMDB',
  description: 'Movie database clone',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Header />
          <Navbar />
          {/* <SearchBox /> */}
          {children}
        </Providers>
      </body>
    </html>
  )
}
