import { Link } from "react-router-dom";
import styles from "./BorderCountryButton.module.css";

const BorderCountryButton: React.FC<{
  countryName: string;
  theme: string;
}> = ({ countryName, theme }) => {
  return (
    <Link to={`/countries/${countryName}`}>
      <button className={`${styles.button} ${styles[theme]}`}>
        {countryName}
      </button>
    </Link>
  );
};
export default BorderCountryButton;
