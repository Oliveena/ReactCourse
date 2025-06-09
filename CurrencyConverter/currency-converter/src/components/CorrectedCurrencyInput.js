import React from "react";
import CurrencyInput from "./CurrencyInput";

const CorrectedCurrencyInput = ({label, currency, onCurrencyChange})=>  {
    return (<div>
        <label>{label}</label>
        <input type="number" value={currency} onChange = {(e) => onCurrencyChange(e.target.value)}/>
    </div>);
};

export default CorrectedCurrencyInput;