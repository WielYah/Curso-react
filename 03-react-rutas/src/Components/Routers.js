
import { Routes,Route,NavLink, useLocation, useNavigate,Navigate, useParams } from 'react-router-dom';
import Usuario from './User';

  function Home() {
    return (
      <>
        <main>
          <h2>Pagina de Home</h2>
          <p>You can do this, I believe in you.</p>
        </main>
        
      </>
    );
  }
  function About() {
    return (
      <>
        <main>
          <h2>Pagina de about</h2>
          <p>You can do this, I believe in you.</p>
        </main>
       
      </>
    );
  }
  function Error() {
    return (
      <>
        <main>
          <h2>Error 404</h2>
          <p>No existe esta pagina</p>
        </main>
        <nav>
          
        </nav>
      </>
    );
  }
  function Productos() {

    const {search}=useLocation();
    //para serializar de una mejor forma los parametros utlizamos un obj "URLSearchParams"
    let query =new URLSearchParams(search);  //serializa los parametros

    const LIMIT=20;
    let start = parseInt(query.get("inicio")) || 1;
    let end = parseInt(query.get("fin")) || LIMIT;

    //hook que me va a permitir manejar el historial del nanvegador, con este hook podemos modificar los parametros que me envian por la URL?
    let navigate=useNavigate();

    const handlePrev = (e) => {
      navigate(`?inicio=${start - LIMIT}&fin=${end - LIMIT}`)
    };

    const handleNext = (e) => {
      navigate(`?inicio=${start + LIMIT}&fin=${end + LIMIT}`)
    };
    
    return (
      <>
        <div>
          <h3>Productos</h3>
          <p>
            Mostrando productos del <b>{start}</b> al <b>{end}</b>.
          </p>
          {start > LIMIT && <button onClick={handlePrev}>Atrás</button>}
          <button onClick={handleNext}>Adelante</button>
        </div>
      </>
    );
  }
  function Anidadas() {
    const {ruta}=useParams();
    return (
      <>
            <h2 >Todo sobre <span style={{color:"red"}}>{ruta}</span></h2>      
      </>
    );
  }
  function Login() {
    const {ruta}=useParams();
    return (
      <>
            <h2>Login</h2>      
      </>
    );
  }
  function Dashboard() {
    const {ruta}=useParams();
    return (
      <>
            <h2>Dashboard</h2>      
      </>
    );
  }

  /* function RutasPrivadas({element:Element}) {
   console.log("rutas privadas"); 
   let logeado;
   logeado=true;
   logeado=null;

   return (
      logeado?<Element/>:<Navigate to="/login"></Navigate>
    );
  } */

  function ReactRoute() {
    return (
      <>
        <main>
          <h2>Consultas Anidadas</h2>
          <li>
              <NavLink to="jsx">Jsx</NavLink>
          </li>
          <li>
              <NavLink to="props">Props</NavLink>
          </li>
          <li>
              <NavLink to="estado">Estado</NavLink>
          </li>
          <li>
              <NavLink to="components">Componentes</NavLink>
          </li>

          <Routes>
            <Route path=':ruta' element={<Anidadas/>} />
         
          </Routes>
        </main>
        </>  
    );
  }
const Routers = () => {
  let logeado;
  logeado=null;
  logeado=true;
 
    return ( 
        <>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/About' element={<About/>}/>
                <Route path='/users/:u' element={<Usuario/>}/>
                <Route path='/productos' element={<Productos/>}/>
                <Route path='/acerca' element={<Navigate to="/about"/>}/>
                <Route path='/react/*' element={<ReactRoute/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/dashboard' element={logeado?<Dashboard/>:<Navigate to="/login"></Navigate>}/>
                <Route path='*' element={<Error/>}/>
            </Routes>
        
        </>
     );
}
export default Routers;  



