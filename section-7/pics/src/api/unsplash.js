import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID e028479f783a226aab41b8537d00388474ce6d0a95296c05a3a059468e2cc209'
    }
})