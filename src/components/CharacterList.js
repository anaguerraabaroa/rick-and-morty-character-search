import React from "react";
import CharacterCard from "./CharacterCard";
import PropTypes from "prop-types";

const CharacterList = (props) => {
  // render
  const sortCharacterList = props.characterList.sort((a, b) =>
    a.name > b.name ? 1 : a.name < b.name ? -1 : 0
  );

  const characterItems = sortCharacterList.map((character) => {
    return (
      <li key={character.id} className="character__list--item">
        <CharacterCard character={character} />
      </li>
    );
  });

  const searchResults =
    sortCharacterList.length !== 0 ? (
      <ul className="character__results--list">{characterItems}</ul>
    ) : (
      <p className="character__results--error">
        We <i className="character__error--icon fas fa-heart"></i> your
        creativity but we are afraid that this character doesn't exist
      </p>
    );

  return <section className="character__results">{searchResults}</section>;
};

// verify types
CharacterList.propTypes = {
  characterList: PropTypes.arrayOf(PropTypes.object),
};

export default CharacterList;
