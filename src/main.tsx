import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import {CssBaseline} from '@mui/material';



const rootElement = document.getElementById('root');
const root = createRoot(rootElement!);

root.render(
  <React.StrictMode>
    <CssBaseline />
    <App />
  </React.StrictMode>
);