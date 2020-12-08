import React from "react";
import PropTypes from "prop-types";

const Filters = (props) => {
  // event
  const handleFilter = (ev) => {
    const data = {
      name: ev.currentTarget.name,
      value: ev.currentTarget.value,
    };
    props.handleFilter(data);
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
        <label htmlFor="species" className="select__label">
          Species:
        </label>
        <select
          className="select__input"
          id="species"
          name="species"
          value={props.filterSpecies}
          onChange={handleFilter}
        >
          <option value="all">All</option>
          <option value="human">Human</option>
          <option value="alien">Alien</option>
        </select>

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
