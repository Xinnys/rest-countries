import {
  FilterOption,
  FilterOptions,
  SortingOption,
  SortingOptions,
} from "./models";

export const regionFilters: FilterOptions = [
  FilterOption.All,
  FilterOption.Africa,
  FilterOption.Americas,
  FilterOption.Asia,
  FilterOption.Europe,
  FilterOption.Oceania,
];

export const sortingOptions: SortingOptions = [
  SortingOption.PopulationDesc,
  SortingOption.PopulationAsc,
  SortingOption.AZ,
  SortingOption.ZA,
  SortingOption.None,
];
