import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { WhatsAppButton } from './components/WhatsAppButton'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'OiChat - Atendimento Automatizado via WhatsApp',
  description: 'Automatize seu atendimento no WhatsApp com Inteligência Artificial. Responda até 500 leads por dia de forma automática, rápida e humanizada.',
  keywords: ['whatsapp', 'atendimento', 'automação', 'ia', 'inteligência artificial', 'crm', 'chatbot'],
  authors: [{ name: 'OiChat' }],
  openGraph: {
    title: 'OiChat - Atendimento Automatizado via WhatsApp',
    description: 'Automatize seu atendimento no WhatsApp com Inteligência Artificial. Responda até 500 leads por dia de forma automática, rápida e humanizada.',
    type: 'website',
    locale: 'pt_BR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OiChat - Atendimento Automatizado via WhatsApp',
    description: 'Automatize seu atendimento no WhatsApp com Inteligência Artificial. Responda até 500 leads por dia de forma automática, rápida e humanizada.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="dark">
      <body className={inter.className}>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  )
} 