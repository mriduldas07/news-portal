import { createSlice } from "@reduxjs/toolkit";

// initialState
const initialState = {
  category: "",
};

// filter for category Slice
const filterSlice = createSlice({
  name: "filterSlice",
  initialState,
  reducers: {
    categorySelected: (state, action) => {
      state.category = action.payload;
    },
  },
});

export default filterSlice.reducer;
export const { categorySelected } = filterSlice.actions;
