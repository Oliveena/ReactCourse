import { useState } from "react";

export default function CounterSyncExercice() { 
    // a shared click-counter between two buttons 
    // one parent takes control of two components 

    const [counter, setCounter] = useState(0); 

    function increment() {
        setCounter (counter + 1);
    }

    return <div>
        <p>Shared value: {counter}</p>
        <button onClick={increment}>Click me</button>
        <button onClick={increment}>Click me too</button>
    </div>
}