import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { buyProduct, sellProduct } from '../redux/moneySlice';

function ProductCard({ item }) {
    const dispatch = useDispatch();
    const [amount, setAmount] = useState(0);
    const money = useSelector((state) => state.money.amount);

    const buyItem = (price) => {
        setAmount(Number(amount) + 1);
        dispatch(buyProduct(price));
    };

    const sellItem = (price) => {
        setAmount(Number(amount) - 1);
        dispatch(sellProduct(price));
    };

    const buyAndSellItem = (value, price) => {
        if (amount > value) {
            dispatch(sellProduct((amount - value) * price));
        }
        if (amount < value) {
            dispatch(buyProduct((value - amount) * price));
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
                    className={amount === 0 ? 'btn' : 'btn sell'}
                    onClick={() => sellItem(item.price)}
                    disabled={amount === 0}
                >
                    Sell
                </button>
                <input
                    type="text"
                    value={amount}
                    onChange={(e) =>
                        buyAndSellItem(Number(e.target.value), item.price)
                    }
                    disabled={money <= 0 || item.price > money}
                />
                <button
                    className={item.price > money ? 'btn' : 'btn buy'}
                    onClick={() => buyItem(item.price)}
                    disabled={item.price > money}
                >
                    Buy
                </button>
            </div>
        </div>
    );
}

export default ProductCard;
