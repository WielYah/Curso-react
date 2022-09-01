const CarrCompra = ({el,removeAll}) => {
    const {id,name, price,cantidad}=el
    return ( 
        <>
           
            <h2>{name}</h2>
            <p>{price}x{cantidad}=${price*cantidad}</p>
            <button onClick={()=>removeAll(id)}>Quitar</button>
            <button onClick={()=>removeAll(id,true)}>Quitar Todos</button>
        </>
     );
}
 
export default CarrCompra;