import { useState, useEffect, useContext } from "react";
import {getProductData} from "../../Services/firebase";
import { useParams } from "react-router-dom";
import { cartContext } from "../../context/cartContext";

function ItemDetailContainer(){
    const { addToCart, getItemInCart } = useContext(cartContext);
    const styleDetail = {
        textAlign: 'center'
    }

    const {id} = useParams()
    const [product, setProduct] = useState({});

    async function requestProduct (){
        const respuesta = await getProductData(id);
        setProduct(respuesta);
    }

    useEffect(() => {
        requestProduct();
    }, [id]);
    function handleAddToCart() {
        addToCart(product, 1);
      }
    return(
        <div style={styleDetail}>
            <h1>{product.descripcion}</h1>
            <img width="200" src={product.img}></img>
            <p>$ {product.precio}</p>
            <button style={{cursor: 'pointer'}} onClick={()=>handleAddToCart()} className="btn">Agregar al carrito</button>
        </div> 
    )
};

export default ItemDetailContainer;