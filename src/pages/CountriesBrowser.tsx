import CountryList from "../components/CountryListContainer/CountryListContainer";
import PageLayout from "../components/PageLayout/PageLayout";
import SearchBar from "../components/SearchSettings/SearchSettings";
import { useEffect, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { RootState, AppDispatch } from "../store/store";
import { useSelector, useDispatch } from "react-redux";
import { changeCurrentPage } from "../store/ui-slice";
import { applyFilters } from "../utils/filter";
import { useNavigate, useSearchParams } from "react-router-dom";
import { applySorting } from "../utils/sorting";

import styles from "./CountriesBrowser.module.css";
import {
  changeRegionFilter,
  changeSearchKey,
  changeSortingOption,
} from "../store/data-slice";

const CountriesBrowser = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { theme, countriesOnPage, currentPage } = useSelector(
    (store: RootState) => store.ui
  );
  const {
    currentRegionFilter,
    currentSearchKey,
    countriesData,
    currentSortingOption,
  } = useSelector((state: RootState) => state.data);

  const [searchParams, setSearchParams] = useSearchParams();
  const [isInitialRender, setIsInitialRender] = useState(true);

  const regionSearchParam = searchParams.get("region");
  const pageSearchParam = searchParams.get("page");
  const searchKeyParam = searchParams.get("searchKey");
  const sortByParam = searchParams.get("sortBy");

  const navigate = useNavigate();

  useEffect(() => {
    navigate(`?${searchParams.toString()}`);
  }, [pageSearchParam]);

  useEffect(() => {
    if (isInitialRender) {
      if (pageSearchParam) {
        dispatch(changeCurrentPage(Number(pageSearchParam)));
      } else {
        dispatch(changeCurrentPage(1));
      }

      if (regionSearchParam) {
        dispatch(changeRegionFilter(regionSearchParam));
      } else {
        dispatch(changeRegionFilter("All Regions"));
      }

      if (searchKeyParam) {
        dispatch(changeSearchKey(searchKeyParam));
      } else {
        dispatch(changeSearchKey(""));
      }

      if (sortByParam) {
        dispatch(changeSortingOption(sortByParam));
      } else {
        dispatch(changeSortingOption("A-Z"));
      }
      setIsInitialRender(false);
    }

    setSearchParams({
      region: currentRegionFilter,
      page: currentPage.toString(),
      searchKey: currentSearchKey,
      sortBy: currentSortingOption,
    });
  }, [
    currentPage,
    currentRegionFilter,
    currentSearchKey,
    currentSortingOption,
  ]);

  const filteredCountries = applyFilters(
    currentRegionFilter,
    currentSearchKey,
    countriesData
  );

  const sortedCountries = applySorting(filteredCountries, currentSortingOption);

  function handleNextPageClick() {
    if (currentPage < Math.floor(sortedCountries.length / countriesOnPage)) {
      dispatch(changeCurrentPage(currentPage + 1));
    }
  }

  function handlePreviousPageClick() {
    if (currentPage > 1) {
      dispatch(changeCurrentPage(currentPage - 1));
    }
  }

  const previousButtonStyles =
    currentPage < 2
      ? `${styles.buttonPrevious} ${styles.disabled}`
      : styles.buttonPrevious;

  const nextButtonStyles =
    Math.floor(sortedCountries.length / countriesOnPage) < currentPage + 1
      ? `${styles.buttonNext} ${styles.disabled}`
      : styles.buttonNext;

  // redirect to the last page if manually change the search param in URL if it exceeds the number of pages
  if (
    sortedCountries.length > 0 &&
    currentPage > Math.floor(sortedCountries.length / countriesOnPage)
  ) {
    if (Math.floor(sortedCountries.length / countriesOnPage) === 0) {
      dispatch(changeCurrentPage(1));
    } else {
      dispatch(
        changeCurrentPage(Math.floor(sortedCountries.length / countriesOnPage))
      );
    }
  }

  return (
    <PageLayout>
      <SearchBar />
      <CountryList countries={sortedCountries} pageNumber={currentPage - 1} />
      {sortedCountries.length > 0 ? (
        <>
          <button
            className={previousButtonStyles}
            onClick={handlePreviousPageClick}
          >
            <IoIosArrowBack
              className={`${styles.buttonArrow} ${styles[theme]}`}
            />
          </button>
          <button className={nextButtonStyles} onClick={handleNextPageClick}>
            <IoIosArrowForward
              className={`${styles.buttonArrow} ${styles[theme]}`}
            />
          </button>
        </>
      ) : (
        ""
      )}
    </PageLayout>
  );
};
export default CountriesBrowser;
