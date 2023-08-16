import React from "react";
import { useContext } from "react";
import { cartContext } from "../../context/cartContext";
import { createOrder } from "../../Services/firebase";
import Swal from "sweetalert2";

function CartContainer() {
  const { cart, removeItem, clearCart } = useContext(cartContext);
const handleCheckout = async ()=>{
    const orderData = {
    item: cart,
    buyer: { name: "Mateo", email: "Mateo@hotmail.com", phone: "1231231312"},
    date: new Date(),
    total: 10000,
  };
  const idOrder = await createOrder(orderData);
  clearCart()
  Swal.fire(
    "¡Exito!",
    `Gracias por tu compra, tu numero de orden es ${idOrder}!`,
    'success'
  )
};
const styles = {
    heading: {
      fontSize: '54px',
      marginBottom: '20px',
      fontWeight: 'bold',
    },
    cartItem: {
      margin: '10px',  
      border: '1px solid #ddd',
      borderRadius: '5px',
      padding: '15px',
      marginBottom: '15px',
      boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
    },
    itemTitle: {
      fontSize: '18px',
      marginBottom: '5px',
    },
    itemPrice: {
      marginBottom: '5px',
    },
    itemTotal: {
      marginTop: '10px',
      fontSize: '16px',
      fontWeight: 'bold',
    },
    removeButton: {
      backgroundColor: '#ff5733',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      padding: '5px 10px',
      cursor: 'pointer',
    },
    total: {
      fontSize: '18px',
      fontWeight: 'bold',
      marginTop: '20px',
    },
    checkoutButton: {
      backgroundColor: '#4caf50',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      padding: '10px 20px',
      fontSize: '18px',
      cursor: 'pointer',
      marginTop: '15px'
    },
    itemImg: {
        width: '200px'
    }
  };
  const styleCartContainer = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    textAlign: 'center',
  };
  

  return (
    <div style= {styleCartContainer}>
      <h1 style={styles.heading}>Carrito</h1>
      <div style={{display:'flex'}}>
        {cart.map((item) => (
        <div key={item} style={styles.cartItem}>
          {console.log(item)}
          <h2 style={styles.itemTitle}>{item.descripcion}</h2>
          <img style={styles.itemImg} src={item.img}></img>
          <p style={styles.itemPrice}>Precio unitario: ${item.precio}</p>
          <p>Cantidad a comprar: {item.count}</p>
          <p style={styles.itemTotal}>Precio total: ${item.count * item.precio}</p>
          <button style={styles.removeButton} onClick={() => removeItem(item.id)}>Eliminiar</button>
        </div>
      ))}
      </div>
      
      <br />
      <div style={styles.total}>Total de la compra: $999</div>
      <button style={styles.checkoutButton} onClick={()=>handleCheckout()}>Comprar</button>
    </div>
  );
}

export default CartContainer;