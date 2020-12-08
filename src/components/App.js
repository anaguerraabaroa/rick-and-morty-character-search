import React, { useState, useEffect } from "react";
import { Link, Route, Switch } from "react-router-dom";
import api from "../services/api";
import Header from "./Header";
import Filters from "./Filters";
import CharacterList from "./CharacterList";
import CharacterDetail from "./CharacterDetail";
import Footer from "./Footer";
import "../stylesheets/App.scss";

function App() {
  // state
  const [characterList, setCharacterList] = useState([]);
  const [filterText, setFilterText] = useState("");
  const [filterSpecies, setFilterSpecies] = useState("all");

  //api
  useEffect(() => {
    api.getDataFromApi().then((data) => {
      setCharacterList(data);
    });
  }, []);

  // event
  const handleFilter = (data) => {
    if (data.name === "text") {
      setFilterText(data.value);
    } else if (data.name === "species") {
      setFilterSpecies(data.value);
    }
  };

  const handleClick = () => {
    setFilterText("");
    setFilterSpecies("all");
  };

  // render
  const filteredCharacters = characterList
    .filter((character) => {
      return character.name.toLowerCase().includes(filterText.toLowerCase());
    })
    .filter((character) => {
      if (filterSpecies === "all") {
        return characterList;
      } else {
        return character.species.toLowerCase() === filterSpecies;
      }
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
        <div className="error__route">
          <i className="error__route--icon fas fa-rocket"></i>
          <p className="error__route--text">
            We are sorry but you are trying to land on a nonexistent planet
          </p>
          <Link
            to="/"
            className="error_route--btn"
            title="Back to character list"
          >
            Return
          </Link>
        </div>
      );
    }
  };

  return (
    <div className="app">
      <Header />
      <Switch>
        <Route exact path="/">
          <main className="main" role="main">
            <Filters
              handleFilter={handleFilter}
              handleClick={handleClick}
              filterText={filterText}
              filterSpecies={filterSpecies}
            />
            <CharacterList characterList={filteredCharacters} />
          </main>
        </Route>
        <Route path="/character-detail/:id" render={renderCharacterDetail} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
