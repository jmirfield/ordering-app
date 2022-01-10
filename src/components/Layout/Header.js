import React from 'react'

import HeaderCartButton from './HeaderCartButton'

import headerImg from '../../assets/meals.jpg'
import styles from './Header.module.css'

const Header = (props) => {
    return (
        <React.Fragment>
            <header className={styles.header}>
                <h1>ReactMeals</h1>
                <HeaderCartButton onClick={props.onShowCart}/>
            </header>
            <div className={styles['main-image']}>
                <img src={headerImg} alt="Delicious food"/>
            </div>
        </React.Fragment>
    )
}

export default Header;
