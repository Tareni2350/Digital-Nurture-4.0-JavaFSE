import React from 'react';
import './App.css';
import sr from './office.jpg'; 

function App() {
  const element = "Office Space";
  const jsxatt = <img src={sr} width="25%" height="25%" alt="Office Space" />;

  const ItemName = { Name: "DBS", Rent: 50000, Address: 'Chennai' };

  const rentStyle = {
    color: ItemName.Rent < 60000 ? 'red' : 'green'
  };

  return (
    <div className="App">
      <h1>{element} , at Affordable Range</h1>
      {jsxatt}
      <h1>Name: {ItemName.Name}</h1>
      <h3 style={rentStyle}>Rent: Rs. {ItemName.Rent}</h3>
      <h3>Address: {ItemName.Address}</h3>
    </div>
  );
}

export default App;
