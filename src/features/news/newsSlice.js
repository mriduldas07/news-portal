import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addNews, getAllNews } from "./newsAPI";

const initialState = {
  news: [],
  isLoading: false,
  isError: false,
  error: "",
};

export const fetchNews = createAsyncThunk("news/fetchNews", async () => {
  const news = await getAllNews();
  return news;
});

export const createNews = createAsyncThunk("news/createNews", async (data) => {
  const news = await addNews(data);
  return news;
});

// slice

const newsSlice = createSlice({
  name: "news",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.news = action.payload;
      })
      .addCase(fetchNews.rejected, (state, action) => {
        state.isLoading = false;
        state.news = [];
        state.isError = true;
        state.error = action.error?.message;
      })
      .addCase(createNews.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(createNews.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.news.push(action.payload);
      })
      .addCase(createNews.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error?.message;
      });
  },
});

export default newsSlice.reducer;
