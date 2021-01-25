import { createSlice } from "@reduxjs/toolkit";

const listSlice = createSlice({
  name: "list",
  initialState: {
    list: [
      {
        id: "1",
        img: "",
        description: "",
        price: "",
      },
      {
        id: "2",
        img: "",
        description: "",
        price: "",
      },
      {
        id: "3",
        img: "",
        description: "",
        price: "",
      },
      {
        id: "4",
        img: "",
        description: "",
        price: "",
      },
    ],
    item: 0
  },
  reducers: {
    addToCart(state, action) {
      state.item += 1
    },
  },
});

export const { addToCart } = listSlice.actions;
export default listSlice.reducer;

export const selectItme = (state) => state.list.item;
