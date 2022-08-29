const Main = ({theme,session,text}) => {
    return (
        <main className={theme}>
           <p> Bienvenido usuario</p>
           <p>  {session? text.mainHello :text.mainWelcome}</p>
        </main>  
    );
}
 
export default Main;