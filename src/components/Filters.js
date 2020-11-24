import React from "react";
import PropTypes from "prop-types";

const Filters = (props) => {
  // event
  const handleFilter = (ev) => {
    props.handleFilter(ev.currentTarget.value);
  };

  return (
    <section className="search" role="search">
      <form className="form">
        <label className="form__label" htmlFor="formText">
          Enter your favourite character
        </label>
        <i className="form__icon fas fa-search"></i>
        <input
          className="form__input"
          type="text"
          value={props.filterText}
          placeholder="ej: Rick"
          id="formText"
          onChange={handleFilter}
        />
      </form>
    </section>
  );
};

// verify types
Filters.propTypes = {
  filterText: PropTypes.string.isRequired,
  handleFilter: PropTypes.func.isRequired,
};

export default Filters;
