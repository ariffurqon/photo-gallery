import React from 'react';
import './App.css';
import { images } from "./images";
import { Gallery, GalleryImage } from 'react-gesture-gallery';

function App() {
  return (
    <Gallery index={0}>
      {images.map(image => (
        <div>
        <GalleryImage key={image.url} src={image.url} />
        </div>
        ))}
    </Gallery>

  );
}

export default App;
