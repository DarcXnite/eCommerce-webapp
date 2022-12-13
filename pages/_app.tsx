import '../styles/globals.css'
import '../components/styles/navbar.css'
import '../components/styles/footer.css'
import '../components/styles/jumbotron.css'
import '../components/productsCollage/productsCollage.css'
import '../components/featuredProducts/featuredProducts.css'
import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}

export default MyApp
