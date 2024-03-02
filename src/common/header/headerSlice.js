import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import headerAPI from "./headerAPI";

export const fetchHotSearchList = createAsyncThunk(
  "header/fetchHotSearchList",
  async (_, thunkAPI) => {
    const { page, limit } = thunkAPI.getState().header;
    const hotSearchList = await headerAPI.fetchHotSearchList(page, limit);
    return hotSearchList.data;
  }
);

export const headerSlice = createSlice({
  name: "header",
  initialState: {
    focused: false,
    mouseIn: false,
    page: 1,
    limit: 10,
    total: 0,
    hotSearchList: [],
    articles: [],
  },
  reducers: {
    focus: (state) => {
      state.focused = true;
    },
    blur: (state) => {
      state.focused = false;
    },
    mouseEnter: (state) => {
      state.mouseIn = true;
    },
    mouseLeave: (state) => {
      state.mouseIn = false;
    },
    switchTrends: (state) => {
      state.page =
        Math.ceil(state.total / state.limit) > state.page ? state.page + 1 : 1;
    },
    setArticles: (state, action) => {
      state.articles = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchHotSearchList.fulfilled, (state, action) => {
        state.hotSearchList = action.payload.records;
        state.total = action.payload.total;
      })
      .addCase(fetchHotSearchList.rejected, (state, action) => {
        state.hotSearchList = [];
      });
  },
});

export const {
  focus,
  blur,
  switchTrends,
  mouseEnter,
  mouseLeave,
  setArticles,
} = headerSlice.actions;

export default headerSlice.reducer;
