import CrudApp from "./components/CrudApp"
import CrudApi from "./components/CrudApi"
import SongSearch from "./components/SongSearch"
import SelectAnidados from "./components/SelectAnidados";
import { FromComp } from "./components/ComForm";
import Modals from "./components/Modals";

function App() {
  return (
    <>
      <Modals/>
      <FromComp/>
      <SelectAnidados/>
      <SongSearch/>
      <CrudApi/>
      <CrudApp/>
    </>
  );
}

export default App;
