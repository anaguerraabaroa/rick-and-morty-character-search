import React from "react";
import PropTypes from "prop-types";

const FilterByStatus = (props) => {
  //event
  const handleFilter = (ev) => {
    const data = {
      name: ev.currentTarget.name,
      value: ev.currentTarget.value,
    };
    props.handleFilter(data);
  };

  return (
    <div className="form__filter--status">
      <label className="status__label">Status:</label>
      <div className="status__radio--wrapper">
        <label className="status__legend" htmlFor="status1">
          <input
            className="status__input--radio"
            id="status1"
            type="radio"
            value="all"
            name="status"
            onChange={handleFilter}
            checked={props.filterStatus === "all"}
          />
          All
        </label>
        <label className="status__legend" htmlFor="status2">
          <input
            className="status__input--radio"
            id="status2"
            type="radio"
            value="alive"
            name="status"
            onChange={handleFilter}
            checked={props.filterStatus === "alive"}
          />
          Alive
        </label>
        <label className="status__legend" htmlFor="status3">
          <input
            className="status__input--radio"
            id="status3"
            type="radio"
            value="dead"
            name="status"
            onChange={handleFilter}
            checked={props.filterStatus === "dead"}
          />
          Dead
        </label>
        <label className="status__legend" htmlFor="status4">
          <input
            className="status__input--radio"
            id="status4"
            type="radio"
            value="unknown"
            name="status"
            onChange={handleFilter}
            checked={props.filterStatus === "unknown"}
          />
          Unknown
        </label>
      </div>
    </div>
  );
};

FilterByStatus.propTypes = {
  handleFilter: PropTypes.func.isRequired,
  filterStatus: PropTypes.string.isRequired,
};

export default FilterByStatus;
