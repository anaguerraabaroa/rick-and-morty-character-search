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

  const searchError =
    props.characterList.length === 0 ? (
      <p className="character__results--error">
        We <i className="character__error--icon fas fa-heart"></i> your
        creativity but we are afraid that this character doesn't exist
      </p>
    ) : (
      ""
    );

  return (
    <section className="character__results">
      {searchError}
      <ul className="character__results--list">{characterItems}</ul>
    </section>
  );
};

// verify types
CharacterList.propTypes = {
  characterList: PropTypes.arrayOf(PropTypes.object),
};

export default CharacterList;
