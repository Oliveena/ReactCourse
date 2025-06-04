import React, { useState } from 'react';

export default function ShowHide() {

    // this throws an error for some reason 
    //const [message, setMessage] = React.useState;

     // 1. Is the message currently visible?
    const [isMessageDisplayed, setIsMessageDisplayed] = useState(false);

    // 2. Change it to opposite state onClick   
    function handleClick() {
        // if state is clicked=> display message, 
        //if message displayed, hide message 
        setIsMessageDisplayed(!isMessageDisplayed);

    }

    // 3. What does the user see? 
    return  <div>
        <button onClick={handleClick}>Click me</button>
        {isMessageDisplayed && <p>You have clicked the button!</p>}
    </div>
}