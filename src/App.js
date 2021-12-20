import React, { useState } from 'react'

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
