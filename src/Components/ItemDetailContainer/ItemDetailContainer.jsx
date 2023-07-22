import { useState, useEffect } from "react";
import {getProductData} from "../../Services/asyncMock";
import { useParams } from "react-router-dom";

function ItemDetailContainer(){

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
    }, []);

    return(
        <div style={styleDetail}>
            <h1>{product.descripcion}</h1>
            <img width="200" src={product.img}></img>
            <p>$ {product.precio}</p>
        </div> 
    )
};

export default ItemDetailContainer;