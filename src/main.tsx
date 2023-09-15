import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '@/app';
import './index.css';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from '@/app/theme';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
