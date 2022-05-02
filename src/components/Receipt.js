import React from "react";
import { useSelector } from "react-redux";

function Receipt() {
  const items = useSelector((state) => state.money.boughtItems);
  const amount = useSelector((state) => state.money.amount);
  return (
    <div className="receipt">
      <div>
        <h2>Your Receipt</h2>
        {items.map((item, index) => (
          <div className="receiptItem" key={index}>
            <div>{item.name}</div>
            <div>x{item.amount}</div>
            <div className="dolar">${item.amount * item.price}</div>
          </div>
        ))}
        <hr />
        <div className="total">
          <p>TOTAL</p>
          <p className="dolar">{amount}</p>
        </div>
      </div>
    </div>
  );
}

export default Receipt;
