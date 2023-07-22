function ButtonComponent (props){

    const styleButton = {
        border: 'solid 1px black' ,
        backgroundColor: 'grey',
        textDecoration: 'none',
        color: 'white',
        padding: '4px'
    }

    return(
        <>
            <a href={`/detalle/${props.id}`} style={styleButton}>Ver producto</a>
        </>
    )
};

export default ButtonComponent;