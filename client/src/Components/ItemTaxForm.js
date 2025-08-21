import { useState } from "react";

function ItemTaxForm() {
  const [itemName, setItemName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState(0);
  const [sugarContent, setSugarContent] = useState(0); // grams per 100ml

  const [volume, setVolume] = useState(0); // in ml, for sugar tax calculation

  const vatRate = 0.2;
  const basePrice = price / (1 + vatRate);
  const vatAmount = price - basePrice;

  // Sugar tax logic
  let sugarTax = 0;

  const volumeLitres = volume / 1000; // convert ml to litres

  if (category === "Soft Drink") {
    if (sugarContent >= 5 && sugarContent < 8) {
      sugarTax = volumeLitres* 0.18; // 18p per litre
    } else if (sugarContent >= 8) {
      sugarTax = volumeLitres * 0.24; // 24p per litre
    }
  }

  const totalTax = vatAmount + sugarTax;

  return (
    <div className="ItemTaxForm">
      <h2>Item Tax Calculator</h2>

      <label>
        Item Name:
        <input
          type="text"
          placeholder="e.g. Coca-Cola"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
        />
      </label>

      <label>
        Category:
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Select Category</option>
          <option value="Soft Drink">Soft Drink</option>
          <option value="Food">Food</option>
          <option value="Electronics">Electronics</option>
          <option value="Alcohol">Alcohol</option>
          <option value="Tobacco">Tobacco</option>
        </select>
      </label>

        <div className="input-group">
            <label>Price (with VAT included):</label>
            <div className="input-row">
                <span className="input-unit">£</span>
                <input
                type="number"
                placeholder="e.g. 1.50"
                value={price}
                onChange={(e) => setPrice(parseFloat(e.target.value))}
                />
            </div>
        </div>


      {category === "Soft Drink" && (
        <>
        <div className="input-group">
            <label>Sugar Content (grams per 100ml):</label>
            <div className="input-row">
                <span className="input-unit">g/100ml</span>
                <input
                type="number"
                placeholder="e.g. 10"
                value={sugarContent}
                onChange={(e) => setSugarContent(parseFloat(e.target.value))}
                />
            </div>
            </div>

            <div className="input-group">
            <label>Drink Volume (ml):</label>
            <div className="input-row">
                <span className="input-unit">ml</span>
                <input
                type="number"
                placeholder="e.g. 330"
                value={volume}
                onChange={(e) => setVolume(parseFloat(e.target.value))}
                />
            </div>
            </div>

        </>
        
      )}

      <hr />
      <p>Base Price (before VAT): £{basePrice.toFixed(2)}</p>
      <p>VAT (20%): £{vatAmount.toFixed(2)}</p>
      {category === "Soft Drink" && <p>Sugar Tax: £{sugarTax.toFixed(2)}</p>}
      <p><strong>Total Tax: £{totalTax.toFixed(2)}</strong></p>
      <p><strong>Total Price Paid: £{price.toFixed(2)}</strong></p>
    </div>
  );
}

export default ItemTaxForm;
