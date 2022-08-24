import React,{useEffect, useState} from 'react';
import { HelperFetch } from '../Helpers/HelperFetch';
import Form from "./FormCrud";
import Table from "./TableCrud";
import Mensaje from "./Mensaje"
import Loading from"./loader"

const CrudApi = () => {
    
   const [Db, setDb] = useState(null); 
   const [stateEdit,setStateEdit]=useState(null);
   const [error,setError]=useState(null);
   const [loading, setLoading] = useState(false);

   const PerFetch=HelperFetch();
   const url='http://localhost:5000/santos'; 

   useEffect(()=>{
      setLoading(true);

      PerFetch.get(url)
      .then((res)=>{
     // console.log(res);
      if(!res.err){
         setDb(res);
      }else{
         setDb(null);
       
         setError(res)
      }
      setLoading(false);

   })

   },[])

   const CreateData=async(data)=>{
      data.id=new Date().getTime();
      let options={
         body:data,
         headers:{"content-type":"application/json"}
      };
     
      let res=await PerFetch.post(url,options);
      //console.log(res);
      if(!res.err){
         setDb([...Db,res])
      }else{
         setError(res);
      }
      //al hacer el post ya se agrega a la base de datos, actualizo mi estado para que me liste el nuevo registro
   }
   const UpdateData=async(data)=>{
      let urlUpdate=`${url}/${data.id}`
      let options={
         body:data,
         headers:{"content-type":"application/json"}
      };

      let res=await PerFetch.put(urlUpdate,options);
      console.log(res);
      if(!res.err){
       let newDb=Db.map((el)=>el.id===data.id?data:el)
        
         setDb(newDb)
      }else{
         setError(res);
      } 
 
   }

   const DeleteData=async(id)=>{
     
      let confirmDelete= window.confirm("¿Seguro de eliminar e registro?");

      if(confirmDelete){
         let urlDelete=`${url}/${id}`
         let options={
            headers:{"content-type":"application/json"}
         };
         let res=await PerFetch.dele(urlDelete,options);
         console.log(res);

      if(!res.err){
       let newDbDelete=Db.filter((el)=>el.id!==id)
         setDb(newDbDelete)
      }else{
         setError(res);
      } 
      }
      
     
 
   }


    return ( 
       <>
            <h2>Crud App</h2>
            <Form stateEdit={stateEdit} setStateEdit={setStateEdit} CreateData={CreateData} UpdateData={UpdateData} />
           {Db &&<Table data={Db}  setStateEdit={setStateEdit} DeleteData={DeleteData}/> }
           {loading&& <Loading/>}
            {error && <Mensaje err={error}/>}
        </>
        
        
     );
}
 
export default CrudApi;