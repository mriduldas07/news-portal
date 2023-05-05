import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllUser } from "./userAPI";

const initialState = {
  user: [],
  isLoading: false,
  isError: false,
  error: "",
};

export const fetchUser = createAsyncThunk("user/fetchUser", async () => {
  const user = await getAllUser();
  return user;
});

//slice

const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.user = action.payload;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.user = [];
        state.error = action.error?.message;
      });
  },
});

export default userSlice.reducer;
