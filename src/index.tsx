import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Provider, useSelector } from 'react-redux';
import store, { RootState } from './store/store';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { NotFound } from './features/error/NotFound';
import { ThemeProvider } from '@mui/system';
import { createTheme, CssBaseline } from '@mui/material';
import { ChangeTheme } from './component/changeTheme';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
  },
  {
    path: '/theme',
    element: <ChangeTheme />,
  },
]);

const WrappedThemeProvider = ({ children }: { children: JSX.Element }) => {
  const { theme: mode } = useSelector((state: RootState) => state.theme);
  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <WrappedThemeProvider>
        <>
          <RouterProvider router={router} />
          <CssBaseline />
        </>
      </WrappedThemeProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
