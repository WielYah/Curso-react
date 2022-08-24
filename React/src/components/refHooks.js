import {useRef,useEffect,useState} from "react";


export default function Referencias(){
    
    const menu=useRef();
    const btnMenu=useRef();
    console.log(menu);
    console.log(btnMenu);

    let ocultar=(e)=>{
        if(btnMenu.current.textContent==="Mostrar"){
            menu.current.style.display="block"
            btnMenu.current.textContent="Ocultar"
        }else{
            menu.current.style.display="none"
            btnMenu.current.textContent="Mostrar"
        }
    }
        return(
            <>
                <h2>Referencias</h2>
                <button id="btn" ref={btnMenu} onClick={ocultar}>Mostrar</button>
                <nav id="menu" ref={menu} style={{display:"none"}}>
                    <a >Seccion1</a><br/>
                    <a >Seccion2</a><br/>
                    <a >Seccion3</a><br/>
                    <a >Seccion4</a><br/>
                    <a >Seccion5</a><br/>

                </nav>
            </>
        )
}






