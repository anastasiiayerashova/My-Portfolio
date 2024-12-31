import axios from "axios";

axios.defaults.baseURL = 'https://674a04be8680202966337092.mockapi.io/'

export const getData = async () => {
    try {
        const { data } = await axios.get('/projects')
        return data
    }
    catch (e) {
        console.log(e.message)
    }
}