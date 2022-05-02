import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  buyProduct,
  sellProduct,
  addItem,
  removeItem,
} from "../redux/moneySlice";

function ProductCard({ item }) {
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(0);
  const money = useSelector((state) => state.money.amount);

  const buyItem = async (price, title) => {
    setAmount(Number(amount) + 1);
    dispatch(buyProduct(price));
    dispatch(addItem({ name: title, amount: amount + 1, price: price }));
  };

  const sellItem = (price, title) => {
    setAmount(Number(amount) - 1);
    dispatch(sellProduct(price));
    dispatch(removeItem({ name: title, amount: amount - 1, price: price }));
  };

  const buyAndSellItem = (value, price, title) => {
    if (amount > value) {
      dispatch(sellProduct((amount - value) * price));
      dispatch(removeItem({ name: title, amount: value, price: price }));
    }
    if (amount < value) {
      dispatch(buyProduct((value - amount) * price));
      dispatch(addItem({ name: title, amount: value, price: price }));
    }
    setAmount(value);
  };

  return (
    <div className="product-card">
      <img src={item.img} alt={item.title} />
      <h5>{item.title}</h5>
      <p>${item.price}</p>
      <div className="button-container">
        <button
          className={"btn sell"}
          onClick={() => sellItem(item.price, item.title)}
          disabled={amount === 0}
        >
          Sell
        </button>
        <input
          type="text"
          value={amount}
          onChange={(e) =>
            buyAndSellItem(Number(e.target.value), item.price, item.title)
          }
          disabled={money <= 0 || item.price > money}
        />
        <button
          className={"btn buy"}
          onClick={() => buyItem(item.price, item.title)}
        >
          Buy
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
