import React from 'react'

export default function ProductCard({image, title, price}){
    return(
        <div>
            <img src={image} alt="img not found"/>
            <div>
                <h3>{title}</h3>
                <p>${price}</p>
            </div>
        </div>
    )
}