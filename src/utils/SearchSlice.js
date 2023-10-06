import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
  name: 'searchSlice',
  initialState: {},
  reducers: {
    cacheResults: (state, action) => {
      // mergin action.payload object and initialState object (spread approach not working hence used Object.assign())
      //   state = { ...action.payload, ...state };
      //   below code should be written for merging objects with spread operator in redux
      //   return { ...state, ...action.payload };

      state = Object.assign(state, action.payload);
    },
  },
});

export const { cacheResults } = searchSlice.actions;

export default searchSlice.reducer;

//  LRU cache (Least Recently Used Cache)
