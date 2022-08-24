import React,{Component} from "react";

//componente
function Pokemon(props) {
    return(
        <figure>
                <img src={props.avatar} alt={props.name}/>
        </figure>
    )
}

export default class AjaxApi extends Component{

   state={
    pokemons:[]
   };

   async componentDidMount(){
        let url="https://pokeapi.co/api/v2/pokemon/";
        let res =await fetch(url)
        let res2 =await res.json()
        
        res2.results.forEach(async(el) => {
            
          let res3=await fetch(el.url)
          let res4= await res3.json();
          
            let pokemon={
                id:res4.id,
                name:res4.name,
                avatar:res4.sprites.front_default
            } 
            let pokemons=[...this.state.pokemons,pokemon]
            //console.log(pokemons);

            this.setState({pokemons})
        });

   }
   
    render(){
        return(
        <>
            <h2>AjaxApi</h2>
            {this.state.pokemons.length===0?<h3>Cargando...</h3>:this.state.pokemons.map(e=>(
                <Pokemon key={e.id} avatar={e.avatar} name={e.name}/>
            ))} 
        </>
        )
    }
}