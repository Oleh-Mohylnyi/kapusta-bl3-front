// import { composeWithDevTools } from 'redux-devtools-extension';
// import { createStore } from 'redux';
// import { combineReducers } from 'redux';
import contactsReducer from './contacts/reducers';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
// import logger from 'redux-logger';
import {
    persistReducer,
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER
} from 'redux-persist';
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import { phonebookApi } from './contacts/slice';
import authReducer from './auth/slice';

const contactsPersistConfig = {
  key: 'phonebook',
    storage,
    whitelist: [],
    blacklist: ['filter']
}
const authPersistConfig = {
  key: "authToken",
  storage,
  whitelist: ['token'],
};

const authPersistReducer = persistReducer(authPersistConfig, authReducer);

const middleware = [
    ...getDefaultMiddleware(
        {serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
        }}
    ),
    phonebookApi.middleware,
    // logger
];

const store = configureStore({
    reducer: {
        contacts: persistReducer(contactsPersistConfig, contactsReducer),
        // contacts: contactsReducer,
        [phonebookApi.reducerPath]: phonebookApi.reducer,
        auth: authPersistReducer,
    },
    middleware,
    // devTools: process.env.MODE.ENV === 'development'
});

const persistor = persistStore(store);

// const store = createStore(rootReducer, composeWithDevTools());

// eslint-disable-next-line
export default { store, persistor };
