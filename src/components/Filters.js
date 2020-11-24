import React from "react";
import PropTypes from "prop-types";

const Filters = (props) => {
  // event
  const handleFilter = (ev) => {
    props.handleFilter(ev.currentTarget.value);
  };

  const preventDefault = (ev) => ev.preventDefault();

  return (
    <section className="search" role="search">
      <form className="form" onSubmit={preventDefault}>
        <i className="form__icon fab fa-reddit-alien"></i>
        <label className="form__label" htmlFor="formText">
          Enter your favourite character
        </label>
        <input
          className="form__input"
          type="text"
          name="text"
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
