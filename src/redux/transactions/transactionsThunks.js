import { createAsyncThunk } from '@reduxjs/toolkit';

const BASE_URL = ' https://kapusta-smart-finances.herokuapp.com/api';
const transactions = '/transactions';
const delTransaction = '/transactions/';


export const fetchTransactionsThunk = createAsyncThunk(
  'transactions/fetch',
  async (_, { rejectWithValue, getState }) => {
    const state = getState();
    if (!state.auth.token) {
      return;
    } else {
      try {
        const response = await fetch(BASE_URL + transactions, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${state.auth.token}`,
          },
        });
        const data = await response.json();

        return data.data.transactions;
        
      } catch (error) {
        rejectWithValue(error.message);
      }
    }
  },
);

export const addTransactionThunk = createAsyncThunk(
  'transactions/newTransaction',
  async (newTransactions, { rejectWithValue, getState }) => {
    const state = getState();
    console.log('addTransactionThunk state :>> ', state);
    console.log('addTransactionThunk newTransactions :>> ', state);
    try {
      const response = await fetch(BASE_URL + transactions, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${state.auth.token}`,
        },
        body: JSON.stringify(newTransactions),
      });

      const data = await response.json();   
      console.log('addTransactionThunk data:>>', data);
  
      return data;
    } catch (error) {
      rejectWithValue(error.message);
      console.log('addTransactionThunk error :>> ', error);
    }
  },
);

export const deleteTransactionThunk = createAsyncThunk(
  'transactions/delTransaction',
  async (id, { rejectWithValue, getState }) => {
    const state = getState();
    if (!state.auth.token) {
      throw new Error('no authorization yet')
    } 
      try {
        await fetch(BASE_URL + `${delTransaction}${id}`, {
          method: 'DELETE',
          headers: {
            Authorization: `Bearer ${state.auth.token}`,
            'Content-Type': 'application/json',            
          },
        });
        const data = state.transactions.filter(transaction => transaction.id !== id);
        console.log('deleteTransactionThunk data :>> ', data);
        return data;
      } catch (error) {
        rejectWithValue(error.message);
      }
    
  },
);