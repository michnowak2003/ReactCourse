import axios from 'axios';

const KEY = 'AIzaSyD2jBoDa_N-UbkSKUQgfUCIIZnWH4VWHpI';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})