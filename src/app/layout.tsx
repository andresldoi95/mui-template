import type { Metadata } from 'next'
import { Inter } from 'next/font/google';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import AppLayout from './components/layout/AppLayout';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MUI Template',
  description: 'Created by Andrés León',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}><AppLayout>{children}</AppLayout></body>
    </html>
  )
}
