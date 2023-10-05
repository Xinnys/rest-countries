import styles from "./FilterBar.module.css";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import FilterList from "./FilterList";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

const FilterBar = () => {
  const [isListActive, setIsListActive] = useState(false);
  const theme = useSelector((state: RootState) => state.ui.theme);
  const filter = useSelector((state: RootState) => state.data.currentFilter);

  function handleToggleList() {
    setIsListActive((prev) => !prev);
  }

  return (
    <div className={styles.filterBar}>
      <button onClick={handleToggleList} className={styles[theme]}>
        {filter}
        {isListActive ? <IoIosArrowUp /> : <IoIosArrowDown />}
      </button>
      {isListActive && <FilterList />}
    </div>
  );
};
export default FilterBar;
