import { useState, useEffect } from 'react';
import { UseFecth } from '../Hooks/useFetch';

const Selects = ({title,url,change}) => {
    const{data,error,loading} =UseFecth(url)

    //para no tener renderizados inecesarios
    //if(!Data) return null;

    //console.log(data,error,loading);

    let id = `select-${title}`;

    return ( 
        <>
            <label htmlFor={id}>{title}</label>
            <select name={id} id={id} onChange={change}>
                <option  value="sss">Elije una {title}</option>
                <option  value="swww">--asdsa</option>
            </select>
        </>
     );
}
 
export default Selects;