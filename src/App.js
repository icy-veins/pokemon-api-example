import { useState, useEffect } from 'react';
import Input from './Input.js';
import Card from './Card.js';
function App() {
  const [ searchItem, setSearchItem ] = useState("pikachu");
  const [ pokemon, setPokemon ] = useState({});

  function updateSearch(text) {
    console.log('Got in here: ', text);
    setSearchItem(text);
  }
  
  useEffect(() => {
    async function getPokemon() {
      // console.log('search: ', searchItem);
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
  console.log('SearchItem: ', searchItem);
  // console.log('Pokemon: ', pokemon);
  return (
    <div className="App">
        {/* <Input  updateSearch={updateSearch}/> */}
        <input type="text" onChange={(event) => setText(event.target.value)}/>
        <button onClick={() => updateSearch(text)}>search</button>
        <Card pokemon={pokemon}/>
    </div>
  );
}

export default App;
