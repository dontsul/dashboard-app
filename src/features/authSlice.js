import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { instanceAxios } from "../utils/instanceAxios";
import toast from "react-hot-toast";

export const fetchSignup = createAsyncThunk(
  "auth/fetchSignup",
  async ({ email, name, password }, { rejectWithValue }) => {
    try {
      const { data } = await instanceAxios({
        method: "POST",
        url: "/signup",
        data: {
          name,
          email,
          password,
        },
      });
      toast.success(data.message);
      return data;
    } catch (error) {
      toast.error(error.response.data.message);
      return rejectWithValue(error.response.data.message);
    }
  }
);
export const fetchSigin = createAsyncThunk(
  "auth/fetchSigin",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const { data } = await instanceAxios({
        method: "POST",
        url: "/signin",
        data: {
          email,
          password,
        },
      });
      toast.success(data.message);
      return data;
    } catch (error) {
      toast.error(error.response.data.message);
      return rejectWithValue(error.response.data.message);
    }
  }
);
export const getUser = createAsyncThunk(
  "auth/getUser",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await instanceAxios({
        method: "GET",
        url: "/user",
      });
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: {},
    token: "",
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSignup.fulfilled, (state) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchSignup.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSignup.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchSigin.fulfilled, (state, action) => {
        state.token = action.payload.token;
        window.localStorage.setItem("token", action.payload.token);
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchSigin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSigin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.loading = false;
        state.error = null;
      })
      .addCase(getUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const authReducer = authSlice.reducer;
// export const { setActiveBoard } = dashboardSlice.actions;
