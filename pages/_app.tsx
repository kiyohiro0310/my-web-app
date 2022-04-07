import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Layout from '../components/layout/layout'

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <Layout>
      <Head>
        <meta
          charSet='utf-8'
          httpEquiv="X-UA-Compatible"
          name="viewport" content="IE=edge, width=device-width initial-scale=1.0"
        />
        <title>KIYO&apos;S BLOG</title>
      </Head>

        <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
