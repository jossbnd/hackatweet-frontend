import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const likedSlice = createSlice({
  name: "liked",
  initialState,
  reducers: {
    addTweet: (state, action) => {
      state.value.push(action.payload)
    },
    removeTweet: (state, action) => {
        state.value = state.value.filter(tweet => tweet.token !== action.payload.token);
      },
  },
});

export const { addTweet, removeTweet } = likedSlice.actions;
export default likedSlice.reducer;
