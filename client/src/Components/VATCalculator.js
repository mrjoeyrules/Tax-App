import { useState } from "react";

function VATCalculator() {
    const [price, setPrice] = useState(0);
    const vatRate = 0.2; // 20% VAT
    const vatAmount = price * vatRate;


  return (
    <div className="VATCalculator">
      <h2>VAT Calculator</h2>
      <p>Calculate VAT on your purchases</p>
      <input
        type="number"
        value={price}
        onChange={(e) => setPrice(parseFloat(e.target.value))}
        placeholder="Enter Item Price"
        />
        <p>VAT (20%): £{vatAmount.toFixed(2)}</p>
    </div>
  );
}

export default VATCalculator;