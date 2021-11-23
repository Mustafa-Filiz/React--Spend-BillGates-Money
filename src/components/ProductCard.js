import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { buyProduct, sellProduct } from '../redux/moneySlice';

function ProductCard({ item }) {
    const dispatch = useDispatch();
    const [amount, setAmount] = useState(0);
    const [total, setTotal] = useState(0);

    const buyItem = (price) => {
        setAmount(Number(amount) + 1);
        dispatch(buyProduct(price))
    };

    const sellItem = (price) => {
        setAmount(Number(amount) - 1)
        dispatch(sellProduct(price))
    }

    const buyCountedItem = (amount, price) => {
        dispatch(buyProduct(amount * price))
    }

    return (
        <div className="product-card">
            <img src={item.img} alt={item.title} />
            <h5>{item.title}</h5>
            <p>${item.price}</p>
            <div className="button-container">
                <button
                    className="btn"
                    onClick={() => sellItem(item.price)}
                    disabled={amount === 0}
                >
                    Sell
                </button>
                <input
                    type="text"
                    value={amount}
                    onChange={(e) => buyCountedItem(e.target.value, item.price)}
                />
                <button
                    className="btn"
                    onClick={() => buyItem(item.price)}
                >
                    Buy
                </button>
            </div>
        </div>
    );
}

export default ProductCard;
