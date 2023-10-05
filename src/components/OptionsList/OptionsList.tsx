import styles from "./OptionsList.module.css";
import {
  FilterOption,
  FilterOptions,
  SortingOption,
  SortingOptions,
} from "../../models";

const OptionsList: React.FC<{
  onOptionChange: (element: FilterOption | SortingOption) => any;
  theme: string;
  options: FilterOptions | SortingOptions;
  currentOption: FilterOption | SortingOption;
}> = ({ onOptionChange, theme, options, currentOption }) => {
  function handleApplyOption(element: FilterOption | SortingOption) {
    onOptionChange(element);
  }

  return (
    <ul className={styles.list + " " + styles[theme]}>
      {options.map((element) => {
        if (currentOption !== element)
          return (
            <li key={element} onClick={() => handleApplyOption(element)}>
              {element}
            </li>
          );
      })}
    </ul>
  );
};
export default OptionsList;
