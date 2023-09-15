import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '@/app';
import './index.css';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from '@/app/theme';
import { Provider } from 'react-redux';
import { store } from '@/app/store';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
