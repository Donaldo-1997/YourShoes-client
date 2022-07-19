import React from 'react'
import ProductCard from '../ProductCard/ProductCard'

export default function ProductCards({allProducts}){
    return(
        <div>
            {
                allProducts.map(product => {
                    return <ProductCard image={product.image} title={product.title} price={product.price} key={product.id}/>
                })
            }   
        </div>
    )
}