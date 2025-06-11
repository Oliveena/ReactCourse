import React from 'react';
import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const BreedContext = createContext();

export const BreedProvider = ({ children }) => {
    // all of the breeds in the dropdown
  const [breeds, setBreeds] = useState([]);
    // the breed clicked by user
  const [selectedBreed, setSelectedBreed] = useState(null);

  // async fetching breeds from API
   const fetchBreeds = async () => {
    const res = await axios.get("https://api.thecatapi.com/v1/breeds");
    setBreeds(res.data);
  };

  // getting breeds ONLY onclick
  useEffect(() => {
    fetchBreeds();
  }, []);

  return (
    <BreedContext.Provider
      value={{
        breeds,
        selectedBreed,
        setSelectedBreed
      }}
    >
      {children}
    </BreedContext.Provider>
  );
};


