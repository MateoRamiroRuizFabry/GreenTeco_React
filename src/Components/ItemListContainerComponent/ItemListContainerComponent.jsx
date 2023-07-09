function ItemListContainer(props){
    const styleTitle ={
        justifyContent: 'center',   
    }
    const styleContainer ={
        textAlign: 'center',
    }
    return(
        <div style={styleContainer}>
            <h1 style={styleTitle}>{props.greeting}</h1>
        </div>
    );
;}

export default ItemListContainer;