import React, { useState, useEffect } from "react";
import api from "../services/api";
import CharacterList from "./CharacterList";
import "../stylesheets/App.scss";

function App() {
  // state
  const [characterList, setCharacterList] = useState([]);

  //api
  useEffect(() => {
    api.getDataFromApi().then((data) => {
      setCharacterList(data);
    });
  }, []);

  return (
    <div className="App">
      <CharacterList characterList={characterList} />
    </div>
  );
}

export default App;
