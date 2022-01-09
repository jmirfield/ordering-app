import React from 'react'
import Card from 'react-bootstrap/Card'
import styles from './MealsSummary.module.css'

const MealsSummary = () => {
    return (
        <Card style={{width: '40rem'}} className={`mx-auto jumbotron well rounded-3 bg-dark border border-light text-white ${styles.summary}`}>
            <h2>Delicious Food, delivered to you</h2>
            <Card.Body>
                <p>
                    Choose your favorite meal from our broad selection of available meals
                    and enjoy a delicious lunch or dinner at home.
                </p>
                <p>
                    All our meals are cooked with high-quality ingredients, just-in-time and
                    of course by experienced chefs!
                </p>
            </Card.Body>
        </Card>
    )
}


export default MealsSummary
