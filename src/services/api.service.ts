import axios from 'axios'

const {
    REACT_APP_API_URL,
    REACT_APP_API_KEY,
    REACT_APP_API_HOST
} = process.env

export const $api = axios.create({
    baseURL: REACT_APP_API_URL,
    headers: {
        'X-RapidAPI-Key': REACT_APP_API_KEY!,
        'X-RapidAPI-Host': REACT_APP_API_HOST!
    }
})


