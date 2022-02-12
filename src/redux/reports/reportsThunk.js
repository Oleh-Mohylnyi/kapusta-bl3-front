import { createAsyncThunk } from "@reduxjs/toolkit";

const BASE_URL = " https://kapusta-smart-finances.herokuapp.com/api/reports";
const balance = "/balance ";
const monthlyIncome = "/summary_income ";
const monthlyExpenses = "/summary_cost ";
const details = "/detail?";

export const fetchBalanceThunk = createAsyncThunk(
  "report/fetchBalance",
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
  "report/totalIncomes",
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

      if (data.data[0]) {
        if (data.data[0]._id === true) {
          return data.data[0].total;
        } else if (data.data[1]._id === true) {
          return data.data[1].total;
        }
      }

      return;
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);

export const getExpensesThunk = createAsyncThunk(
  "report/totalExpenses",
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

      if (data.data[0] && data.data[1]) {
        if (data.data[0]._id === false) {
          return data.data[0].total;
        } else if (data.data[1]._id === false) {
          return data.data[1].total;
        }
      }
      return 0;
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);

export const getMonthlyIncomeThunk = createAsyncThunk(
  "report/monthlyIncome",
  async (_, { rejectWithValue, getState }) => {
    const state = getState();

    try {
      const response = await fetch(BASE_URL + monthlyIncome, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${state.auth.token}`,
        },
      });
      const data = await response.json();

      return data.data;
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);

export const getMonthlyExpensesThunk = createAsyncThunk(
  "report/monthlyExpenses",
  async (_, { rejectWithValue, getState }) => {
    const state = getState();
    try {
      const response = await fetch(BASE_URL + monthlyExpenses, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${state.auth.token}`,
        },
      });
      const data = await response.json();

      return data.data;
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);

// export const getDetailsThunk = createAsyncThunk(
//   "report/monthlyExpenses",
//   async (period, { rejectWithValue, getState }) => {
//     const state = getState();
//     try {
//       const response = await fetch(BASE_URL + details, {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${state.auth.token}year=${period.year}&month=${period.month}`,
//         },
//       });
//       const data = await response.json();

//       return data.data;
//     } catch (error) {
//       rejectWithValue(error.message);
//     }
//   }
// );
