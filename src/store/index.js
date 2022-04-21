import { configureStore } from '@reduxjs/toolkit'
import authReducer from './slices/auth/auth'
import headerReduces from './slices/header/header'

export default configureStore({
    reducer: {
        auth: authReducer,
        header: headerReduces
    }
})