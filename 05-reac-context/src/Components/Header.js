const Header = ({theme,changeTheme,changeLanguaje,changeSesion,session,text}) => {
    return ( 
        <>
            <header className={theme}>
               <h3>{text.headerTitle}  </h3>
                <h5>{text.headerSubtitle}</h5>

                <select name="idioma" onChange={changeLanguaje}>
                    <option value="es">Es</option>
                    <option value="en">En</option>
                </select>
                <label>{text.headerDark}</label>
                <input onClick={changeTheme} value="dark" name="theme" type="radio"/>
                <label>{text.headerLight}</label>
                <input onClick={changeTheme} value="ligth" name="theme" type="radio"/>


             {/*    <input onClick={changeSesion} type="button" value="Inicio sesion"/>
                <input onClick={changeSesion} type="button" value="Logout"/>
                <button type="button">logout</button> */}

                <button onClick={changeSesion} type="button">{session?text.buttonLogin:text.buttonLogout}</button>
            </header>

        </>
     );
}
 
export default Header;