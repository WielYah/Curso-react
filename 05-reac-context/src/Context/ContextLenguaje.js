import { createContext, useState } from "react";

    const LenguajeContext=createContext();

    const LenguajeProvider=({children})=>{
        const [lenguaje, setLenguaje] = useState("es");
        const translations = {
        es: {
          headerTitle: "Mi aplicación CON Context API",
          headerSubtitle: "Mi cabecera",
          headerLight: "Claro",
          headerDark: "Oscuro",
          buttonLogin: "Iniciar Sesión",
          buttonLogout: "Cerrar Sesión",
          mainWelcome: "Bienvenid@ invitad@",
          mainHello: "Hola Usuari@",
          mainContent: "Mi contenido principal",
          footerTitle: "Mi pié de página",
        },
        en: {
          headerTitle: "My application with Context API",
          headerSubtitle: "My header",
          headerLight: "Light",
          headerDark: "Dark",
          buttonLogin: "Login",
          buttonLogout: "Logout",
          mainWelcome: "Welcome Guest",
          mainHello: "Hello User",
          mainContent: "My main content",
          footerTitle: "My footer",
        },
      };
      const [text, setText] = useState(translations[lenguaje]);

      const changeLanguaje=(e)=>{
    
        if(e.target.value==="es"){
          setLenguaje("es");
          setText(translations.es);
        }else{
          setLenguaje("en");
          setText(translations.en);
        }
      }
      const data={text,changeLanguaje};

        return(
            <LenguajeContext.Provider value={data}>{children}</LenguajeContext.Provider>
        )
       
    }

    export {LenguajeProvider};
    export default LenguajeContext;

