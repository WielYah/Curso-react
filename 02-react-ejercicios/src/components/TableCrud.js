import React from 'react';
import DataCrud from './DataCrud';
const TableCrud = ({data,DeleteData,setStateEdit}) => {
    return ( 
        <table>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Constelacion</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {data.length>0? ( data.map((el)=> <DataCrud key={el.id} DeleteData={DeleteData} setStateEdit={setStateEdit} el={el}/>) ): ( <tr><td colSpan="3">Sin Datos</td></tr>)}
                   
            </tbody>

        </table>
     );
}
 
export default TableCrud;