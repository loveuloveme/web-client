import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    theme: 'light'
};

export const headerSlice = createSlice({
    name: 'header',
    initialState,
    reducers: {
        setHeaderTheme(state, action){
            state.theme = action.payload;
        }
    }
})


export const { setHeaderTheme } = headerSlice.actions;
export default headerSlice.reducer;