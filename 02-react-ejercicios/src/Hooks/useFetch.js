import React, { useState, useEffect } from 'react';

export const UseFecth = (url) => {
   const [data, setdata] = useState(null);
   const [error, setError] = useState(null);
   const [loading, setLoading] = useState(false);
   
    useEffect(() => {
        setLoading(true);
        const controller=new AbortController(); 
        const signal=controller.signal;

        const funFetch=async()=>{
            try {
                let res=await fetch(url)
                console.log(res);
                if(!res.ok){
                   let err= new Error("Ocurrio un error al obtener los datos");
                    err.status=res.status||"00";
                    err.statusText=res.statusText||"Ocurrio un error";

                    throw err;
                } 

                let res2= await res.json()
                if(!signal.aborted){//si el abortcontroller se ejecuto se guardara en la vaiable signal
                    setdata(res2);
                    setError(null);
                }
            } catch (error) {
                if(!signal.aborted){
                    setdata(null);
                    setError(error);
                }
            }finally{
                //se ejecuta independientemente de cual se haya ejecutado entre el  try y el catch
                if(!signal.aborted){
                   setLoading(false);
                }
            }
          
            return ()=>AbortController.abort()
        }
        //funFetch();
    }, [url]);


    return { data, error, loading} ;
}
 
