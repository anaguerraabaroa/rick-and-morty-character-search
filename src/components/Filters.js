import React from "react";
import PropTypes from "prop-types";
import FilterByName from "./FilterByName";
import FilterBySpecies from "./FilterBySpecies";
import FilterByStatus from "./FilterByStatus";
import FilterByGender from "./FilterByGender";

const Filters = (props) => {
  // prevent event
  const preventDefault = (ev) => ev.preventDefault();

  return (
    <section className="search__section" role="search">
      <form className="form" onSubmit={preventDefault}>
        <FilterByName
          handleFilter={props.handleFilter}
          filterName={props.filterName}
        />
        <div className="form__filters--wrapper">
          <FilterBySpecies
            handleFilter={props.handleFilter}
            filterSpecies={props.filterSpecies}
          />
          <FilterByStatus
            handleFilter={props.handleFilter}
            filterStatus={props.filterStatus}
          />
          <FilterByGender
            handleFilter={props.handleFilter}
            filteredCharacterGender={props.filteredCharacterGender}
            isChecked={props.isChecked}
          />
        </div>
        <button className="form__reset" onClick={props.handleClick}>
          <i className="form__reset--icon far fa-trash-alt"></i>Reset
        </button>
      </form>
    </section>
  );
};

// control data
Filters.propTypes = {
  handleFilter: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
  filterName: PropTypes.string.isRequired,
  filterSpecies: PropTypes.string.isRequired,
  filterStatus: PropTypes.string.isRequired,
  filteredCharacterGender: PropTypes.array.isRequired,
  isChecked: PropTypes.bool.isRequired,
};

export default Filters;
