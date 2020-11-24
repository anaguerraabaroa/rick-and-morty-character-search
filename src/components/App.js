import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import api from "../services/api";
import Filters from "./Filters";
import CharacterList from "./CharacterList";
import CharacterDetail from "./CharacterDetail";
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

  const renderCharacterDetail = (props) => {
    const characterId = parseInt(props.match.params.id);
    const foundCharacter = characterList.find((character) => {
      return character.id === characterId;
    });
    if (foundCharacter) {
      return <CharacterDetail foundCharacter={foundCharacter} />;
    } else {
      return (
        <p className="error__route">
          <i className="error__route--icon fas fa-rocket"></i> We are sorry but
          you are trying to land on a nonexistent planet
        </p>
      );
    }
  };

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <main className="main" role="main">
            <Filters handleFilter={handleFilter} filterText={filterText} />
            <CharacterList characterList={filteredCharacters} />
          </main>
        </Route>
        <Route path="/character-detail/:id" render={renderCharacterDetail} />
      </Switch>
    </div>
  );
}

export default App;
