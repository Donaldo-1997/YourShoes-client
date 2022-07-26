const CartItem = ({ data, deleteProduct }) => {
  let { id, image, price, quantity} = data;
  return (
      <div>
      <img src={image} alt="Img Not Found" width={100}/>
      <h5>${price} x {quantity} = ${price*quantity}</h5>
      <button onClick={()=> deleteProduct(id)}>Eliminar Uno</button>
      <button onClick={()=> deleteProduct(id, true)}>Eliminar Todos</button>
    </div>
  );
};
export default CartItem;
