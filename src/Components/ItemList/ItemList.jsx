import { Link } from "react-router-dom";

function ItemList(props){

    const styleButtonView = {
        backgroundColor: 'Beige',
        padding: '6px',
        cursor: 'pointer',
    }

    const {descripcion, img, precio, id} = props;

    return(
        <div>
            <h1 style={{fontSize: '20px'}}>{descripcion}</h1>
            <img width="200" src={img}></img>
            <h3>$ {precio}</h3>
            <Link to={`/detalle/`+id}>
                <button style={styleButtonView}>Ver producto</button>
            </Link>
            
        </div>
    )
}
export default ItemList;