import {useState,useEffect} from "react";

export const useHook=(url) =>{
    
    const [stateData,setData]=useState(null);
    const [statePending,setPending]=useState(true);
    const [error,setError]=useState(null)

    useEffect(()=>{
        
        let getData= async(url)=>{
            try {
                let res= await fetch(url)

                if(!res.ok){
                    throw {
                        err:true,
                        status:res.status,
                        statusText:!res.statusText?"Ocurrio un error":res.statusText
                    }
                }
                let res2 = await res.json();
                setData(res2);
                setPending(false);
                setError({err:false});

            } catch (error) {
                setPending(true);
                setError(error)
            }   
        }
        getData(url)       
    },[url])
    return {stateData,statePending,error}

}