import { useParams } from "react-router-dom";

const Usuario = () => {
    const params=useParams()
    
    const {u} =params;
    console.log(u);
  
    return (  <>

           <h2>Bienvenido Usuario  {u}</h2>
    </>);
}
 
export default Usuario;