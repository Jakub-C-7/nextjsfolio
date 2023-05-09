import './globals.css'

export const metadata = {
  title: 'Jakub | Portfolio',
  description: 'Generated by create next app',
  charset: 'UTF-8',
  keywords: 'portfolio, jakub, kuba',
}

export default function RootLayout({ children }) {
  return (
    <html>
      <body>{children}</body>
    </html>
  )
}