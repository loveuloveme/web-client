import Cookies from 'js-cookie';

export const getToken = () => {
    return Cookies.get('sAccessToken');
}

export const removeToken = () => {
    Cookies.remove('sAccessToken', '');
}

export const setToken = (val) => {
    Cookies.set('sAccessToken', val);
}
