import React from "react";
import PropTypes from "prop-types";

const FilterBySpecies = (props) => {
  //event
  const handleFilter = (ev) => {
    const data = {
      name: ev.currentTarget.name,
      value: ev.currentTarget.value,
    };
    props.handleFilter(data);
  };

  return (
    <div className="form__filter--species">
      <label className="species__label" htmlFor="species">
        Species:
      </label>
      <select
        className="species__input--select"
        id="species"
        name="species"
        value={props.filterSpecies}
        onChange={handleFilter}
      >
        <option value="all">All</option>
        <option value="human">Human</option>
        <option value="alien">Alien</option>
      </select>
    </div>
  );
};

FilterBySpecies.propTypes = {
  handleFilter: PropTypes.func.isRequired,
  filterSpecies: PropTypes.string.isRequired,
};

export default FilterBySpecies;
