import React, { useState, useEffect } from 'react'

import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import CartMain from './components/Cart/CartMain';
import CartProvider from './store/CartProvider';

function App() {
  const [cartModal, setCartModal] = useState(false)

  const cartShowModalHandler = () => {
    setCartModal(true)
  }

  const cartHideModalHandler = () => {
    setCartModal(false)
  }

  useEffect(() => {
    if (cartModal) {
      document.body.style.overflow = 'hidden'
      document.body.style.marginRight = '16px';
    }
    return () => {
      document.body.style.overflow = 'unset'
      document.body.style.marginRight = '0px';
    }
  }, [cartModal])

  return (
    <CartProvider>
      {cartModal && <CartMain onHideCart={cartHideModalHandler} />}
      <Header onShowCart={cartShowModalHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
