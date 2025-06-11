import { createContext, useState, useEffect, Children } from 'react';
import axios from 'axios';

export const CatImageContext = createContext();

export const CatImageProvider = ({children}) => {
      // all of the images of the breed
  const [images, setImages] = useState([]);
    // the image selected by user
  const [selectedImage, setSelectedImage] = useState(null);
}

// async fetching images from API
   const fetchImages = async () => {
    const res = await axios.get("https://api.thecatapi.com/v1/images/search?breed_ids=BREED_ID&limit=6");
    setImages(res.data);
  };

  useEffect(() => {
      fetchImages();
    }, []);
  
    return (
      <CatImageContext.CatImageProvider
        value={{
          images,
          selectedImage,
          setSelectedImage
        }}
      >
        {children}
      </CatImageContext.CatImageProvider>
    );

