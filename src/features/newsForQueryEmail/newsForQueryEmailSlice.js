import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getNewsForEmail } from "./newsForQueryEmailAPI";

const initialState = {
  news: [],
  isLoading: false,
  isError: false,
  error: "",
};

export const fetchNewsForEmail = createAsyncThunk(
  "newsForQueryEmail/fetchNewsForEmail",
  async (email) => {
    const news = await getNewsForEmail(email);
    return news;
  }
);

const newsForQueryEmailSlice = createSlice({
  name: "newsForQuerySlice",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchNewsForEmail.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchNewsForEmail.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.news = action.payload;
      })
      .addCase(fetchNewsForEmail.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.news = [];
        state.error = action?.error.message;
      });
  },
});

export default newsForQueryEmailSlice.reducer;
