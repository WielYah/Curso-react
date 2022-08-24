import React, { Component } from "react";
import data from "../helpers/datos.json" 

function ElementoLista(props) {
    return(
        <li><a href={props.frameWeb} target="_blank">{props.frameName} </a></li>
    );
    
}
export class ComponenteElemento extends Component{


    render(){
        console.log(data);
        return(
            <div>
                <h3>Componente de Elementos</h3>
                <ul>
                    {
                    data.frameworks.map(el=> <ElementoLista key={el.id} frameName={el.name} frameWeb={el.web}></ElementoLista>)
                    }
                </ul>
            </div>
        );
    }


}