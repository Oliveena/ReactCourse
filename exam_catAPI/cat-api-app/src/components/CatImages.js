import React, { useContext } from 'react';
import { CatImageContext } from '../contexts/CatImageContext';
import { BreedContext } from '../contexts/BreedContext';


export default function CatImages() {
    {/*importing cat images and other bonusfields from context*/}
    const {images, selectedImage, isLoading, setSelectedImage} = useContext(CatImageContext);
    // selectedBreed is associated to BreedContext, I gotta import it from there
    const { selectedBreed } = useContext(BreedContext);

     // adding a visible UI message on top of the pre-exisititing console.log() in CatImageContext.js
    if (isLoading) {
        return <p>Your kitty pictures are loading. One moment, please.</p>;
    }

  return (
    <div className="cat-images-container">

        {selectedImage && (
        <section className="selected-image-section">
          <div className="selected-image-overlay">
            <img
              src={selectedImage.url}
              alt="Selected Cat"
              className="large-cat-img"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="close-button"
            >
              Close
            </button>
          </div>
        </section>
      )}
      
      {selectedBreed && (
        <div>
          <h2>You have picked: {selectedBreed.name}</h2>
          <p>Here are their fluffy portraits:</p>
        </div>
      )}

      {images.map((img) => (
        <img
          key={img.id}
          src={img.url}
          alt="Cats of the breed selected by user"
          onClick={() => setSelectedImage(img)}
        />
      ))}
    </div>
  );
}