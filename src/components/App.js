import React, { useState, useEffect } from "react";
import api from "../services/api";
import Filters from "./Filters";
import CharacterList from "./CharacterList";
import "../stylesheets/App.scss";

function App() {
  // state
  const [characterList, setCharacterList] = useState([]);
  const [filterText, setFilterText] = useState("");

  //api
  useEffect(() => {
    api.getDataFromApi().then((data) => {
      setCharacterList(data);
    });
  }, []);

  // event
  const handleFilter = (filterText) => {
    setFilterText(filterText);
  };

  // render
  const filteredCharacters = characterList.filter((character) => {
    return character.name.toLowerCase().includes(filterText.toLowerCase());
  });

  return (
    <div className="App">
      <Filters handleFilter={handleFilter} filterText={filterText} />
      <CharacterList characterList={filteredCharacters} />
    </div>
  );
}

export default App;
