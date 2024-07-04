import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "../features/category/categorySlice";
import filterReducer from "../features/filter/filterSlice";
import newsReducer from "../features/news/newsSlice";

import newsForReadersReducer from "../features/newsForReaders/newsForReadersSlice";
import saveReducer from "../features/save/saveSlice";
import singleNewsReducer from "../features/singleNews/singleNewsSlice";
import userReducer from "../features/user/userSlice";

export const store = configureStore({
  reducer: {
    news: newsReducer,
    category: categoryReducer,
    singleNews: singleNewsReducer,
    filter: filterReducer,
    user: userReducer,
    save: saveReducer,
    myNews: newsForReadersReducer,
  },
});
