import { useNavigate } from "react-router-dom";


const SongTableRow = ({el,DeleteSong,id}) => {
    const{artist,search}=el;
    let navigate=useNavigate();
  
  return (
    <tr>
      <td>
        <img style={{width:"60px"}} src={artist.artists[0].strArtistThumb} />
      </td>
      <td>{artist.artists[0].strArtist}</td>
      <td>{search.song}</td>
      <td>
        <button onClick={()=>navigate(`/canciones/lista/${id}`)}>Ver</button>
        <button onClick={()=>DeleteSong(id)}>Eliminar</button>
      </td>
    </tr>
  );
};

export default SongTableRow;