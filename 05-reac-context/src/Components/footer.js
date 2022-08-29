const Footer = ({theme,text}) => {
    return (  
        <footer className={theme}>
            <p>{text.footerTitle}</p>
           
        </footer>   
    );
}
 
export default Footer;