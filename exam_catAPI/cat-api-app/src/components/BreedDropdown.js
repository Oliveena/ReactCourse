/* tutorial for Bootstrap dropdown in React: 
https://react-bootstrap.netlify.app/docs/components/dropdowns/ */

import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { createContext, useState } from "react";
import axios from "axios";


export default function BreedDropdown() {

    // what is the API for getting cat breeds
    const CAT_URL = "https://api.thecatapi.com/v1/breeds";

    // what happens on button click? dropdown unrolls
    const handleClick = () => {

    }

    return(
        <div>
            <DropdownButton onClick={handleClick}/>
            <Dropdown />
        </div>
        
    );
}