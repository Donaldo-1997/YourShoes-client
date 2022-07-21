import React from 'react'
import styles from "./ProductCard.module.css"
export default function ProductCard({image, title, price}){
    return(
        <div className={styles.card}>
            <img src={image} alt="img not found"/>
            <div className={styles.container}>
                <div className={styles.short}>
                <h4 className={styles.ellipsis}>{title}<p>...</p></h4>
                </div>
                <p>${price}</p>
            </div>
        </div>
    )
}