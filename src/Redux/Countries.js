import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCountries = createAsyncThunk(
  'countries/fetchCountries',
  async (query) => {
    const endPoint = query ? `countries/${query}` : 'countries';
    const response = await axios.get(`https://disease.sh/v3/covid-19/${endPoint}`);
    return query ? [response.data] : response.data;
  },
);

const countriesSlice = createSlice({
  name: 'countries',
  initialState: {
    countries: [],
    status: null,
  },
  extraReducers: {
    [fetchCountries.pending]: (state) => {
      const newState = state;
      newState.status = 'loading';
    },
    [fetchCountries.fulfilled]: (state, action) => {
      const newState = state;
      newState.status = 'succeeded';
      newState.countries = action.payload;
    },
    [fetchCountries.rejected]: (state, action) => {
      const newState = state;
      newState.status = 'failed';
      newState.error = action.error.message;
    },
  },
});

export const { action } = countriesSlice.actions;

export default countriesSlice.reducer;
