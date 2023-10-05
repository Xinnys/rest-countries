import Dropdown from "../Dropdown/Dropdown";
import { FilterOption, SortingOption } from "../../models";
import { regionFilters } from "../../data";
import { useDispatch, useSelector } from "react-redux";
import { changeRegionFilter } from "../../store/data-slice";
import { changeCurrentPage } from "../../store/ui-slice";
import { RootState } from "../../store/store";

const FilterDropdown = () => {
  const dispatch = useDispatch();
  const currentFilter = useSelector(
    (state: RootState) => state.data.currentRegionFilter
  );

  function handleFilterModeChange(element: FilterOption) {
    console.log(element);
    dispatch(changeRegionFilter(element));
    dispatch(changeCurrentPage(1));
  }

  return (
    <Dropdown
      onOptionChange={
        handleFilterModeChange as (
          element: FilterOption | SortingOption
        ) => void
      }
      options={regionFilters}
      currentOption={currentFilter}
    />
  );
};
export default FilterDropdown;
