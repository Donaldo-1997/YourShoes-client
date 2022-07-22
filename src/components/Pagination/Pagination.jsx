import React from 'react'
import styles from "./Pagination.module.css"
export default function Pagination({shoesPerPage, allProducts, pagination, nextPageButton, prevPageButton, currentPage}){
    const pageNumber = Math.ceil(allProducts/shoesPerPage) || 1     // si el mathceil me da 0 (osea un valor false) va al 1 
                                                                    // y si divuelve un valor true vale lo que de el mathceil 

    return(
        <nav className={styles.contenedor}>
            <ul className={styles.contenedor}>
                <div className={styles.contenedor}>
                    <button onClick={(e) => pagination(1)} disabled={currentPage === 1} className={styles.button}>First</button>
                    <button onClick={(e) => prevPageButton(e)} disabled={currentPage === 1} className={styles.button}>{"<<Prev "}</button>
                    <p> {currentPage} de {pageNumber} </p>
                    <div className={styles.right}>
                        <button onClick={(e) => nextPageButton(e)} disabled={currentPage === pageNumber} className={styles.button}>{"Next>>"}</button>
                        <button onClick={(e) => pagination(pageNumber)} disabled={currentPage === pageNumber} className={styles.button}>Last</button>
                    </div>
                   
                </div>
            </ul>
        </nav>
    )
}