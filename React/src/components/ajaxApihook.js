import React,{useEffect,useState} from "react";


function Pokemon({avatar,name}) {
    return(
        <figure>
                <img src={avatar} alt={name}/>
        </figure>
    )
}

export default function Apihooks() {

    const [pokemons,setPokemons]= useState([]);

    useEffect(()=>{
       let getData= async()=>{
            let res= await fetch("https://pokeapi.co/api/v2/pokemon/");
            let res2 =await res.json();
            
            res2.results.forEach(async(el) => {
                
              let res3=await fetch(el.url)
              let res4= await res3.json();
              
                let pokemon={
                    id:res4.id,
                    name:res4.name,
                    avatar:res4.sprites.front_default
                } 

                setPokemons(pokemons=>[...pokemons,pokemon]) // lanzamos en formato de array function la actualizacion del estado, pasamos como parametro la variable que actualiza
                // le decimos que destructure la variable pokemons[]+ el pokemon{} 
               
            });
        }
        getData();

    },[])


    return(
        <>
            <h2>API con Hooks</h2>
            {pokemons.length===0?<h3>Cargando...</h3>:pokemons.map(e=>(
                <Pokemon key={e.id} avatar={e.avatar} name={e.name}/>
            ))} 

        </>
    )
}



