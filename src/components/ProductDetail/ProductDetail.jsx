import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addOneToCart, getDetails } from "../../redux/actions";
import { useParams, Link } from "react-router-dom";
import styles from "./ProductDetail.module.css";

export default function ProductDetail() {
  const dispatch = useDispatch();
  let { id } = useParams();
  // console.log(id);
  useEffect(() => {
    dispatch(getDetails(id));
  }, [dispatch, id]);

  const cartProducts = useSelector((state) => state.cart)
  const myShoes = useSelector((state) => state.detail);

   const addLocalStorage = () => {
    localStorage.setItem('products', JSON.stringify(cartProducts))
   }

   const saveLocalStorage = () => {
    localStorage.getItem('products')
   }

   

   useEffect(() => {
    if(cartProducts.length){
    addLocalStorage()
    saveLocalStorage()}
   },[cartProducts])

   const onClick = (e) => {
e.preventDefault()
// console.log('onclick', e.target.id)
    dispatch(addOneToCart(e.target.id))
   }

  return (
    <div>
      {myShoes ? (
        <div className={styles.divCard}>
          <img
            src={myShoes.image}
            alt="imgShoes not found"
          />
          <div className={styles.divContent}>
            <h1>{myShoes.title}</h1>
            <h3>${myShoes.price}</h3>
            <h5>descripcion del producto</h5>            
            <h1>Size: </h1>            
            <select>
              <option value="35">35</option>
              <option value="36">36</option>
              <option value="37">37</option>
              <option value="38">38</option>
              <option value="39">39</option>
              <option value="40">40</option> 
              <option value="41">41</option>
              <option value="42">42</option>
              <option value="43">43</option>
              <option value="44">44</option>
            </select>            
            <div className={styles.buttons}>
            <button className={styles}>Comprar</button> \\ agregar un LINK to hacia el carrito
            <button className={styles} onClick={(e) => onClick(e)} id={myShoes.id}>Añadir al carro</button> \\ solo envia el producto al carrito
            </div>
            <Link to= '/' ><button>Return</button></Link>
          </div>
        </div>
      ) : (
        <div>
          <img
            src="https://i.pinimg.com/originals/76/59/35/7659353c8fcde74a4c224dafd7a5eccf.gif"
            alt="Shoes"
          />
          <p>Loading...</p>
        </div>
      )}
    </div>
  );
}
