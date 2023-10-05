import Dropdown from "../Dropdown/Dropdown";
import { useDispatch, useSelector } from "react-redux";
import { FilterOption, SortingOption } from "../../models";
import { sortingOptions } from "../../data";
import { RootState } from "../../store/store";
import { changeSortingOption } from "../../store/data-slice";
import { changeCurrentPage } from "../../store/ui-slice";

const SortingDropdown = () => {
  const dispatch = useDispatch();
  const currentSorting = useSelector(
    (state: RootState) => state.data.currentSortingOption
  );

  function handleSortingModeChange(element: SortingOption) {
    console.log(element);
    dispatch(changeSortingOption(element));
    dispatch(changeCurrentPage(1));
  }

  return (
    <Dropdown
      onOptionChange={
        handleSortingModeChange as (
          element: FilterOption | SortingOption
        ) => void
      }
      options={sortingOptions}
      currentOption={currentSorting}
    />
  );
};
export default SortingDropdown;
