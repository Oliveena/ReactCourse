

export default function TemperatureInput({ label, temperature, onTemperatureChange }) {

    // we call onTemperatureChange from the CHILD to the PARENT (lifting State up)

    const handleInputChange = (e) => {
        // we need to lift the state UP to the parent (Calculator.js)
        onTemperatureChange(e.target.value);
    }

    return (
        <div>
            <label>
                {label}
            </label>
            <input type="number" value={temperature} 
            ///another way    onChange={handleInputChange} 
            onChange= {(e) => onTemperatureChange(e.target.value)}>
            </input>
        </div>
    )
}