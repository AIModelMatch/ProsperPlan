/**
 * ProserPlan React Bootstrapping File (src/main.tsx)
 * * This file is the entry point for the React application.
 * It connects the main App component to the 'root' element in index.html.
 * * Copyright (C) 2025 [Your Name or Organization Name] - Licensed under GPL v3.0
 */
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
// We also need to import a basic CSS file to pull in Tailwind styles
import './index.css'; 

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);