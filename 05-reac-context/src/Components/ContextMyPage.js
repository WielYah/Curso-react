import { useState } from 'react';
import ContextMain from "./ContextMain";
import ContextHeader from "./ContextHeader";
import ContextFooter from "./ContextFooter";
import { ThemeProvider } from '../Context/ContextTheme';
import { LenguajeProvider } from '../Context/ContextLenguaje';
import { SessionProvider } from '../Context/ContextSession';

const ContextMyPage = () => {

    return (  
        <div className="my-page">
          <SessionProvider>
            <LenguajeProvider>
              <ThemeProvider>
                <ContextHeader/>
                <ContextMain/>
                <ContextFooter />
              </ThemeProvider>
            </LenguajeProvider>
          </SessionProvider>
          
            
          
        </div>
    );

}
 
export default ContextMyPage;



