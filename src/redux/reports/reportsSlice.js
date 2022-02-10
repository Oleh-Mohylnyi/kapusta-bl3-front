import { createSlice } from "@reduxjs/toolkit";
import { fetchBalanceThunk} from "./reportsThunk";

export const reportsSlice = createSlice({
    name: "reports",
    initialState: {
        balance: null,
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
                cont: [...payload],
            };
        },
        [fetchBalanceThunk.rejected](state, action) {
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            };
    },
  },
})
export default reportsSlice.reducer;
