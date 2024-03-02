import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import topicAPI from "./api/topic";
import articleAPI from "./api/article";
import recommendAPI from "./api/recommend";
import writerAPI from "./api/writer";

export const fetchTopicList = createAsyncThunk(
  "home/fetchTopicList",
  async () => {
    const res = await topicAPI.fetchTopicList();
    return res.data;
  }
);

export const fetchArticleList = createAsyncThunk(
  "home/fetchArticleList",
  async (_, thunkAPI) => {
    const { page } = thunkAPI.getState().home;
    const res = await articleAPI.fetchArticleList(page);
    return res.data;
  }
);

export const fetchRecommendList = createAsyncThunk(
  "home/fetchRecommendList",
  async () => {
    const res = await recommendAPI.fetchRecommendList();
    return res.data;
  }
);

export const fetchWriterList = createAsyncThunk(
  "home/fetchWriterList",
  async (_, thunkAPI) => {
    const { writerPage, writerLimit } = thunkAPI.getState().home;
    const res = await writerAPI.fetchWriterList(writerPage, writerLimit);
    return res.data;
  }
);

export const followWriter = createAsyncThunk(
  "home/followWriter",
  async (id) => {
    const res = await writerAPI.followWriter(id);
    return res.data;
  }
);

export const homeSlice = createSlice({
  name: "home",
  initialState: {
    topicList: [],
    articleList: [],
    recommendList: [],
    writerList: [],
    page: 1,
    isLoading: false,
    showScroll: false,
    showMore: true,
    writerPage: 1,
    writerLimit: 4,
    writerTotal: 0,
    writerArticles: [],
  },
  reducers: {
    increment: (state, action) => {
      state.page = state.page + 1;
    },
    toggleTopShow: (state, action) => {
      state.showScroll = action.payload;
    },
    clearArticleList: (state) => {
      state.articleList = [];
    },
    setArticleList: (state, action) => {
      state.articleList = action.payload;
    },
    switchWriters: (state) => {
      state.writerPage =
        Math.ceil(state.writerTotal / state.writerLimit) > state.writerPage
          ? state.writerPage + 1
          : 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTopicList.fulfilled, (state, action) => {
        state.topicList = action.payload;
      })
      .addCase(fetchTopicList.rejected, (state, action) => {
        state.topicList = [];
      })
      .addCase(fetchArticleList.fulfilled, (state, action) => {
        if (action.payload.length === 0) {
          state.showMore = false;
        }
        state.articleList = state.articleList.concat(action.payload);
      })
      .addCase(fetchArticleList.rejected, (state, action) => {
        state.articleList = [];
      })
      .addCase(fetchRecommendList.fulfilled, (state, action) => {
        state.recommendList = action.payload;
      })
      .addCase(fetchWriterList.fulfilled, (state, action) => {
        state.writerList = action.payload.records;
        state.writerTotal = action.payload.total;
      });
  },
});

export const {
  increment,
  toggleTopShow,
  clearArticleList,
  setArticleList,
  switchWriters,
} = homeSlice.actions;

export default homeSlice.reducer;
