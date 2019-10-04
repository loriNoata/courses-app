import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-mypr.firebaseio.com/'
}); 

export default instance; 