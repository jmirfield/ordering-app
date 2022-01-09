import React, { useEffect, useState } from 'react'

import MealItem from './MealItem/MealItem';
import Card from '../UI/Card';

import styles from './AvailableMeals.module.css'

const AvailableMeals = props => {

    const [meals, setMeals] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState({ bool: false, message: '' })
    const { bool: errorStatus, message: errorMessage } = error

    useEffect(() => {
        getMeals()
    }, [])

    const getMeals = async () => {
        try {
            const response = await fetch('https://ordering-app-18390-default-rtdb.firebaseio.com/meals/-Ms_RBD7c6yYxAGJhmMo.json')
            const jsonData = await response.json()
            setMeals(jsonData)
            setLoading(false)
        } catch (err) {
            setError({ bool: true, message: err.message })
        }
    }

    if (errorStatus) {
        return (
            <section className={styles.MealsError}>
                <p>{errorMessage}</p>
            </section>
        )
    }

    if (loading) return (
        <section className={styles.MealsLoading}>
            <p>Loading...</p>
        </section>
    )


    const mealsList = meals.map(meal => {
        return <MealItem
            name={meal.name}
            description={meal.description}
            price={meal.price}
            key={meal.id}
            id={meal.id}
        />
    })

    return (
        <section className={styles.meals}>
            <Card>
                <ul>
                    {mealsList}
                </ul>
            </Card>
        </section>
    )
}

export default AvailableMeals
