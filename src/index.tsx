import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Provider } from 'react-redux';
import store from './store/store';

import { ErrorBoundary, FallbackProps } from 'react-error-boundary';

function Bomb() {
  throw new Error('💥 CABOOM 💥');
  return <></>;
}

function Hoge() {
  const [explode, setExplode] = React.useState(false);
  return (
    <div>
      <button onClick={() => setExplode((e) => !e)}>toggle explode</button>
      <ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => setExplode(false)} resetKeys={[explode]}>
        {explode ? <Bomb /> : null}
      </ErrorBoundary>
    </div>
  );
}

function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <ErrorBoundary FallbackComponent={ErrorFallback}> */}
      <App />
      <Hoge />
      {/* </ErrorBoundary> */}
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
