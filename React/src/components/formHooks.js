import {useState} from "react"

export default function Formulario(){
    const [form,setForm]=useState([]);

    let handleChange=(e)=>{
        setForm({
            ...form,
            [e.target.name]:e.target.value
        })
    }

    let handleChecked=(e)=>{
        setForm({
            ...form,
            [e.target.name]:e.target.checked
        })
    }
    return(
        <>
            <h2>Formularios</h2>
            <form>
                <label htmlFor="inpnombre">nombre</label>
                <input type="text" id="inpnombre" name="inpnombre" onChange={handleChange}/>
                <p>Elije tu framework</p>
                    <label htmlFor="framework">Vanilla</label>
                    <input type="radio" id="vanilla" name="framework" value="vanilla" onChange={handleChange}/>
                    <label htmlFor="framework">React</label>
                    <input type="radio" id="react" name="framework" value="react" onChange={handleChange}/>
                <p>Elije tu lenguaje</p>
                <select name="lenguaje" onChange={handleChange}>
                    <option value="">---</option>
                    <option value="js">js</option>
                    <option value="php">php</option>
                    <option value="go">go</option>
                    <option value="python">python</option>
                </select>
                <p>Aceptas los terminos</p>
                <input type="checkbox" id="terminos" name="terminos" onChange={handleChecked}/>
            </form>
        </>

    )
}










