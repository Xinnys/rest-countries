export type Countries = Country[];

export type Country = {
  name: { common: string; nativeName: { [key: string]: { official: string } } };
  region: string;
  subregion: string;
  capital: string[];
  population: number;
  flags: { png: string; alt: string };
  tld: string;
  currencies: { [key: string]: { name: string; symbol: string } };
  languages: {};
  cca3: string;
  borders: string[];
  [key: string]: unknown;
};

export type FilterOptions = FilterOption[];

export enum FilterOption {
  All = "All Regions",
  Africa = "Africa",
  Americas = "Americas",
  Asia = "Asia",
  Europe = "Europe",
  Oceania = "Oceania",
}

export function isFilterOption(value: any): value is FilterOption {
  return Object.values(FilterOption).includes(value);
}

export enum Theme {
  Light = "light",
  Dark = "dark",
}

export enum SortingOption {
  AZ = "A - Z",
  ZA = "Z - A",
  PopulationDesc = "Population desc",
  PopulationAsc = "Population asc",
  None = "-",
}

export type SortingOptions = SortingOption[];
