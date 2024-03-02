import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import searchAPI from "./api/search";
import writerAPI from "../home/api/writer";

export const fetchSearchResult = createAsyncThunk(
  "search/fetchSearchResult",
  async (keyword, thunkAPI) => {
    const searchResult = await searchAPI.fetchSearchResult(keyword);
    return searchResult.data;
  }
);

export const fectchWriterArticleList = createAsyncThunk(
  "search/fetchWriterArticleList",
  async (id) => {
    const res = await writerAPI.fetchWriterArticleList(id);
    return res.data;
  }
);

const searchSlice = createSlice({
  name: "search",
  initialState: {
    searchResult: [],
  },
  reducers: {
    switchPage: (state, action) => {
      state.page = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSearchResult.fulfilled, (state, action) => {
      state.searchResult = action.payload;
    });
    builder.addCase(fectchWriterArticleList.fulfilled, (state, action) => {
      state.searchResult = action.payload;
    });
  },
});

export const { switchPage } = searchSlice.actions;

export default searchSlice.reducer;
