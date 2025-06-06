export default function CurrencyInput({ currency, value, onChange }) {
  
    return (
    <div style={{ marginBottom: "1vw" }}>
      <label>
        {/* name of the currency */}
        {currency}:
        {/* field for input/output */}
        <input
          type="number"
          value={isNaN(value) ? "" : value}
          onChange={(e) => onChange(e.target.value)}
          style={{ marginLeft: "1vw" }}
        />
      </label>
    </div>
  );
}
