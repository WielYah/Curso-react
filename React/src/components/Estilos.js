import React from "react"
import "./Estilos.css"
import moduleStyles from "./Estilos.module.css";


export default function Styles(){

    let myStyles={
        background:"red",
        padding:"10px"
    }

    return(
        <>
            <h2 className="bg-react padd">Estilos en hoja CSS externa</h2>
            <h2 style={{background:"blue"}}>Estilos en Linea(Atributo style)</h2>
            <h2 style={myStyles}>Estilos en linea</h2>
            <h2 className="bg-react padd">Agregando normalize con
                @import-normalize
            </h2>
            <h2 className={moduleStyles.error}>Estilos con modulos</h2>
            <h2 className={moduleStyles.success}>Estilos con modulos</h2>
        </>
    )
}





