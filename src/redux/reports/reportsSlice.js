import { createSlice } from "@reduxjs/toolkit";
import {
  fetchBalanceThunk,
  getIncomeThunk,
  getExpensesThunk,
  getMonthlyIncomesThunk,
  getMonthlyExpensesThunk,


  updateBalanceThunk,

  getDetailsThunk,
  addBalanceThunk,

} from "./reportsThunk";

export const reportsSlice = createSlice({
  name: "reports",
  initialState: {
    balance: null,
    totalIncomes: 0,
    totalExpenses: 0,
    monthlyIncome: {},
    monthlyExpenses: {},
    details: {},
    error: "",
    isLoading: false,
  },
  extraReducers: {
    [updateBalanceThunk.pending](state, action) {
      return {
        ...state,
        error: "",
        isLoading: true,
      };
    },
    [updateBalanceThunk.fulfilled](state, { payload }) {
      return {
        ...state,
        isLoading: false,
        balance:  payload,
      };
    },
    [updateBalanceThunk.rejected](state, {payload}) {
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    },
    [fetchBalanceThunk.pending](state, action) {
      return {
        ...state,
        error: "",
        isLoading: true,
      };
    },
    [fetchBalanceThunk.fulfilled](state, { payload }) {
      return {
        ...state,
        isLoading: false,
        balance: payload,
      };
    },
    [fetchBalanceThunk.rejected](state, { payload }) {
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    },
    [getIncomeThunk.pending](state, { payload }) {
      return {
        ...state,
        error: "",
        isLoading: true,
      };
    },
    [getIncomeThunk.fulfilled](state, { payload }) {
      return {
        ...state,
        isLoading: false,
        totalIncomes: payload,
      };
    },
    [getIncomeThunk.rejected](state, { payload }) {
      return { ...state, isLoading: false, error: payload };
    },

    [getExpensesThunk.pending](state, { payload }) {
      return {
        ...state,
        error: "",
        isLoading: true,
      };
    },
    [getExpensesThunk.fulfilled](state, { payload }) {
      return {
        ...state,
        isLoading: false,
        totalExpenses: payload,
      };
    },
    [getExpensesThunk.rejected](state, { payload }) {
      return { ...state, isLoading: false, error: payload };
    },
    [getMonthlyIncomesThunk.pending](state, { payload }) {
      return {
        ...state,
        error: "",
        isLoading: true,
      };
    },
    [getMonthlyIncomesThunk.fulfilled](state, { payload }) {
      return {
        ...state,
        isLoading: false,
        monthlyIncome: payload,
      };
    },
    [getMonthlyIncomesThunk.rejected](state, { payload }) {
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    },
    [getMonthlyExpensesThunk.pending](state, { payload }) {
      return {
        ...state,
        error: "",
        isLoading: true,
      };
    },
    [getMonthlyExpensesThunk.fulfilled](state, { payload }) {
      return {
        ...state,
        isLoading: false,
        monthlyExpenses: payload,
      };
    },
    [getMonthlyExpensesThunk.rejected](state, { payload }) {
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    },
    [getDetailsThunk.pending](state, { payload }) {
      return {
        ...state,
        error: "",
        isLoading: true,
      };
    },
    [getDetailsThunk.fulfilled](state, { payload }) {
      return {
        ...state,
        isLoading: false,
        details: payload,
      };
    },
    [getDetailsThunk.rejected](state, { payload }) {
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    },
  },
});
export default reportsSlice.reducer;
