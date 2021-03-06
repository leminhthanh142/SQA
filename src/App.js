import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { NotFoundPage } from './pages/NotFoundPage';
import { MenuPage } from './pages/MenuPage';
import { ContactPage } from './pages/Contact';
import { Flash } from './components/Flash';
import { OrdersPage } from './pages/Orders';
import { FlashContextProvider } from './context/flash';
import { OrdersContextProvider } from './context/orders';

import './style.css';

function App() {
  return (
    <div className="App">
      <OrdersContextProvider>
        <FlashContextProvider>
          <Flash />
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/menu" element={<MenuPage />} />
            <Route exact path="/contact" element={<ContactPage />} />
            <Route exact path="/orders" element={<OrdersPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </FlashContextProvider>
      </OrdersContextProvider>
    </div>
  );
}

export default App;
