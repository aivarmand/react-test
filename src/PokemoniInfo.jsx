const Pokemon = (props) => {

    return (
        <div className="pokemoniinfo">
            <div className="stat_1">
                <div>Elusid: {props.pokemon.stats[0].base_stat}</div>
                <div>Rünnak: {props.pokemon.stats[1].base_stat}</div>
                <div>Kaitse: {props.pokemon.stats[2].base_stat}</div>
            </div>
            <img className="pilt" src={props.pokemon.sprites.other['official-artwork'].front_default}></img>
            <div className="pokemoniinfo_nimi">{props.pokemon.name}</div>
            <div className="stat_2">
                <div>ID: {props.pokemon.id}</div>
                <div>Kaal: {props.pokemon.weight}g</div>
                <div>Kõrgus: {props.pokemon.height}tolli</div>
            </div>
        </div>
    )
}

export default Pokemon