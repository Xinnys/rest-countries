import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import { IoMoonOutline, IoMoonSharp } from "react-icons/io5";
import { changeTheme } from "../store/ui-slice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";

import { Theme } from "../data";

const Header = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => state.ui.theme);

  function handleChangeTheme() {
    dispatch(changeTheme());
  }

  const themeIcon = theme === Theme.Dark ? <IoMoonSharp /> : <IoMoonOutline />;

  return (
    <header className={styles.header + " " + styles[theme]}>
      <Link to={""}>Where in the world?</Link>
      <button onClick={handleChangeTheme}>
        {themeIcon}
        Dark Mode
      </button>
    </header>
  );
};
export default Header;
