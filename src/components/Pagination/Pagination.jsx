import React from 'react'

export default function Pagination({shoesPerPage, allProducts, pagination, nextPageButton, prevPageButton, currentPage}){
    const pageNumber = Math.ceil(allProducts/shoesPerPage) || 1     // si el mathceil me da 0 (osea un valor false) va al 1 
                                                                    // y si divuelve un valor true vale lo que de el mathceil 

    return(
        <nav>
            <ul>
                <div>
                    <button onClick={(e) => pagination(1)} disabled={currentPage === 1}>First</button>
                    <button onClick={(e) => prevPageButton(e)} disabled={currentPage === 1}>{"<<Prev"}</button>
                    <p>{currentPage}</p>
                    <button onClick={(e) => nextPageButton(e)} disabled={currentPage === pageNumber}>{"Next>>"}</button>
                    <button onClick={(e) => pagination(pageNumber)} disabled={currentPage === pageNumber}>Last</button>
                </div>
            </ul>
        </nav>
    )
}