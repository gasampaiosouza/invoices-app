import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

import { ThemeProvider } from 'styled-components';
import THEME from './styles/theme';
import GlobalStyle from './styles/global_styles.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={THEME}>
      <App />
      <GlobalStyle />
    </ThemeProvider>
  </React.StrictMode>
);
