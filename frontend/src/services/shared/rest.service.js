import axios from 'axios'

export const get = async (query) => {
    try {
        const url = `https://pokeapi.co/api/v2/${query}`
        const result = await axios(url, {
            method: 'GET',
            headers: {'content-type' : 'application/json'}
        })
        
        return result.data.results
    } catch (error) {
        return error        
    }
}