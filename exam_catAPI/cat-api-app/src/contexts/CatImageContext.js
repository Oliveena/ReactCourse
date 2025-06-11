import React from 'react';
import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

// creating context
export const CatImageContext = createContext();

// creating the provider for context
export const CatImageProvider = ({ children }) => {
  // storing images in a state
  const [images, setImages] = useState([]);

  // storing the user-selected image
  const [selectedImage, setSelectedImage] = useState(null);

  // fetching breed images by ID indicated in the API
  const fetchImages = async (breedId) => {
    // try-catch for errors
    try {
      const res = await axios.get(
        `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}&limit=6`
      );
      setImages(res.data);
    } catch (error) {
      console.error('Oops! There was an error fetching images:', error);
    }
  };

  return (
    <CatImageContext.Provider
      value={{ images, selectedImage, setSelectedImage, fetchImages }}
    >
      {children}
    </CatImageContext.Provider>
  );
};
