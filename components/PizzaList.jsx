import React from 'react'
import styles from '../styles/PizzaList.module.css'
import PizzaCard from './PizzaCard'

const PizzaList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>THE BEST PIZZA IN TOWN! </h1>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem saepe nesciunt non facilis ab expedita quia assumenda ut, aperiam repellat at incidunt, unde consectetur repudiandae perferendis dolore a ea necessitatibus vel quis. Recusandae, nobis vitae.
      </p>
      <div className={styles.wrapper}>
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
      </div>
    </div>
  )
}

export default PizzaList