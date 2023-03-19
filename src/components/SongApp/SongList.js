import { nanoid } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { addSong, removeSong } from "../../store/playlistStore";

function SongList() {
    const dispatch = useDispatch();

    const handleAddSong = () => {
        dispatch(addSong("some song " + nanoid()));
    }

    const handleRemoveSong = (i) => {
        dispatch(removeSong(i));
    }

    const songsList = useSelector((state) => state.songs);

    const renderedSongList = songsList.map((e, i) =>
        <div key={i} style={{ display: "flex", margin: "auto", maxWidth: "300px", justifyContent: "space-between", alignItems: "center", border: "1px solid green", marginBottom: "10px", padding: "10px 20px" }}>
            <p style={{ margin: "0" }}>{e}</p>
            <button onClick={() => handleRemoveSong(i)} style={{ background: "white", color: "red", cursor: "pointer", border: "none" }}>x</button>
        </div>
    )
    return (
        <div>
            <p>Songs List  </p>
            <button onClick={handleAddSong} style={{ background: "green", color: "white", cursor: "pointer", border: "none", padding: "10px" }}>Add song to Playlist</button>
            <hr />
            {renderedSongList}
        </div>
    );
}

export default SongList;