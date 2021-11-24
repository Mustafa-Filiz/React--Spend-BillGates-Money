import { createSlice } from '@reduxjs/toolkit';

export const moneySlice = createSlice({
    name: 'money',
    initialState: {
        amount: 100000000000,
    },
    reducers: {
        buyProduct: (state, action) => {
            state.amount = state.amount - action.payload;
            if(state.amount < 0){
                alert("Bill Gates can't be in debt. Sell something...")
            }
        },
        sellProduct: (state, action) => {
            state.amount = state.amount + action.payload;
        },
    },
});

export const { buyProduct, sellProduct } = moneySlice.actions;

export default moneySlice.reducer;
