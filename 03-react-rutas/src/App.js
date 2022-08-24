import Routers from "./Components/Routers";
import { BrowserRouter as Router, HashRouter } from "react-router-dom";
import MenuNav from "./Components/MenuNav";
import CrudApi from "./Components/CrudApi";
import SongSearch from "./Components/SongSearch";
function App() {
  return (
      <>
          
           {/*  <CrudApi/>
            <hr/> */}
            <SongSearch/>
             <hr/>
           {/*  <Router>
              <MenuNav/>
              <Routers/>
            </Router> */}

      </>
   
  
   
  );
}

export default App;
