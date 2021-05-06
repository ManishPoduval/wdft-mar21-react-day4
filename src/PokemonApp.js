import axios from 'axios'
import {Link, Route} from 'react-router-dom'
import PokemonDetail from './components/PokemonDetail'
import React, { useState, useEffect } from 'react'

function PokemonApp() {

    // State to store pokemons list
    const [pokemons, updatePokemons] = useState([])

    // Behaves as your componentDidMount
    useEffect(() => {
        // Fetch all the pokemons list
        axios.get('https://pokeapi.co/api/v2/pokemon/')
            .then((response) => {
                updatePokemons(response.data.results)
            })
            .catch(() => {
                console.log('Error')
            })
    }, [])

    if (!pokemons.length) {
        return <h1>Loading. . . </h1>
    }

    return (
        <div style={{display: 'flex'}}>
            <div>
                <h1>Gotta catch 'em all</h1>
                {
                    pokemons.map((pokemon, i) => {
                        return <div key={i}>
                                <Link to={`/pokemon/${i}`} >{pokemon.name}</Link>
                                </div>
                        })
                }
            </div>
            <Route path="/pokemon/:id" component={PokemonDetail} />
        </div>
    )
}

export default PokemonApp


