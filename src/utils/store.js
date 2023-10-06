import { configureStore } from '@reduxjs/toolkit';
import appReducer from './appSlice';
import searchReducer from './SearchSlice';

const store = configureStore({
  reducer: {
    appSlice: appReducer,
    searchSlice: searchReducer,
  },
});

export default store;
