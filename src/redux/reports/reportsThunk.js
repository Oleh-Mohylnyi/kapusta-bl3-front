import { createAsyncThunk } from "@reduxjs/toolkit";

const BASE_URL = " https://kapusta-smart-finances.herokuapp.com/api";
const balance = "/reports/balance ";



export const fetchBalanceThunk = createAsyncThunk(
  "balance/fetch",
  async (_, { rejectWithValue, getState }) => {
    const state = getState();
    if (!state.auth.token) {
      console.log(state.auth.token);
      return;
    } else {
      try {
        const response = await fetch(BASE_URL + balance, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${state.auth.token}`,
          },
        });

        const data = await response.json();

        if (data.data[0]) {
          if (data.data[0] && data.data[1]) {
            return Math.abs(data.data[0].total - data.data[1].total);
          }
          return data.data[0].total;
        }
        return 0;
      } catch (error) {
        rejectWithValue(error.message);
      }
    }
  }
);

export const getIncomeThunk = createAsyncThunk(
  "transactions/totalIncomes",
  async (_, { rejectWithValue, getState }) => {
    const state = getState();

    try {
      const response = await fetch(BASE_URL + balance, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${state.auth.token}`,
        },
      });

      const data = await response.json();

           if (data.data[0]) {//прибыльесть при наличии хотя бы одного эл-та
         if (data.data[0]._id === true) {
          return data.data[0].total;
         } else if (data.data[1]._id === true) {
           return data.data[1].total; 
        }
      }    


     return
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);

export const getExpensesThunk = createAsyncThunk(
  "transactions/totalExpenses",
  async (_, { rejectWithValue, getState }) => {
    const state = getState();

    try {
      const response = await fetch(BASE_URL + balance, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${state.auth.token}`,
        },
      });

      const data = await response.json();

      if (data.data[0] && data.data[1]) {//траты есть только если два эл-та
         if (data.data[0]._id === false) {
          return data.data[0].total;
         } else if (data.data[1]._id === false) {
           return data.data[1].total; 
        }
      }    
return 0
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);
