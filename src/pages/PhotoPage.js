
import PhotoCard from '../components/PhotoApp/PhotoCard';
import { useState } from 'react';
import { searchImages } from '../core/api';
import Search from '../components/PhotoApp/search';

function PhotoPage() {
  const [photos, setPhotos] = useState([]);
  const onSubmitForm = async (e) => {
    const v = await searchImages(e);
    setPhotos(v);
  }
  const photosDiv = photos.map((c, i) => <PhotoCard key={c.id} image={c.urls.small} alt={c.alt_description} />)
  return (
    <div className="App">

      <Search onSubmit={onSubmitForm} />
      <div className="list">
        {photosDiv}
      </div>
    </div>
  );

}

export default PhotoPage;