import React, { Component } from 'react'
import axios from 'axios'

class PokemonDetail extends Component {

    state = {
        pokemonDetail: null
    }

    getData = () => {
        // make an api call to get pokemon details
        let pokemonid = Number(this.props.match.params.id) + 1
        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonid}/`)
            .then((response) => {
                const {height, weight, sprites} = response.data 
                let detail = {
                    height : height,
                    weight: weight,
                    image: sprites.other.dream_world.front_default,
                    id:  Number(this.props.match.params.id)
                }
                this.setState({
                    pokemonDetail: detail
                })
            })
    }

    componentDidMount(){ 
        console.log('Did Mount')
        this.getData()
    }

    componentDidUpdate(){
        console.log('Did Update')
        let stateId = this.state.pokemonDetail?.id
        let propsId =  Number(this.props.match?.params?.id)
        if (stateId !== propsId) {
             //fetch the pokemon again
            this.getData()
        }
    }

    render() {
        console.log('Rendering')
        const { pokemonDetail } = this.state

        if (!pokemonDetail) {
            return <h1>Loading. . . </h1>
        }

        return (
            <div>
                <h1>Detail page</h1>
                <img src={pokemonDetail.image} />
                <h4>Height: {pokemonDetail.height}</h4>
                <h4>Weight: {pokemonDetail.weight}</h4>
            </div>
        )
    }
}

export default PokemonDetail
