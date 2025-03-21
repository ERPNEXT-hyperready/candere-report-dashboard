import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import {combineReducers} from '@reduxjs/toolkit'


const authPersistConfig = {
    key: "auth",
    storage,
    version:1
  };

  const rootReducer = combineReducers({
    auth: authReducer

  });
  const persistedAuthReducer = persistReducer(authPersistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedAuthReducer
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
