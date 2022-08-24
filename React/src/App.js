import React from "react";
import logo from './logo.svg';
import './App.css';
import Clistar from "./components/Componente";
import { Propiedades } from "./components/propiedades";
import { Estado } from "./components/estado";
import { RenderCondicional } from "./components/renderizadoCondicional";
import { ComponenteElemento } from "./components/ComponenteElemento";
import { EventosES6, EventosES7,MasEventos} from "./components/Eventos"
import  ComunicacionComponentes from "./components/ComuniciacionComponents"
import  CicloVida from "./components/relojDigital"
/* import  AjaxApi from "./components/ajaxApi" */
import  Hooks from "./components/useStateHooks"
import  ScrollUseEffect from "./components/useEffect"
import  RelojHooks from "./components/relojHooks"
import  ApiHooks from "./components/ajaxApihook"
import  HookPersonal from "./components/hooksPersonal"
import  Referencias from "./components/refHooks"
import  Formulario from "./components/formHooks"
import  Estilos from "./components/Estilos"
import  CompEstilizados from "./components/ComponentesEstilizados"



function App() {

  let nombre ="wiel",
  estado=true,
  meses=["enero","ferbrero","marzo","abril","mayo","junio","julio"];
  return (
    <>
   
    <div className="App">
      <header className="App-header">
        <section>
          <img src={logo} className="App-logo" alt="logo" />
          <label htmlFor="nombre">Nombre</label>
          <input type="text" id="nombre" />
          <p>
            Editar <code>src/App.js</code> and save to reload.
          </p>
          <p> {nombre}</p>
          <p> {estado?"el user esta logeado":"el user no esta logeado"}</p>
          <ul>
            {meses.map((e,ind)=>(
              <li key={ind}>{e}</li>
            ))}
          </ul>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </section>

        <section>
          <Clistar msg="soy el componente de listar desde una funcion flecha" />
          <hr/>
          <Propiedades 
          array={[1,2,3]} 
          numero= {12}
          boolean={true} 
          objeto={{dni:"123",nombre:"jose"}}
          fun={(num)=>num*num}
          elementReact={<i>Soy un elemetReact</i>}
          ReactComponent={<Clistar msg="soy un componente llamado desde una prop"/>}
          />

          <hr/>

          <Estado/>
          <hr/>

          <RenderCondicional/>
          <hr/>

          <ComponenteElemento/>
          <hr/>

          <EventosES6/>
          <hr/>

          <EventosES7/>
          <hr/>

          <MasEventos/>
          <hr/>

          <ComunicacionComponentes/>
          <hr/>
          <CicloVida/>
          <hr/>
         {/*  <AjaxApi/> */}
          <hr/>
          <Hooks/>
          <hr/>
          <ScrollUseEffect/>
          <hr/>
          <RelojHooks/>

         {/*<ApiHooks/>*/}
          <HookPersonal/>
          <Referencias/>
          <Formulario/>
          <Estilos/>
          <CompEstilizados/>
          
        </section>

      </header>
    </div>

    <div></div>
    </>
  );
}

export default App;
