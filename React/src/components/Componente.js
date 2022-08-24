import React,{Component} from "react";

// *Diferentes formas de definir un componente

//Todo componente basado en CLASE
//? en clases no me permite pasar como parametro a "props"
   /*  class Clistar extends Component{
        render() {
            return <h2>hola soy el componente listar desde una clase</h2>;
        }
    } 
 */
   
 
//Todo componente funcional basado en el formato de Funcion declarada
    /* function Clistar(props){
        return <h2>{props.msg}</h2>;
    } */ 


//  Todo componente funcional basado en el formato de Funcion expresada
let Clistar=(props)=> <h2>{props.msg}</h2>;


export default Clistar;