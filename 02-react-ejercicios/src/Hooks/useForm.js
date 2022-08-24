import { useState } from 'react';
import { HelperFetch } from '../Helpers/HelperFetch';

export const UseForm = (initialform,validateForm) => {
    
    const [form, setForm] = useState(initialform);
    const [error, setError] = useState({});
    const [response, setResponse] = useState(null);
    const [loading, setLoading] = useState(false);

    const EventSumbit=(e)=>{
        e.preventDefault();
        setError(validateForm(form));
        if(Object.keys(error).length===0){
            alert("enviado");
            setLoading(true)

            setResponse(true);
            setLoading(false);
            setForm(initialform);

            setTimeout(() => {
                setResponse(null);
            }, 5000);
        }else{
            alert("tiene un error")
        }
       // HelperFetch().post();
    }
   
    const EventChange=(e)=>{
        const {name,value}=e.target
        setForm({...form,
            [name]:value})
    }
    const EventBlur=(e)=>{
        EventChange(e)//no se si sera necesario ya que sin esto tambien funciona
        setError(validateForm(form));
    }
    
    return {form,error,
        response,
        loading,
        EventSumbit,
        EventBlur,
        EventChange} ;
}
 
