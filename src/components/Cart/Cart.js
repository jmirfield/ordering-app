import React, { useContext } from 'react'
import Modal from '../UI/Modal'
import CartContext from '../../store/cart-context'
import CartItem from './CartItem'

import styles from './Cart.module.css'

const Cart = props => {
    const cartCtx = useContext(CartContext)

    const totalAmount = `$${Math.abs(cartCtx.totalAmount.toFixed(2))}`
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
        <Modal onClick={props.onHideCart}>
            {cartItems}
            <div className={styles.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={styles.actions}>
                <button className={styles['button--alt']} onClick={props.onHideCart}>Close</button>
                {hasItems && <button className={styles.button}>Order</button>}
            </div>
        </Modal>
    )
}

export default Cart
