
import { get } from './shared/rest.service'

export const loadPokeApi = async(categories) => {
    // categories es UN TEXTO que puede ser por ejemplo pokemons || locations || pokeball
    try {
        const result = await get(categories)
        return result
    }catch(error){
        return error 
    }
}