import Cookies from 'js-cookie';

export const getToken = () => {
    return Cookies.get('sFrontToken');
}

export const removeToken = () => {
    Cookies.set('sFrontToken', '');
}

export const setToken = (val) => {
    Cookies.set('sFrontToken', val);
}
