import ButtonComponent from "../ButtonComponent/ButtonComponent";

    const ItemDetail = props => {
        return(
           <div style={{backgroundColor: 'red'}}>
            <h1>{props.descripcion}</h1>
            <img width="200" src={props.img}></img>
            <p>$ {props.precio}</p>
            </div> 
        )
    };

    export default ItemDetail;
        