import React, { useState, useEffect } from 'react';
import { UseForm } from '../Hooks/useForm';
import Mensaje from './Mensaje';
import Loader from './loader'; 

let initialform={
    name:"",
    email:"",
    asunto:"",
    comentarios:""
}

const validarFunc=(form)=>{
    const{name, email, asunto, comentarios}=form;
    const errs={};
    const regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    const regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    const regexComments = /^.{1,255}$/;
    
    if(!name.trim()){
        errs.name="Ingrese un nombre";
    }else if(!regexName.test(name.trim())){
        errs.name="Ingrese un nombre valido weon";
    }
    if(!email.trim()){
        errs.email="Ingrese un email";
    }else if(!regexEmail.test(email.trim())){
         errs.email="Ingrese un email valido gil";
    }
    if(!asunto.trim()){
        errs.asunto="Ingrese un asunto";
    }
    if(!comentarios.trim()){
        errs.comentarios="Ingrese un comentarios";
    }else if(!regexComments.test(comentarios.trim())){
        errs.comentarios="Ingrese un comentarios valido";
    
    }
    return errs;
}

export const FromComp = () => {
    const {form,
        error,
        response,
        loading,
        EventSumbit,
        EventBlur,
        EventChange}=UseForm(initialform,validarFunc)

    return ( 
        <>
            <form onSubmit={EventSumbit}>
                <h2>Formulario de registro</h2>
                <input type="text" name='name'  placeholder='ingrese su nombre' onBlur={EventBlur} value={form.name} onChange={EventChange} /> <br/>
                {error.name&& <Mensaje err={error.name}/> }
                <input type="text" name='email'  placeholder='ingrese su email'  onBlur={EventBlur} value={form.email} onChange={EventChange} /> <br/>
                {error.email&& <Mensaje err={error.email}/> }
                <input type="text" name='asunto' placeholder='ingrese su asunto' onBlur={EventBlur} value={form.asunto} onChange={EventChange} /> <br/>
                {error.asunto&& <Mensaje err={error.asunto}/> }
                <textarea   
                    cols="50"
                    rows="5"
                    placeholder="Escribe tus comentarios"
                    name='comentarios'  id='comentarios' value={form.comentarios} onBlur={EventBlur} onChange={EventChange}  >
                </textarea><br/>
                {error.comentarios&& <Mensaje err={error.comentarios}/> }
                <input type="submit" value="Enviar"/>
            </form>

            {loading&&<Loader/>}
            {response&&<Mensaje err="Enviado con exito"/>}
        </>
     );
}
 
