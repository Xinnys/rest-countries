import styles from "./SearchBar.module.css";
import { BiSearchAlt2 } from "react-icons/bi";
import { useSelector } from "react-redux/es/exports";
import { RootState } from "../store/store";
import { useState } from "react";

const SearchBar = () => {
  const theme = useSelector((state: RootState) => state.ui.theme);
  const [filterText, setFilterText] = useState("");

  function handleUpdateFilterText(e: React.FormEvent<HTMLInputElement>) {
    setFilterText(e.currentTarget.value);
  }

  return (
    <div className={styles.searchBar}>
      <BiSearchAlt2 />
      <input
        type="text"
        placeholder="Search for a country..."
        className={styles[theme]}
        value={filterText}
        onChange={handleUpdateFilterText}
      />
    </div>
  );
};
export default SearchBar;
