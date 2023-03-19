import { nanoid } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { addMovie, removeMovie } from "../../store/playlistStore";

function MovieList() {
    const dispatch = useDispatch();

    const handleAddMovie = () => {
        dispatch(addMovie("some Movie " + nanoid()));
    }

    const handleRemoveMovie = (i) => {
        dispatch(removeMovie(i));
    }

    const moviesList = useSelector((state) => state.movies);

    const renderedMovieList = moviesList.map((e, i) =>
        <div key={i} style={{ display: "flex", margin: "auto", maxWidth: "300px", justifyContent: "space-between", alignItems: "center", border: "1px solid green", marginBottom: "10px", padding: "10px 20px" }}>
            <p style={{ margin: "0" }}>{e}</p>
            <button onClick={() => handleRemoveMovie(i)} style={{ background: "white", color: "red", cursor: "pointer", border: "none" }}>x</button>
        </div>
    )
    return (
        <div>
            <p>Movies List  </p>
            <button onClick={handleAddMovie} style={{ background: "green", color: "white", cursor: "pointer", border: "none", padding: "10px" }} type="submit">Add movie to Playlist</button>
            <hr />
            {renderedMovieList}
        </div>
    );
}

export default MovieList;