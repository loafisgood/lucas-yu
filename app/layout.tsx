import './globals.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Providers from './Providers'

export const metadata = {
  title: 'Lucas Yu',
  description: 'Portfolio Site for Lucas Yu',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-white">
        <div className="flex min-h-screen">
          <div className="bg-white w-3/12"></div>
          <div className="bg-white w-6/12">
            <Header />
            <Providers>
              <div className="flex flex-col min-h-screen">{children}</div>
            </Providers>
            <Footer />
          </div>
          <div className="bg-white w-3/12"></div>
        </div>
      </body>
    </html>
  )
}