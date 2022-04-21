import axios from 'axios'

const baseURL = 'http://localhost:3000/';

const _api = axios.create({
    baseURL,
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

api.me = () => _api.get('/user/me');
api.signin = (email, password) => _api.post('/auth/signin', _buildForm(email, password));
api.signup = (email, password) => _api.post('/auth/signup', _buildForm(email, password));
api.signout = () => _api.post('/auth/signout');
api.createOwnUse = data => _api.post('/user/', data)


export default api;