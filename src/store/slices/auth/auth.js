import { createSlice } from '@reduxjs/toolkit'
import { fetchUserData, login, signOut, signUp } from './authThunk';

const initialState = {
    loading: false,
    signUpError: false,
    signInError: false,
    user: null
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        
    },
    extraReducers: {
        [signOut.fulfilled]: (state, action) => {
            state.loading = false;
            state.user = null;
        },
        [login.pending]: (state, action) => {
            state.loading = true;
        },
        [login.fulfilled]: (state, action) => {
            state.user = action.payload;
            state.loading = false;
        },
        [login.rejected]: (state, action) => {
            state.signInError = true;
            state.loading = false;
        },
        [signUp.pending]: (state, action) => {
            state.loading = true;
        },
        [signUp.fulfilled]: (state, action) => {
            state.user = action.payload;
            state.loading = false;
        },
        [signUp.rejected]: (state, action) => {
            state.signUpError = true;
            state.loading = false;
        },
        [login.rejected]: (state, action) => {
            state.loading = false;
        },
        [fetchUserData.pending]: (state, action) => {
            state.loading = true;
        },
        [fetchUserData.fulfilled]: (state, action) => {
            state.user = action.payload;
            state.loading = false;
        },
        [fetchUserData.rejected]: (state, action) => {
            state.loading = false;
            state.user = null;
        }
    },
})


export const {} = authSlice.actions;

export default authSlice.reducer;