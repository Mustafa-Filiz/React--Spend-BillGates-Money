import React from 'react';
import { useSelector } from 'react-redux';

function MoneyContainer() {
    const money = useSelector((state) => state.money.amount);
    return (
        <div className="money-container">
            <p>${money}</p>
        </div>
    );
}

export default MoneyContainer;
