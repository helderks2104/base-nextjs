// O Arquivo app ira envolver todos os componentes da nossa aplicação
// Como rotas entre outros

import { AppProps } from 'next/app';
import { GlobalStyles } from '../styles/global-styles';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <GlobalStyles />
    </ThemeProvider>
  );
}
