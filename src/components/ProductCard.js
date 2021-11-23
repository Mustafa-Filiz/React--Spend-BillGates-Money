import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { calculateMoney } from '../redux/moneySlice';

function ProductCard({ item }) {
	const dispatch = useDispatch() 
    const [amount, setAmount] = useState(0)
	const [total, setTotal] = useState(0)

	// useEffect(()=> {
	// 	dispatch(calculateMoney(amount.))
	// }, [])

	const calculation = ({price}) => {
		
	}



    return (
        <div className="product-card">
            <img src={item.img} alt={item.title} />
            <h5>{item.title}</h5>
            <p>${item.price}</p>
            <div className="button-container">
                <button
                    className="btn"
                    onClick={() => setAmount(Number(amount) - 1)}
                    disabled={amount === 0}
                >
                    Sell
                </button>
                <input
                    type="text"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                />
                <button className="btn" onClick={() => setAmount(Number(amount) + 1)}>
                    Buy
                </button>
            </div>
        </div>
    );
}

export default ProductCard;
