import React ,{useEffect}from "react";
import styles from "./Cart.module.css"
import { useSelector } from "react-redux/es/exports";
export default function Cart() {

  const cartProducts = useSelector((state) => state.cart);
  const product = JSON.parse(localStorage.getItem("products"));
  // const isArray = Array.isArray(product);

  const addLocalStorage = () => {
    localStorage.setItem("products", JSON.stringify(cartProducts));
  };

  
  useEffect(() => {
    if(cartProducts.length){
    addLocalStorage()}
   },[cartProducts])

  return (
    <div>
      {product ? (
        product.map((prod) => {
          return (
            <div key={prod.id}>
              <p>{prod.title}</p>
              <img src={prod.image} alt="" />
              <p>Price: ${prod.price}</p>
              <button>Eliminar</button>
            </div>
          );
        })
      ) : (
        <div className={styles.container2}>
          <p>Tu carrito está vacío</p>
          <p>Vuelve y escoge tus zapas favoritas</p>
        </div>
      )}
    </div>
  );
}
