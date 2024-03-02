import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import articleAPI from "../home/api/article";

export const add = createAsyncThunk("write/add", async (payload, thunkAPI) => {
  const res = await articleAPI.addArticle(payload);
  return res.data;
});

export const writeSlice = createSlice({
  name: "write",
  initialState: {
    submit: false,
    id: null,
  },
  reducers: {
    finish: (state, action) => {
      state.submit = false;
      state.id = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(add.fulfilled, (state, action) => {
      state.submit = true;
      state.id = action.payload;
    });
  },
});

export const { finish } = writeSlice.actions;

export default writeSlice.reducer;
