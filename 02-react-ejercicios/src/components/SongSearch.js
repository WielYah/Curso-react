import React,{useState,useEffect} from 'react';
import SongForm from './SongForm';
import SongDetails from './SonDetails';
import Loader from './loader';
import { HelperFetch } from '../Helpers/HelperFetch';

const SongSearch = () => {

    const [loader, setLoader] = useState(false);
    const [search, setSearch] = useState(null);
    const [artist, setArtist] = useState(null);
    const [letra, setLetra] = useState(null);

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
      
 
    }, [search]);

    return ( 
        <>
            <h2>Song Search</h2>
            <SongForm setSearch={setSearch}/>
            {loader && <Loader/>}
            {search && !loader&& <SongDetails search={search} artist={artist} letra={letra} />} 
        </>
     );
}
 
export default SongSearch;