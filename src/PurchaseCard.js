import React from "react";

function PurchaseCard({ id, total, date }) {
    return (
      <div className="purchase-card">
        <h3>Transaction ID: {id}</h3>
        <p>Total: ${total}</p>
        <p>Date: {date}</p>
      </div>
    );
  }
  
  export default PurchaseCard;