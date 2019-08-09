import React from 'react';
import './App.css';
import { images } from "./images";
import { Gallery, GalleryImage } from 'react-gesture-gallery';

function App() {
  const [index, setIndex] = React.useState(0)
  return (
    <Gallery 
      style={{
        height:'100vh',
        width:'100vw',
        background:'black'

      }}
      index={index}
      onRequestChange={i => {
        setIndex(i)
      }}
    >
      {images.map(image => (
          <GalleryImage objectFit="contain" key={image.url} src={image.url} />
          )
        )
      }
    </Gallery>

  );
}

export default App;
