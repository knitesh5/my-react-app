import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://my-react-app-fa93c.firebaseio.com/'
});

export default instance;