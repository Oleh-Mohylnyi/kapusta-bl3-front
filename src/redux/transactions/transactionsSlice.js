import { createSlice } from "@reduxjs/toolkit";
import {
  fetchTransactionsThunk,
  addTransactionThunk,
  deleteTransactionThunk,
} from "./transactionsThunks";

const transactionsSlice = createSlice({
  name: "transactions",
  initialState: {
    transactions: [],
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
        transactions: [...payload],
      };
    },
    [fetchTransactionsThunk.rejected](state, action) {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    },
    [addTransactionThunk.pending](state, action) {
      return {
        ...state,
        error: "",
        isLoading: true,
      };
    },
    [addTransactionThunk.fulfilled](state, { payload }) {
      return {
        ...state,
        isLoading: false,
        transactions: [...state.transactions, payload],
      };
    },
    [addTransactionThunk.rejected](state, {payload}) {
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    },
    [deleteTransactionThunk.pending](state, action) {
      return {
        ...state,
        error: "",
        isLoading: true,
      };
    },
    [deleteTransactionThunk.fulfilled](state, { payload }) {
      return {
        ...state,
        isLoading: false,
        transactions: [...payload],
      };
    },
    [deleteTransactionThunk.rejected](state,{payload}) {
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    },
  },
});

export default transactionsSlice.reducer;
