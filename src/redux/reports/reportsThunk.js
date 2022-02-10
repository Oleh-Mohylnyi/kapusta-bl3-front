import { createAsyncThunk } from '@reduxjs/toolkit';

const BASE_URL = ' https://kapusta-smart-finances.herokuapp.com/api';
const balance = '/reports/balance ';



export const fetchBalanceThunk = createAsyncThunk(
  'balance/fetch',
  async (_, { rejectWithValue, getState }) => {
    const state = getState();
    if (!state.auth.token) {
      console.log(state.auth.token);
      return;
    } else {
      try {
        const response = await fetch(BASE_URL + balance, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${state.auth.token}`,
          },
        });
        console.log(response);
        const data = await response.json();        
        return data;
      } catch (error) {
        rejectWithValue(error.message);
      }
    }
  },
);

// export const addTransactionsThunk = createAsyncThunk(
//   'transactions/add',
//   async (newTransactions, { rejectWithValue, getState }) => {
//     const state = getState();

//     try {
//       const response = await fetch(BASE_URL + transactions, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: `Bearer ${state.auth.token}`,
//         },
//         body: JSON.stringify(newTransactions),
//       });

//       const data = await response.json();

//       return data;
//     } catch (error) {
//       rejectWithValue(error.message);
//     }
//   },
// );

// export const deleteTransactionsThunk = createAsyncThunk(
//   'transactions/delete',
//   async (id, { rejectWithValue, getState }) => {
//     const state = getState();
//     if (!state.auth.token) {
//       return;
//     } else {
//       try {
//         await fetch(BASE_URL + `${delTransaction}${id}`, {
//           method: 'DELETE',
//           headers: {
//             'Content-Type': 'application/json',
//             Authorization: `Bearer ${state.auth.token}`,
//           },
//         });
//         const data = state.transactions.filter(transaction=> transaction.id !== id);
//         return data;
//       } catch (error) {
//         rejectWithValue(error.message);
//       }
//     }
//   },
// );