import React from "react";
import PropTypes from "prop-types";

const CharacterCard = (props) => {
  return (
    <article className="character__card">
      <img
        src={props.character.image}
        alt={props.character.name}
        title={props.character.name}
        className="character__card--img"
      />
      <h2 className="character__card--name">{props.character.name}</h2>
      <p className="character__card--species">{props.character.species}</p>
    </article>
  );
};

// verify types
CharacterCard.propTypes = {
  character: PropTypes.object,
};

export default CharacterCard;
