import React from "react";
import PropTypes from "prop-types";

/* export function Propiedades(props) {
    return(
        <div>
            <h2>Propiedades</h2>
        </div>
    )
} */
export const Propiedades=(props)=>{
    return(
        <div>
            <h2>{props.porDefecto}</h2>
            <ul>
                <li>{props.numero}</li>
                <li>{props.boolean?"verdadero":"falso"}</li>
                <li>{props.objeto?props.objeto.nombre:"falso"}</li>
                <li>{props.array.join(",")}</li>
                <li>{props.array.map(props.fun).join(", ")}</li>
                <li>{props.elementReact}</li>
                <li>{props.ReactComponent}</li>

            </ul>
        </div>
    )
}

Propiedades.defaultProps={
    porDefecto:"propiedad por defecto"
}
Propiedades.propTypes={
    numero:PropTypes.number
}