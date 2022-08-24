import React,{useState,useEffect} from "react";


function Reloj({hora}) {
    return(
        <>
            <h2>{hora}</h2>
        </>
    )
}

export default function RelojHooks() {
    
    const [hora,SetHora]=useState(new Date().toLocaleTimeString());
    const [visible,setVisible]=useState(false);

    useEffect(()=>{
       let tictac;
       if(visible){
            tictac=setInterval(() => {
                SetHora(new Date().toLocaleTimeString());
            }, 1000);
       }else{
        clearInterval(tictac)
       }

       return()=>{
        clearInterval(tictac)
        console.log("desmontaje con hooks");
       }
      
    },[visible])

    return(
        <>
            <h2>Reloj con Hooks</h2>
            {visible &&  <Reloj hora={hora}/>}
            <button  onClick={ ()=>setVisible(true)} >iniciar</button>
            <button  onClick={ ()=>setVisible(false)} >Detener</button>
        </>
    )

}
