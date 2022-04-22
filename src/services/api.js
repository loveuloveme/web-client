import axios from 'axios'
import { BASE_URL } from './constants';

const _api = axios.create({
    baseURL: BASE_URL,
    withCredentials: true
});

const _buildForm = (email, password) => {
    return {
        formFields: [
            {
                id: "email",
                value: email
            },
            {
                id: "password",
                value: password
            }
        ]
    }
};

const api = {};

api.me = () => _api.get('/api/user/me');
api.signin = (email, password) => _api.post('/auth/signin', _buildForm(email, password));
api.signup = (email, password) => _api.post('/auth/signup', _buildForm(email, password));
api.signout = () => _api.post('/auth/signout');
api.createOwnUser = data => _api.post('/api/user/', data);


export default api;