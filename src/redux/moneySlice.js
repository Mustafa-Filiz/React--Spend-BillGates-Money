import { createSlice } from "@reduxjs/toolkit";

export const moneySlice = createSlice({
  name: "money",
  initialState: {
    amount: 100000000000,
    boughtItems: [],
  },
  reducers: {
    buyProduct: (state, action) => {
      state.amount = state.amount - action.payload;
      if (state.amount < 0) {
        alert("Bill Gates can't be in debt. Sell something...");
      }
    },
    sellProduct: (state, action) => {
      state.amount = state.amount + action.payload;
    },
    addItem: (state, action) => {
      let addedItem = state.boughtItems.find(
        (item) => item.name === action.payload.name
      );
      if (addedItem) {
        addedItem.amount = action.payload.amount;
      } else {
        state.boughtItems = [...state.boughtItems, action.payload];
      }
    },
    removeItem: (state, action) => {
      let addedItem = state.boughtItems.find(
        (item) => item.name === action.payload.name
      );
      if (addedItem) {
        addedItem.amount = action.payload.amount;
      }
      if (action.payload.amount === 0) {
        state.boughtItems = [
          ...state.boughtItems.filter((item) => item.amount !== 0),
        ];
      }
    },
  },
});

export const { buyProduct, sellProduct, addItem, removeItem } =
  moneySlice.actions;

export default moneySlice.reducer;
