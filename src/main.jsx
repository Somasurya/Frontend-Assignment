import React from 'react';
import { createRoot } from 'react-dom/client'; // Correct import for createRoot
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import ShopContextProvider from './context/ShopContext.jsx';

// Ensure the root element exists in your HTML
const rootElement = document.getElementById('root');

if (!rootElement) {
    throw new Error("Root element not found. Please ensure there's an element with id 'root' in your HTML.");
}

createRoot(rootElement).render(
    <BrowserRouter>
        <ShopContextProvider>
            <App />
        </ShopContextProvider>
    </BrowserRouter>
);
