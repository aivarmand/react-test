const Pokemon = (props) => {
    return (
        <div className="pokemoniinfo">
            <img className="pilt" src={props.pokemon.sprites.front_default}></img>
            <div>ID: { props.pokemon.id}</div>
            <div className="pokemoniinfo_nimi">Nimi: { props.pokemon.name}</div>
            <div>Kaal: { props.pokemon.weight}kg</div>
            <div>Kõrgus: { props.pokemon.height}ft</div>
        </div>
    )
}

export default Pokemon