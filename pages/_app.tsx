import type { AppProps } from 'next/app';
import { globalStyles } from 'stitches.config';
import Header from '@components/Header';
import { FavoritesProvider } from '@lib/providers/favorites';

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles();
  return <>
    <FavoritesProvider>
      <Header />
      <Component {...pageProps} />
    </FavoritesProvider>
  </>
}

export default MyApp;
