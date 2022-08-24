import React from 'react';

const DataCrud = ({el,DeleteData,setStateEdit}) => {
    const {id,name,constellation}=el
    return ( 
        <tr>
            <td>{el.name}</td>
            <td>{el.constellation}</td>
            <td>
                <button type='button' onClick={()=>setStateEdit(el)}>Editar</button>
                <button type='button' onClick={()=>DeleteData(id)}>Eliminar</button>
            </td>
        </tr>
       
     );
}
 
export default DataCrud;