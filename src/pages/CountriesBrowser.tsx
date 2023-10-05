import CountryList from "../components/CountryListContainer";
import PageLayout from "../components/PageLayout";
import SearchBar from "../components/SearchSettings";

const CountriesBrowser = () => {
  return (
    <PageLayout>
      <SearchBar />
      <CountryList />
    </PageLayout>
  );
};
export default CountriesBrowser;
