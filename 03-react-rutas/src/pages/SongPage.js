import { useParams } from "react-router-dom";
import SongDetails from "../Components/SonDetails";

const SongPage = ({Song}) => {
    const {id}=useParams();
    const {artist,search,letra}=Song[id];

    return (
        <>
            <h2>Detalle Song</h2>
            <SongDetails artist={artist} search={search} letra={letra} />
        </>
      );
}
 
export default SongPage;