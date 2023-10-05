import styles from "./Dropdown.module.css";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import OptionsList from "../OptionsList/OptionsList";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import {
  FilterOption,
  FilterOptions,
  SortingOption,
  SortingOptions,
} from "../../models";

const Dropdown: React.FC<{
  onOptionChange: (element: FilterOption | SortingOption) => void;
  options: FilterOptions | SortingOptions;
  currentOption: FilterOption | SortingOption;
}> = ({ onOptionChange, options, currentOption }) => {
  const [isListActive, setIsListActive] = useState(false);
  const theme = useSelector((state: RootState) => state.ui.theme);

  function handleToggleList() {
    setIsListActive((prev) => !prev);
  }

  function handleOptionChange(option: FilterOption | SortingOption) {
    handleToggleList();
    onOptionChange(option);
  }

  return (
    <div className={styles.dropdown}>
      <button onClick={handleToggleList} className={styles[theme]}>
        {currentOption}
        {isListActive ? <IoIosArrowUp /> : <IoIosArrowDown />}
      </button>
      {isListActive && (
        <OptionsList
          onOptionChange={handleOptionChange}
          theme={theme}
          options={options}
          currentOption={currentOption}
        />
      )}
    </div>
  );
};
export default Dropdown;
