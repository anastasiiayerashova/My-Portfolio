import axios from "axios";

axios.defaults.baseURL = 'https://674a04be8680202966337092.mockapi.io/'

const backendApi = axios.create({
    baseURL: 'https://portfolio-backend-9vv7.onrender.com'
})

export const getData = async () => {
    try {
        const { data } = await axios.get('/projects')
        return data
    }
    catch (e) {
        console.log(e.message)
    }
}

export const createRequest = async ({email, message}) => {
    try {
        await backendApi.post('/backend', {
            email,
            message
        })
        
    }
    catch (e) {
        console.log(e.message)
    }
}