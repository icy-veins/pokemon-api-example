function Card({pokemon}) {
    console.log('Card Pokemon', pokemon);

    return (
        <div>
            <h1>Name: {pokemon.title}</h1>
            <img src={pokemon.img} alt={`pokemon image of ${pokemon.title}`} />
        </div>
    )
}

export default Card;