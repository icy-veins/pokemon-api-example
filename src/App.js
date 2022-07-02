import { useState, useEffect, useRef } from 'react';
import Input from './Input.js';
import Card from './Card.js';
function App() {
  const [ searchItem, setSearchItem ] = useState("pikachu");
  const [ pokemon, setPokemon ] = useState({});
  const renderCount = useRef(0);
  
  function updateSearch(text) {
    setSearchItem(text);
  }
  
  //To keep track of how many re-renders happen
  useEffect(() => {
    renderCount.current+=1; //Does not crash as it doesn't cause a re-render like state does!
  });

  /*
    Initial render happens after component renders it then re-renders as useEffect gets called after initial render!
  */
  useEffect(() => {
    async function getPokemon() {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${searchItem}`);
      const data = await response.json();
      const pokemonObj = {
        title: data.name,
        img: data.sprites.front_default
      };
      setPokemon(pokemonObj);
    }
    getPokemon();
  }, [searchItem])

  return (
    <div className="App">
        <Input updateSearch={updateSearch}/>
        <Card pokemon={pokemon}/>
        <br />
        <p>Render Count: {renderCount.current}</p>
    </div>
  );
}

export default App;
