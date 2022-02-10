import { createSlice } from "@reduxjs/toolkit";
import {
  fetchTransactionsThunk,
  addTransactionsThunk,
  deleteTransactionsThunk,
} from "./transactionsThunks";

const transactionsSlice = createSlice({
  name: "transactions",
  initialState: {
    transaction: [],
    error: "",
    isLoading: false,
  },
  extraReducers: {
    [fetchTransactionsThunk.pending](state, action) {
      return {
        ...state,
        error: "",
        isLoading: true,
      };
    },
    [fetchTransactionsThunk.fulfilled](state, { payload }) {
      return {
        ...state,
        isLoading: false,
        cont: [...payload],
      };
    },
    [fetchTransactionsThunk.rejected](state, action) {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    },
    [addTransactionsThunk.pending](state, action) {
      return {
        ...state,
        error: "",
        isLoading: true,
      };
    },
    [addTransactionsThunk.fulfilled](state, { payload }) {
      return {
        ...state,
        isLoading: false,
        cont: [...state.cont, payload],
      };
    },
    [addTransactionsThunk.rejected](state, action) {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    },
    [deleteTransactionsThunk.pending](state, action) {
      return {
        ...state,
        error: "",
        isLoading: true,
      };
    },
    [deleteTransactionsThunk.fulfilled](state, { payload }) {
      return {
        ...state,
        isLoading: false,
        cont: [...payload],
      };
    },
    [deleteTransactionsThunk.rejected](state, action) {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    },
  },
});

export default transactionsSlice.reducer;
