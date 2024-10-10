import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import PurchaseCard from './PurchaseCard';
import React from 'react';
import data from './data.json';


function App() {
  //define state to store the purchase data
  const [purchases, setPurchases] = useState(data); //useState([]);


  //useEffect to fetch the data when component mounts
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/data.json');
      const data = await response.json();
      setPurchases(data);
    };

    fetchData(); //you have to call fetchData
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Purchases</h1>
        <div className="purchases-container">
          {purchases.map((purchase) => (
            <PurchaseCard
              key={purchase.id}
              id={purchase.id}
              total={purchase.total}
              date={purchase.date}
            />
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
