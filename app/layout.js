import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({
  weight:['400', '700'],
  subsets: ['latin'] ,
  variable:"--font-inter",
})

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} mx-32 my-12`}>
      {children}
      </body>
    </html>
  )
}
