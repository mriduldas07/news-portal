import { configureStore } from "@reduxjs/toolkit";
import newsReducer from "../features/news/newsSlice";
import singleNewsReducer from "../features/singleNews/singleNewsSlice";
import filterReducer from "../features/filter/filterSlice";
import userReducer from "../features/user/userSlice";
import saveReducer from "../features/save/saveSlice";

export const store = configureStore({
  reducer: {
    news: newsReducer,
    singleNews: singleNewsReducer,
    filter: filterReducer,
    user: userReducer,
    save: saveReducer,
  },
});
