import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

import { ProviderWrapper } from '@/components/layouts/wrapper/ProviderWrapper.tsx';

import App from './App.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ProviderWrapper>
      <App />
    </ProviderWrapper>
  </React.StrictMode>,
);
