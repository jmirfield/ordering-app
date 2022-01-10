import React, { useContext, useState } from 'react'
import CartModal from '../UI/CartModal'
import CartContext from '../../store/cart-context'
import CartItem from './CartItem'
import Checkout from './Checkout'

import Button from 'react-bootstrap/Button'
import styles from './Cart.module.css'
 
const Cart = props => {
    const cartCtx = useContext(CartContext)
    const [checkout, setCheckout] = useState(false)

    const totalAmount = `$${Math.abs(cartCtx.totalAmount).toFixed(2)}`
    const hasItems = cartCtx.items.length > 0

    const cartItemRemoveHandler = (id) => {
        cartCtx.removeItem(id)
    }

    const cartItemAddHandler = (item) => {
        const updatedItem = {
            ...item,
            amount: 1
        }
        cartCtx.addItem(updatedItem)
    }

    const checkoutHandler = () => {
        setCheckout(prev => !prev)
    }

    const cartItems = (
        <ul className={styles['cart-items']}>
            {cartCtx.items.map(item => {
                return <CartItem
                    name={item.name}
                    key={item.id}
                    price={item.price}
                    amount={item.amount}
                    onRemove={cartItemRemoveHandler.bind(null, item.id)}
                    onAdd={cartItemAddHandler.bind(null, item)}

                />
            }
            )}
        </ul>
    )

    return (
        <CartModal onClick={props.onHideCart}>
            {cartItems}
            <div className={styles.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            {checkout && hasItems && <Checkout onClose={props.onHideCart} />}
            <div className={styles.actions}>
                {!checkout && <Button variant='secondary' className='mx-auto' onClick={props.onHideCart}>Close</Button>}
                {hasItems && !checkout && <Button variant='primary' className={`ms-1 ${styles.button}`} onClick={checkoutHandler}>Order</Button>}
            </div>
        </CartModal>
    )
}

export default Cart
