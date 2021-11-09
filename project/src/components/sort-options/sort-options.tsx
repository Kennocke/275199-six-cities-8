import React, {useState} from 'react';
import {SortingOptions} from '../../const';

type SortOptionsProps = {
  activeOption: SortingOptions;
  setSortOption: (option: SortingOptions) => void;
  filterOffers: (option: SortingOptions) => void;
};

function SortOptions({activeOption, setSortOption, filterOffers}: SortOptionsProps): JSX.Element {
  const orderedSortOptions = [
    SortingOptions.Popular,
    SortingOptions.LowToHigh,
    SortingOptions.HighToLow,
    SortingOptions.TopRatedFirst,
  ];

  const [openFlag, setOpenFlag] = useState(false);

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span className="places__sorting-type" tabIndex={0} onClick={() => setOpenFlag(!openFlag)}>
        {activeOption}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${(openFlag) ? 'places__options--opened' : ''}`}>
        {orderedSortOptions.map((option) => {
          const elemKey = option;
          return (
            <li
              key={elemKey}
              className="places__option"
              tabIndex={0}
              onClick={() => {
                setOpenFlag(!openFlag);
                setSortOption(option);
                filterOffers(option);
              }}
            >
              {option}
            </li>);
        })}
      </ul>
    </form>
  );
}

export default SortOptions;
