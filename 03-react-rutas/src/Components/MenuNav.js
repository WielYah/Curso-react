import { Link,NavLink } from "react-router-dom";

const MenuNav= () => {
    return (  
        <nav>
          <h2>Conceptos Basicos</h2>
          <ol>
            <li>
                <span>Navegacion con link</span>
             
                <Link to="/">Home</Link>
                <Link to="/About">About</Link>
                <Link to="*">Error404</Link>

            </li>

            <li>
                <span>Navegacion con navlink</span>

                <NavLink to="/" activeclassname="active">Home</NavLink>
                <NavLink to="/About" activeclassname="active">About</NavLink>
                <NavLink to="/users/jhon" activeclassname="active">users</NavLink>
               
                <NavLink to="*" activeclassname="active">Error404</NavLink>

            </li>

            <li>
                <span> Parametros de consulta:</span>
                <Link to="/productos">Productos</Link>
            </li>

            <li>
            <span> Redirecciones:</span>
                <NavLink to="/acerca" activeclassname="active">Acerca</NavLink>
            </li>
            <li>
            <span> Rutas anidadas:</span>
                <NavLink to="/react" activeclassname="active">React</NavLink>
            </li>

            <li>
            <span> Rutas Privadas: </span>

                <NavLink to="/login" activeclassname="active">Login</NavLink>
                <NavLink to="/dashboard" activeclassname="active">Dashboard</NavLink>
            </li>

          </ol>
        </nav>

    );
}
 
export default MenuNav