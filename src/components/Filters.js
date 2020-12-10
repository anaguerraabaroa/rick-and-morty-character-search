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

  const genderElements = props.filteredCharacterGender.map((gender, index) => {
    return (
      <label htmlFor="gender" className="checkbox__legend" key={index}>
        <input
          id="gender"
          type="checkbox"
          value={gender}
          name="gender"
          onChange={handleFilter}
          className="checkbox__input"
        />
        {gender}
      </label>
    );
  });

  return (
    <section className="search__section" role="search">
      <form className="form" onSubmit={preventDefault}>
        <i className="form__icon fab fa-reddit-alien"></i>
        <label className="form__label" htmlFor="formText">
          Enter your favourite character
        </label>
        <input
          className="form__textInput"
          type="text"
          name="text"
          value={props.filterText}
          placeholder="ej: Rick"
          id="formText"
          onChange={handleFilter}
        />
        <div className="filters__wrapper">
          <div className="filters__species">
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
          </div>
          <div className="filters__wrapper2">
            <div className="filters__status">
              <label className="radio__label">Status:</label>
              <div className="filters__radio">
                <label htmlFor="status1" className="radio__legend">
                  <input
                    id="status1"
                    type="radio"
                    value="all"
                    name="status"
                    onChange={handleFilter}
                    checked={props.filterStatus === "all"}
                    className="radio__input"
                  />
                  All
                </label>
                <label htmlFor="status2" className="radio__legend">
                  <input
                    id="status2"
                    type="radio"
                    value="alive"
                    name="status"
                    onChange={handleFilter}
                    checked={props.filterStatus === "alive"}
                    className="radio__input"
                  />
                  Alive
                </label>
                <label htmlFor="status3" className="radio__legend">
                  <input
                    id="status3"
                    type="radio"
                    value="dead"
                    name="status"
                    onChange={handleFilter}
                    checked={props.filterStatus === "dead"}
                    className="radio__input"
                  />
                  Dead
                </label>
                <label htmlFor="status4" className="radio__legend">
                  <input
                    id="status4"
                    type="radio"
                    value="unknown"
                    name="status"
                    onChange={handleFilter}
                    checked={props.filterStatus === "unknown"}
                    className="radio__input"
                  />
                  Unknown
                </label>
              </div>
            </div>
            <div className="filters__gender">
              <label className="checkbox__label">Gender:</label>
              <div className="filters__checkbox">{genderElements}</div>
            </div>
          </div>
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
  handleFilter: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
  filterText: PropTypes.string.isRequired,
  filterSpecies: PropTypes.string.isRequired,
  filterStatus: PropTypes.string.isRequired,
  filteredCharacterGender: PropTypes.array.isRequired,
};

export default Filters;
