import React from 'react';
import { useNavigate } from 'react-router-dom';

const DataCrud = ({el,DeleteData,setStateEdit}) => {
    const {id,name,constellation}=el
    let navigate=useNavigate();

    const btnEditar=()=>{
        setStateEdit(el);
        navigate(`/santos/editar/${id}`);

    }
    return ( 
        <tr>
            <td>{el.name}</td>
            <td>{el.constellation}</td>
            <td>
                <button type='button' onClick={btnEditar}>Editar</button>
                <button type='button' onClick={()=>DeleteData(id)}>Eliminar</button>
            </td>
        </tr>
       
     );
}
 
export default DataCrud;