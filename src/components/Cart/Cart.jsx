import React, { useEffect } from "react";
import styles from "./Cart.module.css";
import { useSelector } from "react-redux/es/exports";
import { useState } from "react";
import { Link } from "react-router-dom";


export default function Cart() {
  const cartProducts = useSelector((state) => state.cart);
  const product = JSON.parse(localStorage.getItem("products"));
  const [products, setProducts] = useState([]);
  const addLocalStorage = () => {
    localStorage.setItem("products", JSON.stringify(cartProducts));
  };

  useEffect(() => {
    setProducts(JSON.parse(localStorage.getItem("products")));
  }, []);

  const deleteProduct = (e) => {
    let temp = product.filter((prod) => prod.id !== e.target.id);
    localStorage.setItem("products", JSON.stringify(temp));
    window.location.reload();
  };

  useEffect(() => {
    if (cartProducts.length) {
      addLocalStorage();
    }
  }, [cartProducts]);

  return (
    <div>
      {product.length > 0 ? (
        product.map((prod) => {
          return (
            <div key={prod.id} className={styles.container}>
              <p>{prod.title}</p>
              <img src={prod.image} alt="" />
              <p>Price: ${prod.price}</p>
              <button onClick={(e) => deleteProduct(e)} id={prod.id}>
                Eliminar
              </button>
              <Link to='/'><button>Volver</button></Link>
            </div>
          );
        })
      ) : (
        <div className={styles.container2}>
          <p>Tu carrito está vacío</p>
          <Link to='/' ><p>Vuelve y escoge tus zapas favoritas</p></Link>
        </div>
      )}
    </div>
  );
}
