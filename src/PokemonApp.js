import React, { Component } from 'react'
import axios from 'axios'
import {Link, Route} from 'react-router-dom'
import PokemonDetail from './components/PokemonDetail'

class PokemonApp extends Component {

    state = {
        pokemons: []
    }

    componentDidMount(){
        axios.get('https://pokeapi.co/api/v2/pokemon/')
            .then((response) => {
                this.setState({
                    pokemons: response.data.results
                })
            })
            .catch(() => {
                console.log('Error')
            })
    }

    render() {
        const { pokemons } = this.state
        
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
}

export default PokemonApp


