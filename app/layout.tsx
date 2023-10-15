
import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import Navbar from './Navbar'
import { ThemeProvider } from "@/components/theme-provider"
const poppins = Poppins({
  subsets: ['latin'],
  weight: '400'
})
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className} >
        <ThemeProvider attribute='class' defaultTheme='system'>

        <Navbar />
        <main className='m-10'>
        {children}
        </main>

        </ThemeProvider>
        </body>
    </html>
  )
}
