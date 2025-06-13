import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
   icons: 'favicon.ico',
   title: 'Choirul Anwar',
   description: 'My protofolio Choirul Anwar',
}

export default function RootLayout({
   children,
}: {
   children: React.ReactNode
}) {
   return (
      <html lang="en" className="scroll-smooth focus:scroll-auto">
         <body suppressHydrationWarning={true} className={`bg-slate-900 text-slate-400 leading-relaxed antialiased selection:bg-teal-300 selection:text-teal-900 ${inter.className}`}>
            {children}
         </body>
      </html>
   )
}
