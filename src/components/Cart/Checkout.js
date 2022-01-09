import React, { useState, useRef } from 'react'
import Button from 'react-bootstrap/Button'
import classes from './Checkout.module.css'

const isEmpty = value => value.trim().length === 0
const isNotFiveChars = value => value.trim().length === 5

const Checkout = (props) => {
    const [formInputsValid, setFormInputsValid] = useState({
        name: true,
        street: true,
        postal: true,
        city: true
    })
    // console.log(formInputsValid)

    const nameRef = useRef()
    const streetRef = useRef()
    const postalRef = useRef()
    const cityRef = useRef()

    const formSubmitHandler = (e) => {
        e.preventDefault()
        const enteredName = nameRef.current.value
        const enteredStreet = streetRef.current.value
        const enteredPostal = postalRef.current.value
        const enteredCity = cityRef.current.value

        const isNameValid = !isEmpty(enteredName)
        const isStreetValid = !isEmpty(enteredStreet)
        const isPostalValid = isNotFiveChars(enteredPostal)
        const isCityValid = !isEmpty(enteredCity)

        setFormInputsValid({
            name: isNameValid,
            street: isStreetValid,
            postal: isPostalValid,
            city: isCityValid
        })

    } 

    return (
        <form onSubmit={formSubmitHandler} className={classes.form} autoComplete='nope'>
            <div className={`${classes.control} ${formInputsValid.name ? '' : classes.invalid}`}>
                <label htmlFor='name'>Your Name</label>
                <input ref={nameRef} type='text' id='name' autoComplete='nope'></input>
                {!formInputsValid.name && <p className={classes.invalid}>Please enter a valid name!</p>}
            </div>
            <div className={`${classes.control} ${formInputsValid.street ? '' : classes.invalid}`}>
                <label htmlFor='street'>Street</label>
                <input ref={streetRef} type='text' id='street' autoComplete='nope'></input>
                {!formInputsValid.street && <p className={classes.invalid}>Please enter a valid street!</p>}
            </div>
            <div className={`${classes.control} ${formInputsValid.postal ? '' : classes.invalid}`}>
                <label htmlFor='postal'>Postal Code</label>
                <input ref={postalRef} type='text' id='postal' autoComplete='nope'></input>
                {!formInputsValid.postal && <p className={classes.invalid}>Please enter a valid postal code!</p>}
            </div>
            <div className={`${classes.control} ${formInputsValid.city ? '' : classes.invalid}`}>
                <label htmlFor='city'>City</label>
                <input ref={cityRef} type='text' id='city' autoComplete='nope'></input>
                {!formInputsValid.city && <p className={classes.invalid}>Please enter a valid city!</p>}
            </div>
            {<input autoComplete="on" style={{ display: 'none' }}/> /*Hack to disable autocomplete*/}
            <Button type='button' variant='secondary' className='mt-2' onClick={props.onClose}>Close</Button>
            <Button type='submit' variant={'success'} className={`ms-1 mt-2`}>Confirm</Button>
        </form>
    )
}

export default Checkout
