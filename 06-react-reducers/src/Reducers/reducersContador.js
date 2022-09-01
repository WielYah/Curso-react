import { Types } from "../Actions/actionsContador"

export const ContadorInitialState={contador:0}

export const ContadorInit=(ContadorInitialState)=>{
    return(
            {contador:ContadorInitialState.contador+100}
        )
}
export const ContadorReducer=(state,accion)=>{

    switch (accion.type) {
        case Types.INCREMENT:
            return {contador:state.contador+1};
        case Types.INCREMENT_5:
            return {contador:state.contador+accion.payload};
        case Types.DECREMENT:
            return {contador:state.contador-1};
        case Types.DECREMENT_5:
            return {contador:state.contador-5};
        case Types.RESET:
            return ContadorInitialState;
        default:
            return state;
    }
   
}