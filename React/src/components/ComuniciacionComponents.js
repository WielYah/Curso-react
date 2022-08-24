import React,{Component} from "react";

export default class Padre extends Component{

    state={
        contador:0
    };
    incrementarContador=(e)=>{
        this.setState({
            contador:this.state.contador+1
        });
    }

    render(){
        return(
            <>
                <h2>Comunicacion entre componentes</h2>
                <p>Contador : {this.state.contador}</p>
                <Hijo msm="hijo 1" incrementarCont={this.incrementarContador} />
                <Hijo msm="hijo 2" incrementarCont={this.incrementarContador}/>
            </>
        )
    }   
}

function Hijo(props){
    return(
        <>
            <h3>{props.msm}</h3>
            <button onClick={props.incrementarCont}>+</button>
        </>
    )
    
    
}