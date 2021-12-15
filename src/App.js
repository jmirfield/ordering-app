import React, { useState } from 'react'

import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';

function App() {

  const [cartModal, setCartModal] = useState(false)

  const cartShowModalHandler = () => {
    setCartModal(true)
  }

  const cartHideModalHandler = () => {
    setCartModal(false)
  }

  return (
    <CartProvider>
      {cartModal && <Cart onHideCart={cartHideModalHandler} />}
      <Header onShowCart={cartShowModalHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
