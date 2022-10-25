import type {AppProps} from 'next/app'
//
import '~/styles/globals.css'
import {Layout} from "~/src/layouts";
import {NextPageWithLayout} from "~/models/apps";


type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({Component, pageProps}: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => <Layout>
    {page}
  </Layout>)

  return getLayout(<Component {...pageProps} />)
}

export default MyApp
