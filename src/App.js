import './App.css';

import { CartProvider } from './context/CartProvider'

import { BrowserRouter, Route, Routes } from 'react-router-dom';

// COMPONENTS
import { Header } from './components/Header/Header';

// PAGES
import { HomePage } from './pages/HomePage';
import { ProductsPage } from './pages/ProductsPage';
import { CartPage } from './pages/CartPage';

function App() {
  return (
    <CartProvider>
      <div className="App">
        <BrowserRouter>
          <Header />

          <div className="container">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/cart" element={<CartPage />} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </CartProvider>
  );
}

export default App;
