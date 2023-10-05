import styles from "./CountryCard.module.css";
import { Country } from "../../models";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

const CountryCard: React.FC<{
  country: Country;
  onCardClick: (countryName: string) => void;
}> = ({ country, onCardClick }) => {
  const theme = useSelector((state: RootState) => state.ui.theme);
  const countryName = country.name.common;

  function handleCardClick() {
    onCardClick(countryName);
  }

  return (
    <article
      className={`${styles.card} ${styles[theme]}`}
      onClick={handleCardClick}
    >
      <img src={country.flags.png} alt={country.flags.alt}></img>
      <div className={styles.countryDetails}>
        <h3>{countryName}</h3>
        <p>
          <b>Population:</b> {country.population.toLocaleString()}
        </p>
        <p>
          <b>Region:</b> {country.region ? country.region : "none"}
        </p>
        <p>
          <b>Capital:</b> {country.capital ? country.capital : "none"}
        </p>
      </div>
    </article>
  );
};
export default CountryCard;
