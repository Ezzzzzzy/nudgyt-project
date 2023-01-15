import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { configureStore, MiddlewareArray } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import UserSlice from './Home/UserSlice';


const persistConfig = {
    key: 'root',
    storage: storage,
};

export const store = configureStore({
    reducer: {
        UserSlice
    },
}
);

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export const AppDispatch: () => typeof store.dispatch = useDispatch
export const AppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector



