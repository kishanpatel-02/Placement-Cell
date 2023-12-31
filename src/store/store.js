import { configureStore } from '@reduxjs/toolkit'
import adminReducer from '../slices/adminSlice'
import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import storageSession from 'reduxjs-toolkit-persist/lib/storage/session'

const persistConfig = {
    key: 'root',
  storage:storageSession,
}

const rootReducer = combineReducers({ 
    admin: adminReducer
})
  
const persistedReducer = persistReducer(persistConfig, rootReducer)
  
export const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: [thunk]
})
  
export const persistor = persistStore(store)
