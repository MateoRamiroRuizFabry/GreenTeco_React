import { useContext } from 'react';
import cartIcon from './Assets/263142.png'
import { Link } from 'react-router-dom';
import { cartContext } from '../../context/cartContext';





function Cart(props){
    const context = useContext(cartContext);
    const styleCartIcon = {
        width: '30px',
    }
    return(
        <div>
            <Link to="/cart">
            <button style={{border:'none', backgroundColor:'whitesmoke', cursor: 'pointer',}}><img style={styleCartIcon} src={cartIcon}/></button>
            </Link>
            <span> {context.getTotalItemsInCart()} </span>
        </div>
    );
};

export default Cart;