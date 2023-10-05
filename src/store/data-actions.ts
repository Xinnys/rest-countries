import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchAllCountries = createAsyncThunk(
  "countries/fetch",
  async () => {}
);
