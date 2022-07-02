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
    const controller = new AbortController();
    const signal = controller.signal;

    async function getPokemon() {
      try {
        const response = await fetch(`http://pokeapi.co/api/v2/pokemon/${searchItem}`, {signal});
        const data = await response.json();
        const pokemonObj = {
          title: data.name,
          img: data.sprites.front_default
        };
        setPokemon(pokemonObj);
      } catch(err) {
        console.log('Error occurred in fetch request: ', err);
      }
    }
    getPokemon();
    return () => {
      controller.abort('Clean up fetch request');
    }
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
