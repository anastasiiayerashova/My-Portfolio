import axios from "axios";

const backendApi = axios.create({
    baseURL: 'https://portfolio-backend-1-8rgl.onrender.com'
})

export const getData = async () => {
    try {
        const { data } = await backendApi.get('/projects')
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