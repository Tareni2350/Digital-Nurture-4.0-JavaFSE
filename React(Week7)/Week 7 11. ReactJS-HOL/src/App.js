import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(5);
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("");

  const handleIncrement = () => setCount(count + 1);
  const handleDecrement = () => setCount(count - 1);

  const handleWelcome = () => {
    alert("Hello! Member1");
  };

  const handleSayWelcome = () => {
    alert("welcome");
  };

  const handleClickOnMe = () => {
    alert("I was clicked");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let result = 0;
    if (currency.toLowerCase() === "euro") {
      result = Number(amount) * 80;
      alert(`Converting to  Euro Amount is ${result}`);
    } else {
      alert("Select Euro as currency for conversion!");
    }
  };

  return (
    <div style={{ margin: "30px" }}>
      <div>{count}</div>
      <div>
        <button onClick={handleIncrement}>Increment</button>
        <br />
        <button onClick={handleDecrement}>Decrement</button>
        <br />
        <button onClick={handleWelcome}>Say welcome</button>
        <br />
        <button onClick={handleClickOnMe}>Click on me</button>
      </div>
      <h1 style={{ color: "green" }}>Currency Convertor!!!</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Amount:</label>
          <br />
          <input
            type="text"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <div>
          <label>Currency:</label>
          <br />
          <input
            type="text"
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
          />
        </div>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
