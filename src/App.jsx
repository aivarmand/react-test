import React, { useState, useEffect } from 'react'
import Pais from './Pais'
import PokemonideList from './PokemonideList'
import PokemoniInfo from './PokemoniInfo'
import './App.css'


function App() {
  const [valitudPokemon, setValitudPokemon] =useState()
  const [pokemonid, setPokemonid] = useState([])
  const [eelmineUrl, setEelmineUrl] = useState(null)
  const [jargmineUrl, setJargmineUrl] = useState(null)

useEffect(() => {
  
  pariPokemonid('https://pokeapi.co/api/v2/pokemon/')
}, [])

const pariPokemonid = async (url) => {
  if (!url) return;
  const laetudPokemnonid = await (await fetch(url)).json()
  setPokemonid(laetudPokemnonid.results)
  setEelmineUrl(laetudPokemnonid.previous)
  setJargmineUrl(laetudPokemnonid.next)
}

const pariPokemoniInfo = async (url) => {
  console.log(url)
  const pokemoniInfo = await fetch(url)
  setValitudPokemon(await pokemoniInfo.json())
}

  return (
    <div className="App">
      <Pais />
      {valitudPokemon ? 
        <div>
          <a className='kustuta' onClick={() => { setValitudPokemon(undefined)}}>Kustuta valitud pokemon.</a>
          <br />
          <br />
          <PokemoniInfo pokemon={valitudPokemon} />
        </div> : 
        <div>
        <PokemonideList pokemonid={pokemonid} pariPokemoniInfo={pariPokemoniInfo} />
        <div  className='navigeerimine' >
          <span onClick={() => { pariPokemonid(eelmineUrl)}}> {'<'} Eelmine leht</span>
          <span> | </span>
          <span onClick={() => { pariPokemonid(jargmineUrl)}}>Järgmine leht {'>'}</span>
        </div>
        </div>}
      <br />
      <br />
    </div>
  )
}

export default App