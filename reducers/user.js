import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: { token: null, username: null }
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state, action) => {
            state.value.token = action.payload.token;
            state.username = action.payload.username;
        },
        logout: (state) => {
            state.value.token = null;
            state.username = null;        
        }
    }
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;