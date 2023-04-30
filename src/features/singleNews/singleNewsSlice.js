import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getSingleNews } from "./singleNewsAPI";

const initialState = {
  singleNews: {},
  isLoading: false,
  isError: false,
  error: "",
};

// thunk middlewares
export const fetchSingleNews = createAsyncThunk(
  "singleNews/fetchSingleNews",
  async (id) => {
    const singleNews = await getSingleNews(id);
    return singleNews;
  }
);

// slice

const singleNewsSlice = createSlice({
  name: "singleNewsSlice",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchSingleNews.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchSingleNews.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.singleNews = action.payload;
      })
      .addCase(fetchSingleNews.rejected, (state, action) => {
        state.isLoading = false;
        state.singleNews = {};
        state.isError = true;
        state.error = action.error?.message;
      });
  },
});

export default singleNewsSlice.reducer;
