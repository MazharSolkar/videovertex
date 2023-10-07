import { createSlice } from '@reduxjs/toolkit';
import { LIVE_CHAT_COUNT } from './constants';

const chatSlice = createSlice({
  name: 'chatSlice',
  initialState: {
    messages: [],
  },
  reducers: {
    addMessage: (state, action) => {
      // unshift will push at the start of array push pushes at the end
      state.messages.splice(LIVE_CHAT_COUNT, 1);
      state.messages.push(action.payload);
    },
  },
});

export const { addMessage } = chatSlice.actions;

export default chatSlice.reducer;
