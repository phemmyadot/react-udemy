import { Provider, useDispatch } from "react-redux";
import MovieList from "../components/SongApp/MovieList";
import SongList from "../components/SongApp/SongList";
import { reset } from "../store/playlistStore";
import { store } from "../store/playlistStore";
function PlaylistApp() {
    return (
        <Provider store={store}>
            <PlayListPage/>
        </Provider>
    );
}

const PlayListPage = () => {
    const dispatch = useDispatch();
    const handleReset = () => dispatch(reset());
    return (<div className="PlaylistApp">
        <h1 className="mb-10">Playlist App</h1>
        <button onClick={() => handleReset()} style={{ background: "green", color: "white", cursor: "pointer", border: "none", padding: "10px" }}>Reset</button>

        <div style={{ display: "flex", justifyContent: "center" }}>
            <MovieList />
            <div style={{ width: "50px" }}></div>
            <SongList />
        </div>
    </div>);
}

export default PlaylistApp;

