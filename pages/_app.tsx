import type { AppProps } from 'next/app';

import 'styles/globals.css';

function DefaultApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
export default DefaultApp;
