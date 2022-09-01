import { TYPES } from "../Actions/actionsCarrito";

export const CarritoInitalState={
    products:[
        { id: 1, name: "Producto 1", price: 100 },
        { id: 2, name: "Producto 2", price: 200 },
        { id: 3, name: "Producto 3", price: 300 },
        { id: 4, name: "Producto 4", price: 400 },
        { id: 5, name: "Producto 5", price: 500 },
        { id: 6, name: "Producto 6", price: 600 },
    ],
    carr:[]
}

export const CarritoReducer=(state,accion)=>{
    switch (accion.type) {
        case TYPES.add:
            {
              
               let newCarr= state.products.find((el)=> el.id===accion.payload)
               
               let itemCarr=state.carr.find((el)=>el.id ===newCarr.id)

              return itemCarr?
                {
                    ...state,
                    carr:[...state.carr.map((el)=>el.id===accion.payload?{...el,cantidad:el.cantidad+1} :el)]
                }:
                {...state,carr:[...state.carr,{...newCarr,cantidad:1}]}
            }
        case TYPES.clear:
            return CarritoInitalState;

        case TYPES.remove_all:
            {
                return {...state,carr:[...state.carr.filter((el)=>el.id!==accion.payload)]}
            }
        case TYPES.remove_one:
                {
                    let item= state.carr.find((el)=> el.id===accion.payload)

                    return item.cantidad>1?
                    {...state,carr:[...state.carr.map((el)=>el.id===accion.payload?{...el,cantidad:el.cantidad-1}:el)]}:
                    {...state,carr:[...state.carr.filter((el)=>el.id!==accion.payload)]}
                }
        default:
            return state;
    }
}