import React, {useState, useEffect } from "react"

export default function ScrollUseEffect() {
    
    const [scrollY,setScrollY] =useState(0)

    useEffect(()=>{
       // console.log("montaje con useeffect")
        //console.log(scrollY);
        
    },[]); //SOLO SE EJECUTARA UNA VEZ en el array se pasa una variable de estado que quiero controlar, significa que el use efect solo se va a ejecutar cuando la variable ingresada cambia 
    
    useEffect(()=>{
        //console.log("actualizacion con useeffect")
        
        const detectarScroll=()=>{
            setScrollY(window.pageYOffset)
        }
        window.addEventListener("scroll",detectarScroll);

        return()=>{
            window.removeEventListener("scroll",detectarScroll)
           // console.log("fase de desmontaje");
        }

    },[scrollY]);    //no tiene definido el 2do parametro de lista de dependencias sera como un "componetdidupdate()"

    return(
        <>
            <h2>Scroll para probar useEffect</h2>
            <p>El scroll es {scrollY} px</p>
        </>
    )
}







