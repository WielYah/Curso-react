import React, { Component } from "react";

function CompHijo(props) {
    return (
        <div>
            <p>{props.comh}</p>
        </div>
    );
}


export class Estado extends Component{

    constructor(props){
        super(props);
        this.state={
            contador:0
        };
        /* setInterval(() => {
                this.setState({
                    contador:this.state.contador+1
                })
        }, 1000); */
    
    }
    render(){
        return(
            <div>
                <h2>mi estado</h2>
                <p>{this.state.contador}</p>
                <CompHijo comh={this.state.contador}/>
            </div>
        );
    }


}