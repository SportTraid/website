import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Triad - Training the Mind. Protecting the Love of the Game.',
  description: 'AI-powered sports psychology platform for youth sports',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

