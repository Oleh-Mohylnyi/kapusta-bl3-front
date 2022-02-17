import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify'

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
    // console.log('addTransactionThunk state :>> ', state);
    // console.log('addTransactionThunk newTransactions :>> ', state);
    console.log(newTransactions);
    try {
      const response = await fetch(BASE_URL + transactions, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${state.auth.token}`,
        },
        body: JSON.stringify(newTransactions),
      });

      const {data:{transaction}} = await response.json();   
      console.log('addTransactionThunk data:>>', transaction);
  
      return transaction;
    } catch (error) {
      rejectWithValue(error.message);
      // console.log('addTransactionThunk error :>> ', error);
    }
  },
);

export const deleteTransactionThunk = createAsyncThunk(
  'transactions/delTransaction',
  async (id, { rejectWithValue, getState }) => {
    const {auth:{token}, transactions:{transactions}} = getState();
    // console.log('transactions :>> ', transactions);
    if (!token) {
      throw new Error('no authorization yet')
    } 
      try {
        const response = await fetch(BASE_URL + `${delTransaction}${id}`, {
          method: 'DELETE',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',            
          },
        });
    // console.log('deleteTransactionThunk response :>> ', response);
        if (response.ok) {
        toast('Запис видалено. Заходьте ще!')
        const data = transactions.filter(transaction => transaction.id !== id);
        // console.log('deleteTransactionThunk data :>> ', data);
        return data;
          // return id;
      } else {
        throw new Error({ message: 'error' });
      }
        
      } catch (error) {
        rejectWithValue(error.message);
        //  console.log('deleteTransactionThunk error :>> ', error);
      }
    
  },
);