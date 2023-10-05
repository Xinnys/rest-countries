import CountryCard from "./CountryCard";
import styles from "./CountryListContainer.module.css";

const CountryListContainer = () => {
  return (
    <section className={styles.countryListContainer}>
      <CountryCard />
      <CountryCard />
      <CountryCard />
      <CountryCard />
      <CountryCard />
    </section>
  );
};
export default CountryListContainer;
