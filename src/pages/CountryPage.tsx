import PageLayout from "../components/PageLayout/PageLayout";

import { IoIosArrowRoundBack } from "react-icons/io";
import styles from "./CountryPage.module.css";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { useParams } from "react-router-dom";
import { Countries } from "../models";
import { useNavigate } from "react-router-dom";
import BorderCountryButton from "../components/BorderCountryButton/BorderCountryButton";

function findBorderCountries(countries: Countries, borders: string[]) {
  const borderCountriesNames = [];

  for (let i = 0; i < borders?.length; i++) {
    for (let j = 0; j < countries.length; j++) {
      if (borders[i] === countries[j].cca3) {
        borderCountriesNames.push(countries[j].name.common);
        continue;
      }
    }
  }

  return borderCountriesNames;
}

const CountryPage = () => {
  const navigate = useNavigate();
  const theme = useSelector((state: RootState) => state.ui.theme);

  const countries = useSelector((state: RootState) => state.data.countriesData);
  const { countryName } = useParams();
  const country = countries.find(
    (element) => element.name.common === countryName
  );

  const countryNativeName = country?.name.nativeName;
  const firstNativeNameValue = countryNativeName
    ? Object.values(countryNativeName)[0].official
    : undefined;

  const domains = country?.tld;
  const domainNames: string[] = [];
  if (domains) {
    Object.values(domains).forEach((domain) => domainNames.push(domain));
  }

  const currencies = country?.currencies;
  const currencyNames: string[] = [];
  if (currencies) {
    Object.values(currencies).forEach((currency) =>
      currencyNames.push(currency.name)
    );
  }

  const languages = country?.languages;
  const languageNames: string[] = [];
  if (languages) {
    Object.values(languages).forEach((language) => {
      if (typeof language === "string") {
        languageNames.push(language);
      }
    });
  }

  const borders = country?.borders;

  let borderCountries: string[] = [];

  if (borders) {
    borderCountries = findBorderCountries(countries, borders);
  }

  function goBack() {
    navigate(-1);
  }

  return (
    <PageLayout>
      <section className={`${styles.pageContainer} ${styles[theme]}`}>
        <button className={styles.backButton} onClick={goBack}>
          <IoIosArrowRoundBack />
          Back
        </button>
        {country ? (
          <div className={styles.countryInfoContainer}>
            <div className={styles.countryImgContainer}>
              <img
                src={country?.flags.png}
                alt={country?.flags.alt}
                className={styles.countryFlag}
              />
            </div>

            <article className={styles.countryInfo}>
              <h2>{countryName}</h2>

              <div className={styles.countryDetailedInfo}>
                <div>
                  <p>
                    <b>Native name: </b>
                    {firstNativeNameValue ? firstNativeNameValue : "none"}
                  </p>
                  <p>
                    <b>Population: </b> {country?.population.toLocaleString()}
                  </p>
                  <p>
                    <b>Sub region: </b>
                    {country?.subregion ? country?.subregion : "none"}
                  </p>
                  <p>
                    <b>Capital: </b>{" "}
                    {country?.capital ? country?.capital : "none"}
                  </p>
                </div>

                <div>
                  <p>
                    <b>Top Level Domain: </b>{" "}
                    {domainNames.length > 0
                      ? domainNames.map((domain, index) => (
                          <span key={domain}>
                            {domain}
                            {index < domainNames.length - 1 ? ", " : ""}
                          </span>
                        ))
                      : "none"}
                  </p>
                  <p>
                    <b>Currencies: </b>
                    {currencyNames.length > 0
                      ? currencyNames.map((currency, index) => (
                          <span key={currency}>
                            {currency}
                            {index < currencyNames.length - 1 ? ", " : ""}
                          </span>
                        ))
                      : "none"}
                  </p>
                  <p>
                    <b>Languages: </b>
                    {languageNames.length > 0
                      ? languageNames.map((language, index) => (
                          <span key={language}>
                            {language}
                            {index < languageNames.length - 1 ? ", " : ""}
                          </span>
                        ))
                      : "none"}
                  </p>
                </div>
              </div>

              <div>
                <p className={styles.borderCountriesContainer}>
                  <b>Border countries: </b>
                  {borderCountries.length
                    ? borderCountries.map((country) => {
                        return (
                          <BorderCountryButton
                            key={country}
                            countryName={country}
                            theme={theme}
                          />
                        );
                      })
                    : "No border countries."}
                </p>
              </div>
            </article>
          </div>
        ) : (
          <h2
            className={styles.noCountryWarning}
          >{`Country called "${countryName}" is not found.`}</h2>
        )}
      </section>
    </PageLayout>
  );
};
export default CountryPage;
