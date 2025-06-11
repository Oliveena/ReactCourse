// ressource often consulted: https://react.dev/learn/adding-interactivity

import React from 'react';
import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

// creating context
export const CatImageContext = createContext();

// creating the provider for context
export const CatImageProvider = ({ children }) => {
  // storing images in a state
  const [images, setImages] = useState([]);

  // BONUS: displaying a large selecte dimage
  const [selectedImage, setSelectedImage] = useState(null);

  // BONUS: setting state for "isLoading" or "!isLoading"
  const [isLoading, setIsLoading] = useState(false);

  // BONUS: displaying selected breed above its associated pictures
  const [selectedBreed, setSelectedBreed] = useState(null);




  // fetching breed images by ID indicated in the API
  const fetchImages = async (breedId) => {
    // once breed clicked, loading begins
    setIsLoading(true);
    console.log("Your kitty pictures are loading. One moment, please.");



    // try-catch for errors
    try {
      const res = await axios.get(
        `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}&limit=6`
      );
      setImages(res.data);
      setIsLoading(false);
    } catch (error) {
        // stop loading
        setIsLoading(false);
      console.error('Oops! There was an error fetching images:', error);
    }
  };
return (
    <CatImageContext.Provider
      value={{selectedBreed, setSelectedBreed, images, selectedImage, setSelectedImage, fetchImages, isLoading}}
    >
      {children}
    </CatImageContext.Provider>
  );
};