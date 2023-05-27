import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addNews, deleteNews, getAllNews, updateNews } from "./newsAPI";

const initialState = {
  news: [],
  isLoading: false,
  isError: false,
  error: "",
  editing: {},
};

export const fetchNews = createAsyncThunk("news/fetchNews", async () => {
  const news = await getAllNews();
  return news;
});

export const createNews = createAsyncThunk("news/createNews", async (data) => {
  const news = await addNews(data);
  return news;
});

export const changeNews = createAsyncThunk(
  "news/changeNews",
  async ({ id, data }) => {
    const news = await updateNews(id, data);
    return news;
  }
);

export const removeNews = createAsyncThunk("news/removeNews", async (id) => {
  const news = await deleteNews(id);
  return news;
});

// slice

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    editActive: (state, action) => {
      state.editing = action.payload;
    },
    editInActive: (state) => {
      state.editing = {};
    },
  },
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
      })
      .addCase(changeNews.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(changeNews.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;

        const newsIndex = state.news.findIndex(
          (f) => f.id === action.payload.id
        );

        state.news[newsIndex] = action.payload;
      })
      .addCase(changeNews.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error?.message;
      })
      .addCase(removeNews.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(removeNews.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;

        state.news = state.news.filter((f) => f.id !== action.meta.arg);
      })
      .addCase(removeNews.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error?.message;
      });
  },
});

export default newsSlice.reducer;
export const { editActive, editInActive } = newsSlice.actions;
