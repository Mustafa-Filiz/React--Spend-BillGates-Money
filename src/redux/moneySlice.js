import { createSlice } from '@reduxjs/toolkit';

export const moneySlice = createSlice({
    name: 'money',
    initialState: {
        amount: "100,000,000,000",
    },
    reducers: {},
});

export default moneySlice.reducer;
