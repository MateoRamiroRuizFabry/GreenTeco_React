import cartIcon from './Assets/263142.png'
function Cart(props){
    
    const styleCartIcon = {
        width: '30px',
    }
    return(
        <div>
            <button style={{border:'none', backgroundColor:'whitesmoke'}}><img style={styleCartIcon} src={cartIcon}/></button>
            <span>0</span>
        </div>
    );
};

export default Cart;