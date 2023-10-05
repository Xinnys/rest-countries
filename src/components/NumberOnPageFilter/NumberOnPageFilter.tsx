import styles from "./NumberOnPageFilter.module.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import { changeCountriesOnPage } from "../../store/ui-slice";

const NumberOnPage = () => {
  const dispatch = useDispatch();
  const { theme, countriesOnPage } = useSelector(
    (state: RootState) => state.ui
  );

  function handleDecreaseCountriesOnPage() {
    if (countriesOnPage > 1) {
      dispatch(changeCountriesOnPage(countriesOnPage - 1));
    }
  }

  function handleIncreaseCountriesOnPage() {
    dispatch(changeCountriesOnPage(countriesOnPage + 1));
  }

  return (
    <div className={`${styles.filterBar} ${styles[theme]}`}>
      <button onClick={handleDecreaseCountriesOnPage} className={styles[theme]}>
        <IoIosArrowBack />
      </button>
      <p>{countriesOnPage} pcs</p>
      <button onClick={handleIncreaseCountriesOnPage} className={styles[theme]}>
        <IoIosArrowForward />
      </button>
    </div>
  );
};
export default NumberOnPage;
