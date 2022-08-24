import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

let data={
    name:"",
    constellation:"",
    id:null
};

const FormCrud = ({CreateData,UpdateData,stateEdit,setStateEdit}) => {
    const [form, setForm] = useState(data);
    let navigate =useNavigate();
    useEffect(() => {
        if(stateEdit){
            setForm(stateEdit);
        }else{
            setForm(data);
        }
        
            
    }, [stateEdit]);
    
    const change=(e)=>{
        setForm({
            ...form,
            [e.target.name]:e.target.value
        })
    }

    const Enviar=(e)=>{
        e.preventDefault();
        if(!form.name || !form.constellation){
            alert("Llene los datos");
        }else{
            if(!form.id){
                CreateData(form);
            }else{
                UpdateData(form);

            }
            Limpiar()
        }
       
    }
    const Limpiar=()=>{
        setForm(data);
        setStateEdit(null)
        navigate("/santos");
    }
   

    return ( 
        <form onSubmit={Enviar}>
            <input type="text" name='name' onChange={change} value={form.name}/>
            <input type="text" name='constellation' onChange={change} value={form.constellation}/>

            <input type="submit" value="Enviar" />
            <input type="reset" name='Limpiar' onClick={Limpiar}/>

        </form>
     );
}
 
export default FormCrud;