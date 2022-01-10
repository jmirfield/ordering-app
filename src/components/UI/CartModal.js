import React from 'react'
import ReactDOM from 'react-dom'
import styles from './CartModal.module.css'

const Backdrop = (props) => {
    return <div className={styles.backdrop} onClick={props.onClick} />
}

const ModalOverlay = (props) => {
    return (
        <div className={styles.modal}>
            <div className={styles.content}>{props.children}</div>
        </div>
    )
}

const portalElement = document.getElementById('overlays')

const CartModal = props => {
    return (
        <React.Fragment>
            {ReactDOM.createPortal(<Backdrop onClick={props.onClick}/>, portalElement)}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
        </React.Fragment>
    )
}

export default CartModal
