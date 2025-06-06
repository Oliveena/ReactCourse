import { useState } from "react";
import IncrementButton from "./IncrementButton";

export default function CounterSyncExercice() { 
    // a shared click-counter between two buttons 
    // one parent takes control of two components 

    const [counter, setCounter] = useState(0); 

    function incrementValue() {
        setCounter (counter + 1);
    }

    return <div>
        <p>Shared incremented value: {counter}</p>
        <IncrementButton label={"Click me"} increment={incrementValue}/>
        <IncrementButton label={"Click me too"} increment={incrementValue}/>
    </div>
}