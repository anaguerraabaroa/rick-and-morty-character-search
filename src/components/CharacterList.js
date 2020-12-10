import React from "react";
import CharacterCard from "./CharacterCard";
import PropTypes from "prop-types";

const CharacterList = (props) => {
  // sort character list alphabetically
  const sortCharacterList = props.characterList.sort((a, b) => {
    if (a.name > b.name) {
      return 1;
    } else if (a.name < b.name) {
      return -1;
    } else {
      return 0;
    }
  });

  // render each character card of the list
  const characterItems = sortCharacterList.map((character) => {
    return (
      <li key={character.id} className="character__list--item">
        <CharacterCard character={character} />
      </li>
    );
  });

  // render character list or an error message if the character doesn't exist
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

// control data
CharacterList.propTypes = {
  characterList: PropTypes.arrayOf(PropTypes.object),
};

export default CharacterList;
