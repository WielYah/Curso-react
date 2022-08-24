import React,{useState} from 'react';

let initialForm={
    artist:"",
    song:""
}

const SongForm = ({setSearch,salvarCancion}) => {

    const [form, setForm] = useState(initialForm);
    const [saveDisabled, setSaveDisabled] = useState(true);

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
            setSaveDisabled(false)

        }else{
            alert("ingrese datos");
            setSaveDisabled(true);
        }
       
    }

    return ( 
        <form onSubmit={enviar} >
            <input type="text" name="artist" onChange={ChangeInput} value={form.artist} />
            <input type="text" name="song" onChange={ChangeInput} value={form.song} />
            <input type="submit" value="buscar"/>
            <input type="button" value="Salvar" onClick={salvarCancion} disabled={saveDisabled && "disabled"}/>

        </form>
     );
}
 
export default SongForm;