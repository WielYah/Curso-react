import React,{useState} from 'react';

let initialForm={
    artist:"",
    song:""
}

const SongForm = ({setSearch}) => {

    const [form, setForm] = useState(initialForm);

    const ChangeInput=(e)=>{
        setForm({
            ...form,
            [e.target.name]:e.target.value
        })
    }
    const enviar=(e)=>{
        e.preventDefault();
        if(form.artist&&form.song){
            setSearch(form)
            setForm(initialForm);
        }else{
            alert("ingrese datos")
        }
       
    }

    return ( 
        <form onSubmit={enviar} >
            <input type="text" name="artist" onChange={ChangeInput} value={form.artist} />
            <input type="text" name="song" onChange={ChangeInput} value={form.song} />
            <input type="submit" value="Enviar"/>

        </form>
     );
}
 
export default SongForm;