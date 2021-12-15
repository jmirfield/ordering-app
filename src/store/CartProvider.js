import React, { useReducer } from 'react'
import CartContext from './cart-context'

const defaultCartState = {
    items: [],
    totalAmount: 0
}

const cartReducer = (state, action) => {
    let updatedItems;
    switch (action.type) {
        case ('ADD_ITEM'):
            const updatedTotal = state.totalAmount + action.payload.price * action.payload.amount
            const existingCartItemIndex = state.items.findIndex(item => {
                return item.id === action.payload.id
            })
            const existingCartItem = state.items[existingCartItemIndex]

            if (existingCartItem) {
                let updatedItem = {
                    ...existingCartItem,
                    amount: existingCartItem.amount + action.payload.amount
                }
                updatedItems = [...state.items]
                updatedItems[existingCartItemIndex] = updatedItem
            } else {
                updatedItems = state.items.concat(action.payload)
            }
            return {
                items: updatedItems,
                totalAmount: updatedTotal
            }

        case ('REMOVE_ITEM'):
            const removedCartItemIndex = state.items.findIndex(item => {
                return item.id === action.payload
            })
            const removedItem = state.items[removedCartItemIndex]
            const removedTotalAmount = state.totalAmount - removedItem.price
            if (removedItem.amount === 1) {
                updatedItems = state.items.filter(item => {
                    return item.id !== action.payload
                })
            } else {
                updatedItems = [...state.items]
                updatedItems[removedCartItemIndex] = {
                    ...removedItem,
                    amount: removedItem.amount - 1
                }
            }
            return {
                items: updatedItems,
                totalAmount: removedTotalAmount
            }
        default:
            return state
    }
}

const CartProvider = props => {
    const [cartState, dispatchCart] = useReducer(cartReducer, defaultCartState)

    const addItemToCartHandler = (item) => {
        dispatchCart({ type: 'ADD_ITEM', payload: item })
    }

    const removeItemFromCartHandler = (id) => {
        dispatchCart({ type: 'REMOVE_ITEM', payload: id })
    }

    const cartContext = {
        ...cartState,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    }

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider
