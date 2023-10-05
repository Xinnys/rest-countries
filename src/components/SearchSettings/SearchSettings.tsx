import styles from "./SearchSettings.module.css";
import SearchBar from "../SearchBar/SearchBar";
import NumberOnPage from "../NumberOnPageFilter/NumberOnPageFilter";
import SortingDropdown from "../SortingDropdown/SortingDropdown";

import FilterDropdown from "../FilterDropdown/FilterDropdown";

const SearchSettings = () => {
  return (
    <section className={styles.searchSettingsContainer}>
      <div className={styles.leftFilters}>
        <SearchBar />
        <SortingDropdown />
      </div>
      <div className={styles.rightFilters}>
        <NumberOnPage />
        <FilterDropdown />
      </div>
    </section>
  );
};
export default SearchSettings;
