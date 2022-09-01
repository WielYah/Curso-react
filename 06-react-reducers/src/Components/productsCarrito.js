const Products = ({el,addItem}) => {
    const {id,name,price}=el;
   
    return ( 
        <div>
            <h2>{name}</h2>
            <p>{price}</p>
            <button onClick={()=>addItem(id)}>Agregar</button>
        </div>
     );
}
 
export default Products;