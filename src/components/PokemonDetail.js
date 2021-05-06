import axios from 'axios'
import React, {useState, useEffect} from 'react'

function PokemonDetail(props) {

    // State to store pokemon detail
    const [pokemonDetail, updatePokemon] = useState(null)

    const getData = () => {
        // make an api call to get pokemon details
        let pokemonid = Number(props.match.params.id) + 1
        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonid}/`)
            .then((response) => {
                const {height, weight, sprites} = response.data 
                let detail = {
                    height : height,
                    weight: weight,
                    image: sprites.other.dream_world.front_default,
                    id:  Number(props.match.params.id)
                }
                updatePokemon(detail)
            })
    }

    // Behaves as your componentDidMount
    useEffect(() => {
        console.log('Did Mount')
        getData()
    }, [])

     // Behaves as your componentDidUpdate
    useEffect(() => {
        console.log('Did Update')
        let stateId = pokemonDetail?.id
        let propsId =  Number(props.match?.params?.id)

        // --------------IMPORTANT--------------------
        // Checks if the id in the browser is not same as the id in the state
        // if not, fetch the pokemon details and show it
        if (stateId !== propsId) {
             //fetch the pokemon again
            getData()
        }
    })

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

export default PokemonDetail

