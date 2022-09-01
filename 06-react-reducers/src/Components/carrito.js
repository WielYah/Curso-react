import { useReducer } from "react";
import { TYPES } from "../Actions/actionsCarrito";
import { CarritoInitalState, CarritoReducer } from "../Reducers/reducersCarrito";
import CarrCompra from "./CarrCompra";
import Products from "./productsCarrito";

const Carrito = () => {
    const[state,dispatch]= useReducer(CarritoReducer,CarritoInitalState)

    const {products,carr}=state;

    const addItem=(id)=>{
        dispatch({type:TYPES.add,payload:id})
        //console.log(id);
    }
   
    const removeAll=(id,all=false)=>{
        if(all){
            dispatch({type:TYPES.remove_all,payload:id})
        }else{
            dispatch({type:TYPES.remove_one,payload:id})
        }
    }
    const clear=()=>{
       dispatch({type:TYPES.clear})
    }

    return ( 
        <>
            <div>
                <h2>Carrito de Compras</h2>
                <h3>Productos</h3>
                <article className="box grid-responsive">
                    {
                        products.map((el)=><Products addItem={addItem} key={el.id} el={el} />)
                    }
                </article>
                <h3>Carrito</h3>
                <article className="box">
                    <button onClick={clear}>Limpiar Carrito</button>
                    {
                    carr.map((el,index)=> <CarrCompra removeAll={removeAll} el={el} key={index}/>)
                   }
                </article>
            </div>

           {/*  <h2>Carrito de compras</h2> */}
          {/*   {CarritoInitalState.products.length>0&&CarritoInitalState.products.map((el)=><Products addItem={addItem} key={el.id} el={el} />)}

            {CarritoInitalState.carr.map((el)=> <CarrCompra key={el.id}/>)} */}
        </>
     );
}
 
export default Carrito;