import Navbar from '@component/components/Navbar'
import Footer from '@component/components/Footer'
import '@component/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <html className='dark'>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </html>
    </>
  )
}
