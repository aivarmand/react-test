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
  const pokemoniInfo = await fetch(url)
  setValitudPokemon(await pokemoniInfo.json())
}

  return (
    <div className="App">
      <Pais />
      {valitudPokemon ? 
        <div>
          <PokemoniInfo pokemon={valitudPokemon} />
          <br />
          <br />
          <div className='nupud'>
            <div className='kustuta' onClick={() => { pariPokemoniInfo(`https://pokeapi.co/api/v2/pokemon/${valitudPokemon.id - 1}`) }}>Eelmine</div>
            <div className='kustuta' onClick={() => { pariPokemoniInfo(`https://pokeapi.co/api/v2/pokemon/${valitudPokemon.id + 1}`) }}>Järgmine</div>
          </div>
          <br />
          <br />
          <a className='kustuta' onClick={() => { setValitudPokemon(undefined)}}>Tagasi</a>
        </div> : 
        <div>
        <PokemonideList pokemonid={pokemonid} pariPokemoniInfo={pariPokemoniInfo} />
        <br />
        <br />
        <div  className='navigeerimine' >
          {eelmineUrl ? <span onClick={() => { pariPokemonid(eelmineUrl)}}> {'<'} Eelmine leht</span> : null}
          <span> | </span>
          {jargmineUrl ? <span onClick={() => { pariPokemonid(jargmineUrl)}}>Järgmine leht {'>'}</span> : null}
        </div>
        </div>}
      <br />
      <br />
    </div>
  )
}

export default App