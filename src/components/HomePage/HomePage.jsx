import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useEffect, useState} from 'react'
import {getAllShoes} from "../../redux/actions"
import ProductCards from "../ProductCards/ProductCards"

export default function HomePage(){
    const dispatch = useDispatch()
    const allProducts = useSelector(state => state.products) 
    //console.log(allProducts)

    useEffect(() => {
        dispatch(getAllShoes())
    }, [])


    return(
        <div>
            <ProductCards allProducts={allProducts}/>
        </div>
    )
}