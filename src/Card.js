// import { memo } from 'react';

function Card({pokemon}) {
    console.log('rendered: ', pokemon)
    return (
        <div>
            <h1>Name: {pokemon.title}</h1>
            <img src={pokemon.img} alt={`${pokemon.title}`} />
        </div>
    )
}

export default Card;