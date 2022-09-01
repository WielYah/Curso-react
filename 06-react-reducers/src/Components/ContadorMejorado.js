import { useReducer/* ,useState */ } from "react";
import { Types } from "../Actions/actionsContador";
import { ContadorInit, ContadorInitialState, ContadorReducer } from "../Reducers/reducersContador";


const ContadorMejorado = () => {
    //const [contador, setContador] = useState(0);
    const [state,dispatch]=useReducer(ContadorReducer,ContadorInitialState,ContadorInit);

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

export default ContadorMejorado;