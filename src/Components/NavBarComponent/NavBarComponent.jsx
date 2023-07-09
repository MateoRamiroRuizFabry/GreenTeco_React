import Logo from '../../Assets/LogoJoyeria.png'
import Cart from '../CartWidgetComponent/CartWidgetComponent'
function NavBar (props){
    const styleNavBar = {
        backgroundColor: props.colorFondo,
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
    }
    const styleCart ={
        width: '33%',
        display: 'flex',
        justifyContent:'center',
        alignItems:'center',
    }
    return (
        <div> 
           <nav style={styleNavBar}>{props.label}
           <div style={styleItemsNav}>
                <a style={styleA}>Inicio</a>
                <a style={styleA}>Colecciones</a>
                <a style={styleA}>Cómo comprar</a>  
           </div> 
           <div style={styleLogo}>
                <a href="#">
                    <img style={{width:'100px', alignItems:'center'}} src={Logo}/>
                </a> 
           </div>
            <div style={styleCart}>
                <Cart></Cart>
            </div> 
           </nav>
        </div>
    );
};

export default NavBar;