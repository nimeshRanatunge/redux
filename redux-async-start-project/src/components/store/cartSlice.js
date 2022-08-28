import { createSlice } from "@reduxjs/toolkit";

const initialShowState = { isShow: false };
const cartSlice = createSlice({
  name: "cartshow",
  initialState: initialShowState,
  reducers: {
    cartshow(state) {
      state.isShow = !state.isShow;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
