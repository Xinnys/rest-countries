import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchAllCountries } from "./store/data-actions";
import { AppDispatch } from "./store/store";
import { changeTheme, changeCountriesOnPage } from "./store/ui-slice";

function App() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchAllCountries());
  }, []);

  useEffect(() => {
    const theme = localStorage.getItem("theme");

    if (theme) {
      dispatch(changeTheme(theme));
    }
  }, []);

  useEffect(() => {
    const countriesOnPage = localStorage.getItem("countriesOnPage");

    if (countriesOnPage) {
      dispatch(changeCountriesOnPage(+countriesOnPage));
    }
  }, []);

  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
