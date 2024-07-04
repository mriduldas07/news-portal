import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getNewsForReaders } from "./newsForReadersAPI";

const initialState = {
  news: [],
  isLoading: false,
  isError: false,
  error: "",
};

export const fetchNewsForReader = createAsyncThunk(
  "newsForReader/fetchNewsForReader",
  async () => {
    const news = await getNewsForReaders();
    return news;
  }
);

const newsForReaderSlice = createSlice({
  name: "newsForQuerySlice",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchNewsForReader.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchNewsForReader.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.news = action.payload;
      })
      .addCase(fetchNewsForReader.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.news = [];
        state.error = action?.error.message;
      });
  },
});

export default newsForReaderSlice.reducer;
