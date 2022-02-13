import axios from 'axios'

export const loadPokeApi = async() => {
    try {
        const url = 'https://pokeapi.co/api/v2/pokemon/pikachu'
        const result = await axios (url, {
            method: 'GET',
            headers: {'content-type': 'application/json'},
            data: null
        })
        console.log(result.data.name)
        return result.data.name
    }catch(error){
        return error 
    }
}