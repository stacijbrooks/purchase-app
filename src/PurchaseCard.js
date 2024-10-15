import React from "react";

function PurchaseCard({ id, total, date, points }) {
    return (
      <div className="purchase-card">
        <h3>Transaction ID: {id}</h3>
        <p>Total: ${total}</p>
        <p>Date: {date}</p>
        <p>Reward Points: {points}</p> {/* Display reward points */}
      </div>
    );
  }
  
  export default PurchaseCard;