import axios from 'axios'

const httpClient = axios.create({
    baseURL: '',
    headers: {
        Accept: 'application/json',
        'Content-Type' : 'application/json'
    }
});

export default httpClient;
