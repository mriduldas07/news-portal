import { configureStore } from "@reduxjs/toolkit";
import newsReducer from "../features/news/newsSlice";
import singleNewsReducer from "../features/singleNews/singleNewsSlice";

export const store = configureStore({
  reducer: {
    news: newsReducer,
    singleNews: singleNewsReducer,
  },
});
