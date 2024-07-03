import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllCategories } from "./categoryAPI";

const initialState = {
  categories: [],
  isLoading: false,
  isError: false,
  error: "",
};

export const fetchCategories = createAsyncThunk(
  "category/fetchCategory",
  async () => {
    const categories = await getAllCategories();
    return categories;
  }
);

// export const createNews = createAsyncThunk("news/createNews", async (data) => {
//   const news = await addNews(data);
//   return news;
// });

// export const changeNews = createAsyncThunk(
//   "news/changeNews",
//   async ({ id, data }) => {
//     const news = await updateNews(id, data);
//     return news;
//   }
// );

// export const removeNews = createAsyncThunk("news/removeNews", async (id) => {
//   const news = await deleteNews(id);
//   return news;
// });

// slice

const categorySlice = createSlice({
  name: "category",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.categories = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.isLoading = false;
        state.categories = [];
        state.isError = true;
        state.error = action.error?.message;
      });
  },
});

export default categorySlice.reducer;
// export const { editActive, editInActive } = categorySlice.actions;
