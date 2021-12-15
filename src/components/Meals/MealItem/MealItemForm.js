import React, { useRef, useState } from 'react'

import Input from '../../UI/Input'
import styles from './MealItemForm.module.css'


const MealItemForm = props => {
    const amountInputRef = useRef()
    const [isFormValid, setIsFormValid] = useState(true)

    const submitHandler = e => {
        e.preventDefault()
        const enteredAmount = +amountInputRef.current.value
        if(enteredAmount < 1) {
            setIsFormValid(false)
            return;
        }
        setIsFormValid(true)
        props.onAddToCart(enteredAmount)
        amountInputRef.current.value = 1
    }
    return (
        <form className={styles.form} onSubmit={submitHandler}>
            <Input
                ref={amountInputRef}
                label="Amount"
                input={{
                    id: props.id,
                    type: 'number',
                    min: '1',
                    max: '5',
                    step: '1',
                    defaultValue: '1'
                }}
            />
            <button type='submit'>+ Add</button>
            {!isFormValid && <p>Please enter a valid amount (1-5)</p>}
        </form>
    )
}

export default MealItemForm
