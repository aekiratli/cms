import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { AppProvider } from './AppContext';
import { ThemeProvider } from '@mui/material';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import { lightTheme } from './theme';
import {
  RouterProvider,
} from "react-router-dom";
import router from './routes';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <I18nextProvider i18n={i18n}>
    <AppProvider>
      <ThemeProvider theme={lightTheme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </AppProvider>
  </I18nextProvider>


);
