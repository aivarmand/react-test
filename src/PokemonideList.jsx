const PokemonideListiElement = (props) => {
    return (
        <div className="pokemon-nimekirjas" onClick={() => {props.pariPokemoniInfo(props.pokemon.url) }}>{props.pokemon.name}</div>
    )
}

const PokemonideList = (props) => {
    return (
        <div className="pokemonide_loetelu">
            {props.pokemonid.map(
                pokemon => 
                <PokemonideListiElement 
                    key={pokemon.name}
                    pokemon={pokemon}
                    pariPokemoniInfo={props.pariPokemoniInfo}
                />
            )}
        </div>
    )
}

export default PokemonideList