import { configureStore } from "@reduxjs/toolkit";
import newsReducer from "../features/news/newsSlice";
import singleNewsReducer from "../features/singleNews/singleNewsSlice";
import filterReducer from "../features/filter/filterSlice";

export const store = configureStore({
  reducer: {
    news: newsReducer,
    singleNews: singleNewsReducer,
    filter: filterReducer,
  },
});
