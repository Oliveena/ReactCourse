import React, { useState } from 'react';

function tryToConvert(currency, convertFn) {
  const input = parseFloat(currency);
  if (isNaN(input)) return "";
  const output = convertFn(input);
  return Math.round(output * 100) / 100;
}

function toUsd(euro) {
  return euro * 1.08;
}

function toEuro(usd) {
  return usd / 1.08;
}

const CorrectedCurrencyInput = ({ label, currency, onCurrencyChange }) => {
  return (
    <div>
      <label>{label}</label>
      <input
        type="number"
        value={currency}
        onChange={(e) => onCurrencyChange(e.target.value)}
      />
    </div>
  );
};

export default function CorrectedCurrencyConverter() {
  const [currency, setCurrency] = useState("");
  const [scale, setScale] = useState("usd");

  const handleUSDChange = (cur) => {
    setCurrency(cur);
    setScale("usd");
  };

  const handleEuroChange = (cur) => {
    setCurrency(cur);
    setScale("euro");
  };

  const usd = scale === "euro" ? tryToConvert(currency, toUsd) : currency;
  const euro = scale === "usd" ? tryToConvert(currency, toEuro) : currency;

  return (
    <div>
      <h2>Currency Converter</h2>
      <CorrectedCurrencyInput
        label="USD"
        currency={usd}
        onCurrencyChange={handleUSDChange}
      />
      <CorrectedCurrencyInput
        label="Euro"
        currency={euro}
        onCurrencyChange={handleEuroChange}
      />
    </div>
  );
}
