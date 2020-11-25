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
        <i className="form__icon--alien fab fa-reddit-alien"></i>
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
        <button className="form__reset" onClick={props.handleClick}>
          <i className="form__reset--icon far fa-trash-alt"></i>Reset
        </button>
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
