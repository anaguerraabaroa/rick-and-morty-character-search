import React from "react";
import CharacterCard from "./CharacterCard";
import PropTypes from "prop-types";

const CharacterList = (props) => {
  // render
  const characterItems = props.characterList.map((character) => {
    return (
      <li key={character.id} className="character__list--item">
        <CharacterCard character={character} />
      </li>
    );
  });

  return (
    <section className="character__results">
      <ul className="character__results--list">{characterItems}</ul>
    </section>
  );
};

// verify types
CharacterList.propTypes = {
  characterList: PropTypes.arrayOf(PropTypes.object),
};

export default CharacterList;
