import { useState } from "react";
import { v4 as uuidv4} from 'uuid'
import NewSongForm from "./NewSongForm";

const SongList = () => {
    const [songs, setSongs] = useState([
        {title:'this wild life', id:1},
        {title:"Memory lane", id: 2},
        {title:"Time to say Goodbye", id:3}
    ])

    function addSong (title) {
        setSongs([...songs, {title, id: uuidv4()}])
    }
    return ( 
        <div className="songlist">
            <ul>
                {songs.map(song => (
                    <li key={song.id}>{ song.title }</li>
                ))}
            </ul>
          <NewSongForm addSong={addSong}/>
        </div>
     );
}
 
export default SongList;