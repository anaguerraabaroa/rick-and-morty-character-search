import React from "react";
import PropTypes from "prop-types";

const Filters = (props) => {
  // event
  const handleFilter = (ev) => {
    const data = {
      name: ev.currentTarget.name,
      value: ev.currentTarget.value,
      checked: ev.currentTarget.checked,
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
        <div className="filters">
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
          <label className="radio__label">Status:</label>
          <label htmlFor="status1" className="radio__label">
            <input
              id="status1"
              type="radio"
              value="all"
              name="status"
              onChange={handleFilter}
              className="radio__input"
            />
            All
          </label>
          <label htmlFor="status2" className="radio__label">
            <input
              id="status2"
              type="radio"
              value="alive"
              name="status"
              onChange={handleFilter}
              className="radio__input"
            />
            Alive
          </label>
          <label htmlFor="status3" className="radio__label">
            <input
              id="status3"
              type="radio"
              value="dead"
              name="status"
              onChange={handleFilter}
              className="radio__input"
            />
            Dead
          </label>
          <label htmlFor="status4" className="radio__label">
            <input
              id="status4"
              type="radio"
              value="unknown"
              name="status"
              onChange={handleFilter}
              className="radio__input"
            />
            Unknown
          </label>
        </div>
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
