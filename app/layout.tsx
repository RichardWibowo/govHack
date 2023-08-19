import './globals.css'

export const metadata = {
  title: 'Richard Wibowo',
  description: 'Generated by following sony tutorial ',
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
