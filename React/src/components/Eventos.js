import React, { Component } from "react";

export class EventosES6 extends Component{

    constructor(props){
        super(props);
        this.state={
            contador:0
        };
        this.sumar=this.sumar.bind(this);//le estoy agregando el this de mi constructor a mi funcion gracias a "bind"
        this.restar=this.restar.bind(this);
    }
    sumar(e){
        this.setState({
            contador:this.state.contador+1
        })

    }
    restar(e){
        this.setState({
            contador:this.state.contador-1
        })
    }

    render(){
        return(
            <div>
                <h2>Eventos en componentes de clase</h2>
                <h3>{this.state.contador}</h3>
                <button onClick={this.sumar}>+</button>
                <button onClick={this.restar}>-</button>
            </div>
        )
    }
}


export class EventosES7 extends Component{

        state={
            contador:0
        };
   
    sumar=(e)=>{
        this.setState({
            contador:this.state.contador+1
        })

    }
    restar=(e)=>{
        this.setState({
            contador:this.state.contador-1
        })
    }

    render(){
        return(
            <div>
                <h2>Eventos en componentes de clase</h2>
                <h3>{this.state.contador}</h3>
                <button onClick={this.sumar}>+</button>
                <button onClick={this.restar}>-</button>
            </div>
        )
    }
}



const Boton=(props)=>{
    return <button onClick={props.MyOnClick}>evento desde una funcion</button>   
}
export class MasEventos extends Component{
    state={
        contador:0
    };
    onllyClick=(e,msm)=>{
        console.log(e);
        console.log(e.target);
        console.log(e.nativeEvent);
        console.log(e.nativeEvent.target);
        console.log(msm);
    }
    sumar=(e)=>{
        this.setState({
            contador:this.state.contador+1
        })

    }
    restar=(e)=>{
        this.setState({
            contador:this.state.contador-1
        })
    }
    render(){
        return(
            <div>
                <h2>Eventos en componentes de clase</h2>
                <h3>{this.state.contador}</h3>
                <button onClick={this.sumar}>+</button>
                <button onClick={this.restar}>-</button>
                <button onClick={(e)=>this.onllyClick(e,"hol a soy el mensaje")}>Mostar el evento</button>
                {/* Evento personalizado */}
                <Boton MyOnClick={(e)=>this.onllyClick(e,"hola soy el mensaje desde un evento personalizado")}/>
            </div>
        )
    }
}