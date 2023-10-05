import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import { IoMoonOutline, IoMoonSharp } from "react-icons/io5";
import { changeTheme } from "../../store/ui-slice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { Theme } from "../../models";

const Header = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => state.ui.theme);

  function handleChangeTheme() {
    let themeToSet;

    if (theme === Theme.Dark) {
      themeToSet = Theme.Light;
    } else {
      themeToSet = Theme.Dark;
    }

    dispatch(changeTheme(themeToSet));
  }

  const themeIcon = theme === Theme.Dark ? <IoMoonSharp /> : <IoMoonOutline />;

  return (
    <header className={styles.header + " " + styles[theme]}>
      <Link to={"/?region=All+Regions&page=1&searchKey="} reloadDocument={true}>
        Where in the world?
      </Link>
      <button onClick={handleChangeTheme}>
        {themeIcon}
        {theme === Theme.Dark ? "Dark mode" : "Light mode"}
      </button>
    </header>
  );
};
export default Header;
