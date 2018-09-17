import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://myburger-b8646.firebaseio.com/'
});

export default instance;