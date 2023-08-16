import {getData, getProductByCategory} from "../../Services/firebase";
import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

function ItemListContainer(props){
    const styleTitle ={
        textAlign: 'center',  
    }
    const styleContainer ={
        textAlign: 'center',
        display: 'grid',
        gridTemplateColumns: '33%33%33%'
    }

    const [products, setProducts] = useState([])
    const { categoryId } = useParams();

    async function requestProducts () {
        
        let respuesta = categoryId
      ? await getProductByCategory(categoryId)
      : await getData();
    setProducts(respuesta);
    }
    useEffect(
        () => {
            requestProducts();
        },[categoryId]);
    

    return(
        <>
        <h1 style={styleTitle}>¡Bienvenidos a GreenTeco!</h1>
        <div style={styleContainer}>
            {products.map((Item) =>(
                <ItemList key={Item.id} {...Item}/>
            ))}
        </div>
        </>
        );
        
};

export default ItemListContainer;