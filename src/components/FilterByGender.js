import React from "react";
import PropTypes from "prop-types";

const FilterByGender = (props) => {
  // event handler
  const handleFilter = (ev) => {
    const data = {
      name: ev.currentTarget.name,
      value: ev.currentTarget.value,
      checked: ev.currentTarget.checked,
    };
    props.handleFilter(data);
  };

  // render gender list
  const genderElements = props.filteredCharacterGender.map((gender, index) => {
    return (
      <label htmlFor="gender" className="gender__legend" key={index}>
        <input
          className="gender__input--checkbox"
          id="gender"
          type="checkbox"
          value={gender}
          name="gender"
          onChange={handleFilter}
        />
        {gender}
      </label>
    );
  });

  return (
    <div className="form__filter--gender">
      <label className="gender__label">Gender:</label>
      <div className="gender__checkbox--wrapper">{genderElements}</div>
    </div>
  );
};

// control data
FilterByGender.propTypes = {
  handleFilter: PropTypes.func.isRequired,
  filteredCharacterGender: PropTypes.array.isRequired,
};

export default FilterByGender;
