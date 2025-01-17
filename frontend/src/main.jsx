import React from 'react'; // Explicit React import
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'; // Import CSS styles
import App from './App.jsx'; // Import the main App component

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
