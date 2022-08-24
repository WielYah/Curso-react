import { useState, useEffect } from 'react';
import Selects from './Selects';

const SelectAnidados = () => {
    const [region, setRegion] = useState("");
    const [prov, setProv] = useState("");
    const [dist, setDist] = useState("");

    const TOKEN = "d81a7ac7-976d-4e1e-b7d3-b1979d791b6c";

    return ( 
        <>
            <h2>Select Anidados</h2>
             <Selects title="Region" url={`https://api-sepomex.hckdrk.mx/query/get_estados?token=${TOKEN}`} change={(e)=>setRegion(e.target.value)}/><br/>
             {region && <Selects title="Provincia" url={`https://api-sepomex.hckdrk.mx/query/get_municipio_por_estado/${prov}?token=${TOKEN}`} change={(e)=>setProv(e.target.value)}/>}<br/>
            {prov && <Selects title="Distrito" url={`https://api-sepomex.hckdrk.mx/query/get_colonia_por_municipio/${dist}?token=${TOKEN}`} change={(e)=>setDist(e.target.value)}/>}<br/>
            
        </>
     );
}
 
export default SelectAnidados;