import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'
import ScrollToTop from './components/ScrollToTop'
import { CartProvider } from './context/CartContext'

// Fix Safari back-forward cache (bfcache) glitch
window.addEventListener('pageshow', (event) => {
  if (event.persisted) {
    window.location.reload();
  }
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <CartProvider>
        <ScrollToTop />
        <App />
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>
)
