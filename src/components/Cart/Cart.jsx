import React, { useEffect } from "react";
import styles from "./Cart.module.css";
import CartItem from "./CartItem.jsx";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { deleteOneToCart, removerTodo } from "../../redux/actions";
import { Link } from "react-router-dom";

export default function Cart() {
  const cartProducts = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  console.log(cartProducts, "ESTO ES CART PRODUCTS!!!!");

  const deleteProduct = (id, all = false) => {
    dispatch(deleteOneToCart({ productId: id, all }));
  };
  const clearCart = () => {
    dispatch(removerTodo());
  };

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(cartProducts));
  }, [cartProducts]);

  return (
    <div className={styles.container}>
      <Link to="/">
        <button className={styles.yourshoes}>
          YOUR<span className={styles.shoes}>SHOES</span>
        </button>
      </Link>
      <button onClick={clearCart}>Limpiar carrito</button>
      {cartProducts.length ? (
        cartProducts.map((item, index) => (
          <CartItem key={index} data={item} deleteProduct={deleteProduct} />
        ))
      ) : (
        <div>
          <h4>El carrito está vacío</h4>
        </div>
      )}
    </div>
  );
}
