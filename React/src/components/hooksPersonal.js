import React from "react";
import{useHook} from "../hooks/useFetch"

export default function HookPersonal() {
      let url ="https://pokeapi.co/api/v2/pokemon/";

      let{stateData,statePending,error}=useHook(url);
    return(
        <>
            <h2>hooks personalizados</h2>
            <h3>{JSON.stringify(stateData)}</h3>
            <h3>{JSON.stringify(error)}</h3>
            <h3>{JSON.stringify(statePending)}</h3>
        </>
    )

}






