import { createSlice } from "@reduxjs/toolkit";
import { FilterOption, SortingOption } from "../models";
import { fetchAllCountries } from "./data-actions";
import { Countries } from "../models";

const initialCountriesData: Countries = [];

const initial = {
  currentRegionFilter: FilterOption.All,
  currentSortingOption: SortingOption.AZ,
  currentSearchKey: "",
  countriesData: initialCountriesData,
  countryData: [],
  isLoading: false,
};

const slice = createSlice({
  name: "data",
  initialState: initial,
  reducers: {
    changeRegionFilter(state, action) {
      state.currentRegionFilter = action.payload;
    },
    changeSearchKey(state, action) {
      state.currentSearchKey = action.payload;
    },
    changeSortingOption: (state, action) => {
      state.currentSortingOption = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllCountries.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchAllCountries.fulfilled, (state, action) => {
      state.countriesData = action.payload;
      state.isLoading = false;
    });
  },
});

export const { changeRegionFilter, changeSearchKey, changeSortingOption } =
  slice.actions;

export default slice.reducer;
