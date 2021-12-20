import React, { useContext, useEffect, useState } from 'react'

import CartIcon from '../Cart/CartIcon';
import CartContext from '../../store/cart-context';
import styles from './HeaderCartButton.module.css'

const HeaderCartButton = (props) => {

    const [newCartItem, setNewCartItem] = useState(false)
    const cartCtx = useContext(CartContext)
    const { items } = cartCtx
    const btnClasses = `${styles.button} ${newCartItem ? styles.bump : ''}`

    useEffect(() => {
        if (items.length === 0){
            return;
        }
        setNewCartItem(true)
        const timer = setTimeout(() => {
            setNewCartItem(false)
        }, 300)
        return () => {
            clearTimeout(timer)
        }
    }, [items])

    return (
        <button className={btnClasses} onClick={props.onClick}>
            <span className={styles.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={styles.badge}>{cartCtx.items.reduce((acc, item) => {
                return acc + item.amount
            }, 0)}</span>
        </button>
    )
}

export default HeaderCartButton;