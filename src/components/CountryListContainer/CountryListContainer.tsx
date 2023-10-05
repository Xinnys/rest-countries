import CountryCard from "../CountryCard/CountryCard";
import styles from "./CountryListContainer.module.css";
import { Countries } from "../../models";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

const CountryListContainer: React.FC<{
  countries: Countries;
  pageNumber: number;
}> = ({ countries, pageNumber }) => {
  const navigate = useNavigate();
  const isLoading = useSelector((state: RootState) => state.data.isLoading);
  const countriesOnPage = useSelector(
    (state: RootState) => state.ui.countriesOnPage
  );

  if (isLoading) {
    return <h2>Loading countries...</h2>;
  }

  function goToCountryPage(countryName: string) {
    navigate(`/countries/${countryName}`);
  }

  const renderedItems = [];

  if (countries.length > 0) {
    for (
      let i = 0;
      i < countriesOnPage &&
      pageNumber * countriesOnPage + i < countries.length;
      i++
    ) {
      renderedItems.push(
        <CountryCard
          key={i}
          country={countries[pageNumber * countriesOnPage + i]}
          onCardClick={goToCountryPage}
        />
      );
    }
  }

  return (
    <section className={styles.countryListContainer}>
      {renderedItems.length > 0 ? renderedItems : <h3>No countries found</h3>}
    </section>
  );
};
export default CountryListContainer;
