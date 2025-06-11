import React from 'react';
import { useContext } from 'react';
import { CatImageContext } from '../contexts/CatImageContext'; 

export default function CatImages() {
    {/*importing cat images from context*/}
     const { images, isLoading } = useContext(CatImageContext);

     // adding a visible UI message on top of the pre-exisititing console.log() in CatImageContext.js
    if (isLoading) {
        return <p>Your kitty pictures are loading. One moment, please.</p>;
    }
    
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