import FilterBar from "./FilterBar";
import styles from "./SearchSettings.module.css";
import SettingsBar from "./SearchBar";

const SearchSettings = () => {
  return (
    <section className={styles.searchSettingsContainer}>
      <SettingsBar />
      <FilterBar />
    </section>
  );
};
export default SearchSettings;
