import React from 'react'


export default function Cart(){

    const product = JSON.parse(localStorage.getItem("products"))
    // const isArray = Array.isArray(product)
    console.log( product[0].title)
   

   

 return (
   <div>
    {
        
   product.forEach((prod) =>{
    return (
        <div>
            <p>{prod.title}</p>
        </div>
    )

   })
        
    }
   </div>
 )
}