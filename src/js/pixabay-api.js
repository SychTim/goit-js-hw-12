import axios from 'axios';

const API_KEY = "44874409-49a696090f67a7075082072ae";
axios.defaults.baseURL = 'https://pixabay.com';

async function request(q, page = 1) {
    const response = await axios.get('/api/', {
        params: {
            key: API_KEY,
            q: q,
            image_type: "photo",
            orientation: "horizontal",
            safesearch: "true",
            per_page: 15,
            page: page
        }
    })
    
    return response;
}

export default request;