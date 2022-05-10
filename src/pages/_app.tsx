import type { AppProps } from 'next/app'
import 'tailwindcss/tailwind.css'
import { Layout } from 'src/components/layout'

import "../styles/fonts.css"
import '../styles/global.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <Layout>
    <Component {...pageProps} />
  </Layout>
  )
}

export default MyApp
