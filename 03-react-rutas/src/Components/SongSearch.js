import React,{useState,useEffect} from 'react';
import SongForm from './SongForm';
import SongDetails from './SonDetails';
import Loader from './loader';
import { HelperFetch } from '../Helpers/HelperFetch';
import { HashRouter, NavLink, Route, Routes } from 'react-router-dom';
import Error404 from "../pages/Error404"
import SongTable from './SongTable';
import SongPage from '../pages/SongPage';

let initialSong=JSON.parse(localStorage.getItem("song"))||[];

const SongSearch = () => {

    const [loader, setLoader] = useState(false);
    const [search, setSearch] = useState(null);
    const [artist, setArtist] = useState(null);
    const [letra, setLetra] = useState(null);
    const [Song, setSong] = useState(initialSong);

    useEffect(() => {
        if(!search) return;

        const fetchSong=async()=>{
            const {artist,song} =search
            //console.log(artist);
            let artistUrl=`https://www.theaudiodb.com/api/v1/json/2/search.php?s=${artist}`;
            let songUrl=`https://api.lyrics.ovh/v1/${artist}/${song}`;
            setLoader(true);
            //promesa.all recibe un arreglo de todas las peticiones fetch que nosotros querarmos hacer
            const [artistRes,songRes]=await Promise.all([
                HelperFetch().get(artistUrl),
                HelperFetch().get(songUrl),
            ]); 

            //console.log(artistRes,songRes);
            setArtist(artistRes);
            setLetra(songRes); 
            setLoader(false);  
        }
        fetchSong();
        localStorage.setItem("song",JSON.stringify(Song));
      
    }, [search,Song]);


    const salvarCancion=()=>{
        alert("cancion Salvada");
        let mySong={
            search,
            artist,
            letra
        }
        console.log(mySong);
         setSong([...Song,mySong]);
         setSearch(null);
         localStorage.setItem("song",JSON.stringify([...Song,mySong]));
    }
    const DeleteSong=(id)=>{
        alert(`desea eliminar la cancion con id:${id} `);      
        let newSongs=Song.filter((el,index)=> index!==id )
        setSong(newSongs)

        localStorage.setItem("song",JSON.stringify(newSongs))
    }

    return ( 
        <>

        <HashRouter>
            <NavLink to="/canciones">Home</NavLink>

            <Routes>
                <Route path='/canciones/*' element={
                    <Routes>
                        <Route path='/' element={
                            <>
                                <h2>Song Search</h2>
                                <SongForm setSearch={setSearch} salvarCancion={salvarCancion} />
                                {loader && <Loader/>}
                                {search && !loader&& <SongDetails search={search} artist={artist} letra={letra} />} 

                                <h2>Tabla de canciones</h2>
                                <SongTable DeleteSong={DeleteSong} Song={Song}></SongTable>
                            </>
                        }></Route>

                        <Route path='/lista/:id' element={<SongPage Song={Song}/>}></Route>


                        <Route path='*' element={<Error404/>}></Route>
                    </Routes>
                }/>

               
            </Routes>
        </HashRouter>
            
        </>
     );
}
 
export default SongSearch;