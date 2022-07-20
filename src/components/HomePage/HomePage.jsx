import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useEffect, useState} from 'react'
import {getAllShoes} from "../../redux/actions"
import ProductCards from "../ProductCards/ProductCards"
import Banner from '../Banner/Banner'

export default function HomePage(){
    const dispatch = useDispatch()
    const allProducts = useSelector(state => state.products) 
    //console.log(allProducts)

    useEffect(() => {
        dispatch(getAllShoes())
    }, [dispatch])


    return(
        <div>
        <Banner></Banner>
            <ProductCards allProducts={allProducts}/>
        </div>
    )
}