import { Toaster } from '@/components/ui/toaster'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Time Journal',
    description: 'Track your time wisely with Time Journal.'
}

export default function RootLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <html lang='en'>
            <body className={inter.className}>
                <main className='max-w-6xl mx-auto min-h-screen'>
                    {children}
                </main>
                <Toaster />
            </body>
        </html>
    )
}
