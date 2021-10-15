import 'styles/globals.css';

import { Provider } from 'react-redux';

import store from '../src/common/store';

function DefaultApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
export default DefaultApp;
