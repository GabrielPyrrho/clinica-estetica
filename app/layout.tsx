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
      <body className={inter.className}>{children}</body>
    </html>
  )
}