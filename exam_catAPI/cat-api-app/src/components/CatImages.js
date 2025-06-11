import React from 'react';
import { useContext } from 'react';
import { CatImageContext } from '../contexts/CatImageContext'; 

export default function CatImages() {
    {/*importing cat images from context*/}
    const { images } = useContext(CatImageContext);
    
    return(
        <div>
        {images.map((img) => (
        <img
          key={img.id}
          src={img.url}
          alt="Cat of a Breed Selected By User"
        />
      ))}
        </div> 
    );
}