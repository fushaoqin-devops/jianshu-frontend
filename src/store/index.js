import { configureStore } from "@reduxjs/toolkit";
import headerReducer from "../common/header/headerSlice";
import homeReducer from "../pages/home/homeSlice";
import detailReducer from "../pages/detail/detailSlice";
import authReducer from "../pages/auth/authSlice";
import writeReducer from "../pages/write/writeSlice";
import searchReducer from "../pages/search/searchSlice";

export default configureStore({
  reducer: {
    header: headerReducer,
    home: homeReducer,
    detail: detailReducer,
    auth: authReducer,
    write: writeReducer,
    search: searchReducer,
  },
});
