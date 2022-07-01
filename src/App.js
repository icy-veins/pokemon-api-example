import { useState, useEffect, useRef } from 'react';
import Card from './Card.js';
function App() {
  const [ pokemon, setPokemon ] = useState({});
  const inputElement = useRef(null);
  const renderCount = useRef(0);

  useEffect(() => {
    renderCount.current += 1;
  })

  async function getPokemon(input = "pikachu") {
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
  return (
    <div className="App">
        <input type="text" ref={inputElement}/>
        <button onClick={() => updateSearch(inputElement)}>search</button>
        <Card pokemon={pokemon}/>
        <p>Render count: {renderCount.current}</p>
    </div>
  );
}

export default App;
