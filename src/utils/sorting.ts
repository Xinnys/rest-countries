import { Countries, SortingOption } from "../models";

export function applySorting(countries: Countries, sortingMode: SortingOption) {
  let sortedCountries = countries;

  if (sortingMode === SortingOption.None) {
    return countries;
  } else if (sortingMode === SortingOption.PopulationAsc) {
    sortedCountries.sort((a, b) => populationAsc(a.population, b.population));
  } else if (sortingMode === SortingOption.PopulationDesc) {
    sortedCountries.sort((a, b) => populationDesc(a.population, b.population));
  } else if (sortingMode === SortingOption.AZ) {
    sortedCountries.sort((a, b) => az(a.name.common, b.name.common));
  } else if (sortingMode === SortingOption.ZA) {
    sortedCountries.sort((a, b) => za(a.name.common, b.name.common));
  }

  return sortedCountries;
}

function az(a: string, b: string) {
  return a.localeCompare(b);
}

function za(a: string, b: string) {
  return b.localeCompare(a);
}

function populationAsc(a: number, b: number) {
  return a - b;
}

function populationDesc(a: number, b: number) {
  return b - a;
}
