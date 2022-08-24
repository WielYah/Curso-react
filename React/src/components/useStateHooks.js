import { React, useState } from "react";


export default function Hooks(props) {

    const [contador,setState] =useState(0);//uno es el estado, el otro el metodo para editar el estado
    console.log(useState());
    
    let sumar=()=>{setState(contador+1)}
    let restar=()=>{setState(contador-1)}

    return(
        <>
            <h2>Hooks</h2>
            <button onClick={sumar}>+</button>
            <button onClick={restar}>-</button>
            <p>{contador+' '+ props.nombre}</p>
        </>
    )
}

Hooks.defaultProps={
    nombre:2
}