import SongTableRow from "./SongRows";

const SongTable = ({Song,DeleteSong}) => {
       
    return (
        <div>
          <h3>Mis Canciones Favoritas</h3>
          <table>
            <thead>
              <tr>
                <th colSpan="2">Artista</th>
                <th>Canción</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>                  
               {Song.length > 0 ? (
                Song.map((el, index) => (
                  <SongTableRow 
                  DeleteSong={DeleteSong}
                    key={index}
                    el={el}
                    id={index}
                   
                  />
                ))
              ) : (
                <tr>
                  <td colSpan="4">Sin Canciones Favoritas</td>
                </tr>
              )} 
            </tbody>
          </table>
        </div>
      );
}
 
export default SongTable;