import React from 'react';
import './App.css';
import { images } from "./images";
import { Gallery, GalleryImage } from 'react-gesture-gallery';

function App() {
  const [index, setIndex] = React.useState(0)
  return (
    <Gallery 
      index={index}
      onRequestChange={i => {
        setIndex(i)
      }}
    >
      {images.map(image => (
          <GalleryImage key={image.url} src={image.url} />
          )
        )
      }
    </Gallery>

  );
}

export default App;
