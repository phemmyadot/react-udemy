import { useState } from 'react';
import './App.css';
import BooksPage from './BooksPage';
import PhotoPage from './PhotoPage';
import { Provider } from "../components/bookApp/bookContext";
import PlaylistApp from './PlaylistPage';


function App() {

  const apps = [
    { name: "Photo Page", app: <PhotoPage/> },
    { name: "Books Page", app: <Provider><BooksPage /></Provider> },
    { name: "Song Page", app: <PlaylistApp /> },
  ]


  const [current, setCurrent] = useState(apps[0]);

  const setApp = (e) => {
    setCurrent(e)
  }

  const btns = apps.map((e, i) => <button style={{ background: current.name === e.name ? "green" : "white", color: current.name === e.name ? "white" : "green", cursor: "pointer", border: "1px solid green", padding: "10px", margin: "30px 0" }} key={i} onClick={() => setApp(e)}>{e.name}</button>)

  return <div className='App'>
    {btns}
    <hr />
    {current.app}
  </div>
}

export default App;
