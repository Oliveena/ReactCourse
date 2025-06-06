import { useState } from "react";
import CurrencyInput from "./CurrencyInput";

// i want three currencies
const exchangeRates = {
  CAD: 1.35,
  EUR: 0.92,
  YEN: 155.58,  
};

export default function CurrencyCalculator() {

// defining useState for 1) amount 2) currency type
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("CAD");

// cpnversion logiv
  const toBase = (value, fromCurrency) => {
    const parsed = parseFloat(value);
    if (Number.isNaN(parsed)) return 0;
    return parsed / exchangeRates[fromCurrency];
  };

  const fromBase = (value, toCurrency) => value * exchangeRates[toCurrency];

  const baseAmount = toBase(amount, currency);

  // handling input
  const handleChange = (newAmount, newCurrency) => {
    setAmount(newAmount);
    setCurrency(newCurrency);
  };

  /// UI
  return (
    <div>
      <h2>Currency Converter</h2>
      {/* map of currency and its echange rate  */}
      {Object.keys(exchangeRates).map((curr) => (
        <CurrencyInput
          key={curr}
          currency={curr}
          value={
            curr === currency
              ? amount 
              : Math.round(fromBase(baseAmount, curr) * 100) / 100
          }
          onChange={(val) => handleChange(val, curr)}
        />
      ))}
    </div>
  );
}
