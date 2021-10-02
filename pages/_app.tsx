import type { AppProps } from 'next/app';

import Head from 'next/head';

import 'styles/globals.css';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>마켓컬리 :: 내일의 장보기, 마켓컬리</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
export default App;
