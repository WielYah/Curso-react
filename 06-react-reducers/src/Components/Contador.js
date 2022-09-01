import { useReducer/* ,useState */ } from "react";

const initialState={contador:0}

const init=(initialState)=>{
    return(
            {contador:initialState.contador+100}
        )
}

const Types={
    INCREMENT:"INCREMENT",
    INCREMENT_5:"INCREMENT_5",
    RESET:"RESET",
    DECREMENT:"DECREMENT",
    DECREMENT_5:"DECREMENT_5"
}

const reducer=(state,accion)=>{

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
            return initialState;
        default:
            return state;
    }
   
}
const Contador = () => {
    //const [contador, setContador] = useState(0);
    const [state,dispatch]=useReducer(reducer,initialState,init);

    //const sumar = () => setContador(contador + 1);
    const sumar=()=>{
        dispatch({type:Types.INCREMENT})
    }
    const sumar_5=()=>{
        dispatch({type:Types.INCREMENT_5,payload:5})
    }
    const restar=()=>{
        dispatch({type:Types.DECREMENT})
    }
    const restar_5=()=>{
        dispatch({type:Types.DECREMENT_5})
    }
    const reset=()=>{
        dispatch({type:Types.RESET})
    }

    //const restar = () => setContador(contador - 1);
    return (
        <div style={{textAlign: "center"}}>
        <h2>Contador Reducer</h2>
        <nav>
    
            <button onClick={sumar_5}>+5</button>
            <button onClick={sumar}>+</button>
            <button onClick={reset}>0</button>
            <button onClick={restar}>-</button>
            <button onClick={restar_5}>-5</button>
          
        </nav>
        <h3>{state.contador}</h3>
        </div>
    );
};

export default Contador;