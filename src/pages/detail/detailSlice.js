import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import articleAPI from "../home/api/article";

export const fetchArticle = createAsyncThunk(
  "detail/fetchArticle",
  async (id, thunkAPI) => {
    const res = await articleAPI.fetchArticle(id);
    return res.data;
  }
);

export const detailSlice = createSlice({
  name: "detail",
  initialState: {
    article: {},
  },
  reducers: {
    increment: (state, action) => {
      state.article = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchArticle.fulfilled, (state, action) => {
      state.article = action.payload;
    });
  },
});

export const { increment } = detailSlice.actions;

export default detailSlice.reducer;
