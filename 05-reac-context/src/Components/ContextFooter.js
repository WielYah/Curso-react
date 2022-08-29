import { useContext } from "react";
import LenguajeContext from "../Context/ContextLenguaje";
import ThemeContext from "../Context/ContextTheme";

const ContextFooter = () => {

    const {text}=useContext(LenguajeContext)
    const {theme} =useContext(ThemeContext);
    return (  
        <footer className={theme}>
            <p>{text.footerTitle}</p>
           
        </footer>   
    );
}
 
export default ContextFooter;