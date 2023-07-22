import Logo from '../../Assets/LogoJoyeria.png'
import Cart from '../CartWidgetComponent/CartWidgetComponent'
import {Link} from "react-router-dom";

function NavBar (props){
    const styleNavBar = {
        backgroundColor: 'whitesmoke',
        display: 'flex',
    }
    const styleItemsNav = {
        width: '33%',
        display: 'flex',
        justifyContent:'center',
        alignItems:'center',
    }
    const styleLogo = {
        width: '33%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
    const styleA = {
        margin: '5px',
        textDecoration: 'none',
        color: 'black'
    }
    const styleCart ={
        width: '33%',
        display: 'flex',
        justifyContent:'center',
        alignItems:'center',
    }
    return (
        <div> 
           <nav style={styleNavBar}>
           <div style={styleItemsNav}>
                <Link to="/" style={styleA}>Inicio</Link>
                <Link to="/" style={styleA}>Colecciones</Link>
                <Link to="/" style={styleA}>Cómo comprar</Link>
                <Link to="/category/Anillo" style={styleA}>Anillo</Link>  
           </div> 
           <div style={styleLogo}>
                <Link to="/">
                    <img style={{width:'100px', alignItems:'center'}} src={Logo}/>
                </Link> 
           </div>
            <div style={styleCart}>
                <Cart></Cart>
            </div> 
           </nav>
        </div>
    );
};

export default NavBar;