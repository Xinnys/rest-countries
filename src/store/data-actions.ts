import { createAsyncThunk } from "@reduxjs/toolkit";
import { Countries } from "../models";

export const fetchAllCountries = createAsyncThunk<Countries>(
  "countries/fetch",
  async () => {
    const response = await fetch("https://restcountries.com/v3.1/all", {
      method: "GET",
    });

    const data = response.json();

    return data;
  }
);
