import { useContext } from "react";
import LenguajeContext from "../Context/ContextLenguaje";
import SessionContext from "../Context/ContextSession";
import ThemeContext from "../Context/ContextTheme";

const ContextMain = () => {
    const {text}=useContext(LenguajeContext)
    const {theme} =useContext(ThemeContext);
    const {session} =useContext(SessionContext);
    
    return (
        <main className={theme}>
           <p> Bienvenido usuario</p>
           <p>  {session? text.mainHello:text.mainWelcome}</p>
        </main>  
    );
}
 
export default ContextMain;