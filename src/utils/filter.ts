import { FilterOption } from "../models";
import { Countries } from "../models";

export function applyFilters(
  regionFilter: FilterOption,
  currentSearchKey: string,
  countries: Countries
) {
  let readyCountries: Countries = [];

  const filteredCountriesByRegion = applyRegionFilter(regionFilter, countries);

  readyCountries = applySearchKeyFilter(
    currentSearchKey,
    filteredCountriesByRegion
  );

  return readyCountries;
}

function applyRegionFilter(filter: FilterOption, countries: Countries) {
  const readyCountries: Countries = [];
  if (filter === FilterOption.All) {
    return countries;
  }

  countries.forEach((element) => {
    if (element.region === filter) {
      readyCountries.push(element);
    }
  });
  return readyCountries;
}

function applySearchKeyFilter(filter: string, countries: Countries) {
  const readyCountries: Countries = [];

  countries.forEach((element) => {
    const filterKeyWord = filter.toLowerCase();

    if (element.name.common.toLowerCase().includes(filterKeyWord)) {
      readyCountries.push(element);
    }
  });

  return readyCountries;
}
