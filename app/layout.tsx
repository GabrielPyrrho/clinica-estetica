import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Lumina Estética - Tratamentos Estéticos Especializados',
  description: 'Lumina Estética - Harmonização facial, preenchimentos e tratamentos estéticos em Boa Viagem',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/images/logo/ChatGPT Image 18 de set. de 2025, 01_52_43.png" />
        <link rel="shortcut icon" href="/images/logo/ChatGPT Image 18 de set. de 2025, 01_52_43.png" />
        <link rel="apple-touch-icon" href="/images/logo/ChatGPT Image 18 de set. de 2025, 01_52_43.png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}