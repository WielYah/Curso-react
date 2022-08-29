import { useState } from 'react';

import Footer from "./footer";
import Header from "./Header";
import Main from "./Main";

const MyPage = () => {
  const [theme, setTheme] = useState("dark");
  const [session, setSession] = useState(null);
  const [lenguaje, setLenguaje] = useState("es");
  const translations = {
    es: {
      headerTitle: "Mi aplicación SIN Context API",
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
      headerTitle: "My application without Context API",
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
  
//console.log(text);


  const changeTheme=(e)=>{
      console.log(e.target.value);
      setTheme(e.target.value)
  }
  const changeLanguaje=(e)=>{
    
    if(e.target.value==="es"){
      setLenguaje("es");
      setText(translations.es);
    }else{
      setLenguaje("en");
      setText(translations.en);
    }
   
    
  }
  const changeSesion=(e)=>{
    if(session){
      setSession(null)
    }else{
      setSession(true)
    }
    console.log(e.target.value);
   
  }

    return (  
        <div className="my-page">
          <Header theme={theme} changeTheme={changeTheme}changeLanguaje={changeLanguaje} changeSesion={changeSesion} session={session} text={text} />
          <Main theme={theme} session={session} text={text}/>
          <Footer theme={theme} text={text}/>
        </div>
    );
}

export default MyPage;




