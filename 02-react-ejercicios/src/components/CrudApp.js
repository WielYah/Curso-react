import React,{useState} from 'react';
import Form from "./FormCrud";
import Table from "./TableCrud";

const initialDb = [
    {
      id: 1,
      name: "Seiya",
      constellation: "Pegaso",
    },
    {
      id: 2,
      name: "Shiryu",
      constellation: "Dragón",
    },
    {
      id: 3,
      name: "Hyoga",
      constellation: "Cisne",
    },
    {
      id: 4,
      name: "Shun",
      constellation: "Andrómeda",
    },
    {
      id: 5,
      name: "Ikki",
      constellation: "Fénix",
    },
  ];

const CrudApp = () => {
    
    const [Db, setDb] = useState(initialDb); 
    const [stateEdit,setStateEdit]=useState(null);
    
    let CreateData=(data)=>{    
        data.id=new Date().getTime();
        console.log(data);
          setDb([
            ...Db,
            data
          ])  
    }
    let UpdateData=(data)=>{
        const newDB=Db.map((el)=> el.id===data.id?data:el);

        setDb(newDB)  
    }
    let DeleteData=(id)=>{
       let confirmDelete= window.confirm("¿Seguro de eliminar e registro?");

      if(confirmDelete){
        console.log("si");
        let deleteDB=Db.filter((el)=>el.id!==id);

        setDb(deleteDB);
      }else{
        console.log("no");

      }
       
    }
    
    return ( 
       <>
            <h2>Crud App</h2>
            <Form CreateData={CreateData} UpdateData={UpdateData} stateEdit={stateEdit} setStateEdit={setStateEdit} />
           <Table data={Db}  DeleteData={DeleteData} setStateEdit={setStateEdit} /> 
        </>
        
        
     );
}
 
export default CrudApp;


/* primero creamos los datos que vamos a consumir y lo guardamos en un [], luego iniciamos el estado y le damos el valor del [],
a su vez creamos el componente Form y Table
en form creamos el componente que va a retornar un formulario, tambien inicamos el estado y su valor sera un {} con propiedades que luego
llamaremos en el valor de cada input y creamos funciones para que se ejecuten en su evento OnChange y Onsubmit
en table enviamos a travez de las propiedades del componente el {} que vamos a consumir para mostrarlo,
destructuramos en la funcion de mi commponente table, agregamos una condicion si esta vacio y lo recorremos creando un componente por cada recorrida
*/