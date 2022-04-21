import { createAsyncThunk } from '@reduxjs/toolkit'
import { removeToken } from '../../../utils/HelperFunctions';
import api from '../../../services/api';

export const fetchUserData = createAsyncThunk('auth/fetchUserData', async (_, { rejectWithValue }) => {
    try {
        const response = await api.me();
        return response.data;
    } catch (e) {
        removeToken();
        return rejectWithValue('');
    }
});

export const signUp = createAsyncThunk('auth/signup', async (payload, { rejectWithValue }) => {
    let inputData = {
        email: payload.email,
        username: payload.username,
        password: payload.password
    };

    const response = await api.signup(payload.email, payload.password);

    if(!response.data.user){
        removeToken();
        return rejectWithValue('');
    }

    const createResponse = await api.createOwnUser(inputData);

    if(createResponse.statusCode >= 400){
        removeToken();
        return rejectWithValue('');
    }
    
    return createResponse.data;
});

export const login = createAsyncThunk('auth/login', async (payload, { rejectWithValue }) => {
    const response = await api.signin(payload.email, payload.password);

    if(!response.data.user){
        removeToken();
        return rejectWithValue('');
    }

    const userResponse = await api.me();

    if(userResponse.statusCode >= 400){
        removeToken();
        return rejectWithValue('');
    }

    return userResponse.data;
});

export const signOut = createAsyncThunk('auth/signOut', async () => {
    await api.signout();
    removeToken();
});