import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authAPI from "./api/auth";

export const login = createAsyncThunk(
  "auth/login",
  async (payload, thunkAPI) => {
    const res = await authAPI.login(payload);
    return res;
  }
);

export const register = createAsyncThunk(
  "auth/register",
  async (payload, thunkAPI) => {
    const res = await authAPI.register(payload);
    return res;
  }
);

export const verify = createAsyncThunk("auth/verify", async (_, thunkAPI) => {
  const res = await authAPI.verify();
  return res.data;
});

export const logout = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  const res = await authAPI.logout();
  return res;
});

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    login: false,
    register: false,
    toast: null,
    name: null,
  },
  reducers: {
    toggleLogin: (state, action) => {
      state.login = action.payload;
    },
    addToast: (state, action) => {
      state.toast = action.payload;
    },
    removeToast: (state, action) => {
      state.toast = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.login = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.register = true;
      })
      .addCase(verify.fulfilled, (state, action) => {
        state.login = true;
        state.name = action.payload;
      })
      .addCase(verify.rejected, (state, action) => {
        state.login = false;
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.login = false;
        state.name = null;
      });
  },
});

export const { toggleLogin, addToast, removeToast } = authSlice.actions;

export default authSlice.reducer;
