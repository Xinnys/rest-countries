import styles from "./SearchBar.module.css";
import { BiSearchAlt2 } from "react-icons/bi";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { RootState } from "../../store/store";
import { changeSearchKey } from "../../store/data-slice";

const SearchBar = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => state.ui.theme);
  const filterText = useSelector(
    (state: RootState) => state.data.currentSearchKey
  );

  function handleUpdateFilterText(e: React.FormEvent<HTMLInputElement>) {
    dispatch(changeSearchKey(e.currentTarget.value));
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
