import ButtonComponent from "../ButtonComponent/ButtonComponent";

function ItemList(props){

    const {descripcion, img, precio} = props;

    

    return(
        <div>
            <h1 style={{fontSize: '20px'}}>{descripcion}</h1>
            <img width="200" src={img}></img>
            <p>$ {precio}</p>
            <ButtonComponent id={props.id}></ButtonComponent>
        </div>
    )
}
export default ItemList;