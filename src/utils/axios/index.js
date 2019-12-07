import axios from 'axios'

const instance = axios.create({
    baseURL: window.SITE_CONFIG.API_URL,
})

export default instance