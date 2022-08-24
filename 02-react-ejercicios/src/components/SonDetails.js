import React from 'react';
import SongArtist from './SongArtist';
import SongLetra from './SongLetra';
import Mensaje from './Mensaje';

const SongDetails = ({search,artist,letra}) => {
    if (!artist || !letra) return null; //sirve para que al enviar no me muestre un mensaje de error y me devuelva los datos correspondientes  
    
   /*  console.log(artist);
    console.log(search); */
    console.log(letra);

    return ( 
        <>
        {artist.artists?(<SongArtist artist={artist.artists[0]}/>) :(<Mensaje err={`No se pudo encontrar la cancion "${search.artist}"`} />) }
        
        {letra.error||letra.err||letra==="DOMException"?<Mensaje err={`No se pudo encontrar la cancion "${search.song}"`} />:<SongLetra song={letra.lyrics} />} 
        </>
     );
}
 
export default SongDetails;