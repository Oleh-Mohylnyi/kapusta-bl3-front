import { createSlice } from "@reduxjs/toolkit";
import { fetchBalanceThunk, getIncomeThunk, getExpensesThunk} from "./reportsThunk";

export const reportsSlice = createSlice({
    name: "reports",
    initialState: {
        balance: 0,
        totalIncomes: 0,
        totalExpenses: 0,
        error: "",
        isLoading: false,
        
    },
    extraReducers: {
        
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
        [fetchBalanceThunk.rejected](state, {payload}) {
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
            }
        },
        [getIncomeThunk.fulfilled](state, { payload }) {
             return {
                ...state,
                isLoading: false,
                totalIncomes: payload,
            };
        },
        [getIncomeThunk.rejected](state, { payload }) {
             return {  ...state,
                isLoading: false,
                error: payload,}           
            
        },

        [getExpensesThunk.pending](state, { payload }) {
              return {
                 ...state,
                error: "",
                isLoading: true,
            }            
        },
        [getExpensesThunk.fulfilled](state, { payload }) {
              return {
                ...state,
                isLoading: false,
                totalExpenses: payload,
            };
            
        },
        [getExpensesThunk.rejected](state, { payload }) {
               return {  ...state,
                isLoading: false,
                error: payload,}           
            
        },
            
        }
  },
)
export default reportsSlice.reducer;
