import { useState } from "react";
import Boiling from "./Boiling";
import TemperatureInput from "./TemperatureInput";

export default function Calculator() {

    // Algorithm:
    // If Celcius provided, convert to Fahrenheit
    // and vice versa

    // if equivalent to 0 or below Celcius, display "water freezes"
    // if equivalent to 100 or above Celcius, display "water boils"

    const [temperature, setTemperature] = useState("");
    const [scale, setScale] = useState("C");

    const celcius = scale === "F" ? tryToConvert (temperature, toCelcius) : temperature;
    const fahrenheit = scale ==="C" ? tryToConvert (temperature, toFahrenheit) : temperature;

    const handleFahrenheitChange = (temp) => {
        setTemperature(temp)
        setScale("F");
    }

    const handleCelciusChange = (temp) => {
        setTemperature(temp)
        setScale("C");
    }

    function tryToConvert (temperature, convertFn) {
        const input = parseFloat(temperature);
        if(Number.isNaN(input)) return "";
        const output = convertFn(input);
        return Math.round(output * 100) / 100;
    }

    function toCelcius(fahrenheit) {
        return ((fahrenheit - 32) * 5) / 9;
    };

    function toFahrenheit(celcius) {
        return (celcius * 9) /5 + 32;
    };



// no onChange here, it will go inside the input component (TemperatureInput.js)
    return (<div>
        <h2>
            Temperature Converter
        </h2>
        <TemperatureInput label="Celcius" temperature={celcius} onTemperatureChange={handleCelciusChange}/>
        <TemperatureInput label="Fahrenheit" temperature={fahrenheit} onTemperatureChange={handleFahrenheitChange}/>
        <Boiling celcius={parseFloat(celcius)}></Boiling>
    </div>)
}