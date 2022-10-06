import 'assets/styles/globals.css';
import 'assets/styles/app.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import store from '../redux/store';
import { ThemeProvider } from 'next-themes';
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ThemeProvider attribute='class'>
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
