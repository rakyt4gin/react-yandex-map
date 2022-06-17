import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { Suspense } from 'react';

import Store from './store/store';
import App from './App';

const container = document.getElementById('app') as HTMLDivElement;
const root = createRoot(container);
root.render(
  <Provider store={Store()}>
    <Suspense fallback={<div>Loading</div>}>
      <App />
    </Suspense>
  </Provider>
);
