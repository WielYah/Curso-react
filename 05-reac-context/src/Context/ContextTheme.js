import { createContext, useState } from "react";

const ThemeContext=createContext()

    const ThemeProvider=({children})=>{
        //de este context se pasan todos los valores o props generales a todos los compoenntes que esten dentro del proveedor
        const [theme, setTheme] = useState("dark"); 

        const changeTheme=(e)=>{
            console.log(e.target.value);
            setTheme(e.target.value)
        }
        const data={theme,changeTheme};

        return(        
            <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>
        )
    }

export {ThemeProvider};
export default ThemeContext;