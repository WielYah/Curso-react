import React from "react";
import styled, { css,keyframes,ThemeProvider,createGlobalStyle } from "styled-components"; 

export default function CompEstilizados() {

    let mainColor="#db7093",mainHoverColor="#db709380";
    let trans=(time)=>{
        return `all ${time} ease-out`;
    }

    const animation=keyframes`
        0%{
            opacity:0;
        }
        100%{
            opacity1;
        }
    `;

/* styled etiquetas html y concatenacion gracias al "&", 
 utilizar variables gracias al template string y funciones,
propiedades en los componentes de styled y utilizazarlas,
utilizar themeProviders, 
es un contenedor de variables o de etiquetas html?, y tiene una propiedad que es obj para tener una serie de propiedades,
tambien podemos heredar los estilos de un componente que queramos,
crear createGlobalStyle, podemos darle estilos a todas las etiquetas que queramos como una hoja  css */

    const MyH3=styled.h3` 
        padding:2rem;
        background: ${({color})=>color||"#000"}; //gracias a una funcion flecha obtengo las props de mi componente "Myh3";
        ${({isbuton})=>isbuton && css`
            width:60%;
            margin:auto;
            border-radius:10px;
            cursor:pointer;`}
        transition:${trans("0.5s")};
        animation:${animation, trans("5s")} ;
        &:hover{
            background:${mainHoverColor};
         };
    `;

    const Box=styled.div`
         padding:1rem;
         margin:1rem;
         color:${({theme})=>theme.color};
         background:${({theme})=>theme.bgcolor};
    `;
    const BoxBorderRadius=styled(Box)`
         border-radius:1rem;
    `;

    const ligth={
        color:"#222",
        bgcolor:"#DDD "
    }

    const dark={
        color:"#DDD",
        bgcolor:"#222"
    }

    //este es un componente que tengo que renderizar
    const GlobalaStyle=createGlobalStyle`
    h2{
        background:#fff;
        padding:10px;
        color:#61dafb;
        text-transform:uppercase
    }
    `;


     return(
        <>
            <GlobalaStyle/>
            <h2>Componentes Esterilizados</h2>
            <MyH3>Soy el h3 creado en styled</MyH3>
            <MyH3 color="#61dafb">Soy el h3 creado en styled</MyH3>
            <MyH3 isbuton>h3 estilizado a boton</MyH3>
            <ThemeProvider theme={ligth}>
                <Box>Soy una caja ligth</Box>
                <BoxBorderRadius>Soy una caja redondeada ligth</BoxBorderRadius>
            </ThemeProvider>
            <ThemeProvider theme={dark}>
                <Box>Soy una caja dark</Box>
                <BoxBorderRadius>Soy una caja redondeada dark</BoxBorderRadius>
            </ThemeProvider>
        </>
     )
}

