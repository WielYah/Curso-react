
import React, { Component } from "react";

function Login(){
    return(
        <div>
            <h3>Login</h3>
        </div>
    );
}
function Logout(){
    return(
        <div>
            <h3>logout</h3>
        </div>
    );
}

export class RenderCondicional extends Component{

    constructor(props){
        super(props);
        this.state={
            session:true
        };
    }

    render(){
        return (
            <div>
                <h3>Renderizado Condicional</h3>
                {this.state.session?<Login/>:<Logout/>}
            </div>
        );
    }

}
