import { createSlice } from '@reduxjs/toolkit';

export const moneySlice = createSlice({
    name: 'money',
    initialState: {
        amount: '100,000,000,000',
    },
    reducers: {
        calculateMoney: (state, action) => {
            state.amount = state.amount - action.payload;
        },
    },
});

export const { calculateMoney } = moneySlice.actions;

export default moneySlice.reducer;
