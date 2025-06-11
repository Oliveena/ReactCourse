/* tutorial for Bootstrap dropdown in React: 
https://react-bootstrap.netlify.app/docs/components/dropdowns/ */

import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { createContext, useState, useContext } from "react";
import axios from "axios";
import { BreedContext } from '../contexts/BreedContext';
import { CatImageContext } from '../contexts/CatImageContext';

export default function BreedDropdown() {
    // using context for getting the breeds from API
  const { breeds, setSelectedBreed} = useContext(BreedContext);
  // images have a separate context, get them from there
  const { fetchImages } = useContext(CatImageContext);

  // what happens when the user selects a breed fro mdropdown
  const handleSelect = (breedId) => {
    // a breed is selected
    setSelectedBreed(breedId);
    // its associated images are fetched
    fetchImages(breedId);
  };

  return (
    <div>
      <DropdownButton id="dropdown-basic-button" title="Pick A Cat Breed">
        {breeds.map((breed) => (
          <Dropdown.Item key={breed.id} onClick={() => handleSelect(breed.id)}>
            {/* Render cat breed name */}
            {breed.name}
          </Dropdown.Item>
        ))}
      </DropdownButton>
    </div>
  );
}
