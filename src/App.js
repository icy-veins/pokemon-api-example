import { useState, useEffect, useRef } from 'react';
import Card from './Card.js';
function App() {
  // const [ searchItem, setSearchItem ] = useState("pikachu");
  const [ pokemon, setPokemon ] = useState({});
  const inputElement = useRef(null);

  async function getPokemon(input = "pikachu") {
    // console.log('search: ', searchItem);
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${input}`);
    const data = await response.json();
    const pokemonObj = {
      title: data.name,
      img: data.sprites.front_default
    };
    setPokemon(pokemonObj);
  }

  useEffect(() => {
    getPokemon();
  }, [])

  function updateSearch(input) {
     getPokemon(input.current.value);
  }

  console.log('SearchItem: ', inputElement);
  console.log('Pokemon: ', pokemon);
  return (
    <div className="App">
        <input type="text" ref={inputElement}/>
        <button onClick={() => updateSearch(inputElement)}>search</button>
        <Card pokemon={pokemon}/>
    </div>
  );
}

export default App;
