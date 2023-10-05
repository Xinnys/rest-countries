import styles from "./FilterList.module.css";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { Filter, Filters } from "../data";

const filters: Filters = [
  Filter.All,
  Filter.Africa,
  Filter.America,
  Filter.Asia,
  Filter.Europe,
  Filter.Oceania,
];

const FilterList = () => {
  const theme = useSelector((state: RootState) => state.ui.theme);
  const filter = useSelector((state: RootState) => state.data.currentFilter);

  return (
    <ul className={styles.list + " " + styles[theme]}>
      {filters.map((element) => {
        if (filter !== element) return <li key={element}>{element}</li>;
      })}
    </ul>
  );
};
export default FilterList;
