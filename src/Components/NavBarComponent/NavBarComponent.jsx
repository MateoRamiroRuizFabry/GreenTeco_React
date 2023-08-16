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
                <Link to="/" className="navItem" style={styleA}>Inicio</Link>
                <Link to="/category/Collares" className="navItem" style={styleA}>Collares</Link>
                <Link to="/category/Aritos" className="navItem" style={styleA}>Aritos</Link>
                <Link to="/category/Anillo" className="navItem" style={styleA}>Anillos</Link>
                <Link to="/category/Pulseras" className="navItem" style={styleA}>Pulseras</Link>  
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